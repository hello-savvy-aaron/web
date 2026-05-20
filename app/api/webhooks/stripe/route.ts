import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "missing signature" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("[stripe-webhook] STRIPE_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "server misconfigured" }, { status: 500 });
  }

  // Signature verification requires the RAW body — req.json() would mutate
  // whitespace and break the HMAC check.
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret,
    );
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed", err);
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.expired") {
      const session = event.data.object as Stripe.Checkout.Session;
      const email =
        session.customer_details?.email ?? session.customer_email ?? "unknown";
      const amount =
        session.amount_total != null
          ? `$${(session.amount_total / 100).toFixed(2)}`
          : "unknown";
      console.log(
        `[stripe-webhook] abandoned checkout — session=${session.id} email=${email} amount=${amount} source=${session.metadata?.source ?? "unknown"}`,
      );
    }
    // All other events are intentionally ignored. Stripe's built-in
    // notification emails cover successful payments, refunds, and disputes.
  } catch (err) {
    console.error("[stripe-webhook] handler error", err);
    // 500 triggers Stripe's retry (exponential backoff, up to 3 days).
    return NextResponse.json({ error: "handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
