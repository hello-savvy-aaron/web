"use server";

import { redirect } from "next/navigation";
import { getStripe } from "@/lib/stripe";

const BLUEPRINT_UNIT_AMOUNT_CENTS = 44900;

export async function startBlueprintCheckout() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://hellosavvy.design";

  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Blueprint",
            description:
              "A fixed-price discovery engagement: discovery questions, honest plan or honest no, written recap within 24 hours.",
          },
          unit_amount: BLUEPRINT_UNIT_AMOUNT_CENTS,
        },
        quantity: 1,
      },
    ],
    success_url: `${appUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/payment/cancel`,
    expires_at: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    metadata: { source: "home_hero_cta", product: "blueprint" },
  });

  if (!session.url) {
    throw new Error("Stripe did not return a Checkout URL");
  }

  redirect(session.url);
}
