"use server";

import { redirect } from "next/navigation";
import { getStripe } from "@/lib/stripe";

const BLUEPRINT_UNIT_AMOUNT_CENTS = 44900;

/** Coupon ID created in Stripe Dashboard per §3 of the Stripe setup doc. */
const BLUEPRINT_CREDIT_COUPON_ID = "BLUEPRINT-CREDIT";

function appUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? "https://hellosavvy.design";
}

/**
 * Blueprint — one-time $449 discovery engagement.
 *
 * Uses STRIPE_BLUEPRINT_PRICE_ID when set (the real Dashboard Price object).
 * Falls back to inline price_data so the flow works before the Dashboard
 * product is created — and so we can iterate locally without round-tripping.
 */
export async function startBlueprintCheckout() {
  const priceId = process.env.STRIPE_BLUEPRINT_PRICE_ID;

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      priceId
        ? { price: priceId, quantity: 1 }
        : {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Blueprints",
                description:
                  "A fixed-price discovery engagement: discovery questions, honest plan or honest no, written recap within 24 hours.",
              },
              unit_amount: BLUEPRINT_UNIT_AMOUNT_CENTS,
            },
            quantity: 1,
          },
    ],
    success_url: `${appUrl()}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl()}/payment/cancel`,
    expires_at: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    metadata: { source: "home_hero_cta", product: "blueprint" },
  });

  if (!session.url) {
    throw new Error("Stripe did not return a Checkout URL");
  }

  redirect(session.url);
}

/**
 * G2M — $1,000/mo recurring (or $10,000/yr if STRIPE_G2M_ANNUAL_PRICE_ID).
 *
 * Requires STRIPE_G2M_PRICE_ID — there's no inline fallback because Stripe
 * requires a real Price object for recurring billing. Create the Product +
 * monthly Price in Dashboard first, then drop the ID in env.
 *
 * `applyBlueprintCredit` auto-applies the BLUEPRINT-CREDIT coupon for clients
 * upgrading from Blueprint within 30 days (per §3 of the Stripe setup doc).
 * Use `allow_promotion_codes` for ad-hoc codes the customer can enter.
 */
export async function startG2MCheckout(
  options: { annual?: boolean; applyBlueprintCredit?: boolean } = {},
) {
  const priceId = options.annual
    ? process.env.STRIPE_G2M_ANNUAL_PRICE_ID
    : process.env.STRIPE_G2M_PRICE_ID;

  if (!priceId) {
    throw new Error(
      `STRIPE_G2M${options.annual ? "_ANNUAL" : ""}_PRICE_ID is not set. ` +
        "Create the G2M product in Stripe Dashboard, then add the Price ID to env.",
    );
  }

  const session = await getStripe().checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    discounts: options.applyBlueprintCredit
      ? [{ coupon: BLUEPRINT_CREDIT_COUPON_ID }]
      : undefined,
    // Only enable promo codes when we're NOT pre-applying a discount —
    // Stripe rejects sessions with both `discounts` and `allow_promotion_codes`.
    allow_promotion_codes: options.applyBlueprintCredit ? undefined : true,
    success_url: `${appUrl()}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl()}/payment/cancel`,
    metadata: {
      source: options.applyBlueprintCredit ? "blueprint_upgrade" : "g2m_signup",
      product: options.annual ? "g2m_annual" : "g2m_monthly",
    },
  });

  if (!session.url) {
    throw new Error("Stripe did not return a Checkout URL");
  }

  redirect(session.url);
}
