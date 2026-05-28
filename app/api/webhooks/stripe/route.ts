import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Stripe webhook handler — observability-first.
 *
 * Per §8 of the Stripe setup doc, this subscribes to:
 *   checkout.session.completed     — fires when any Checkout payment succeeds
 *   checkout.session.expired       — abandoned-checkout signal
 *   customer.subscription.created  — new G2M signup
 *   customer.subscription.updated  — plan change, pause, cancellation
 *   customer.subscription.deleted  — final cancel after dunning failure
 *   invoice.payment_failed         — retry failure (Smart Retries kicks in)
 *   invoice.payment_succeeded      — revenue tracking
 *
 * Each handler currently logs structured payloads and returns 200. Real
 * side-effects (delivery automation, Slack alerts, CRM upserts) are stubbed
 * with TODO comments — wire to Lara's preferred system once decisions land.
 *
 * Stripe retries with exponential backoff for up to 3 days on any non-2xx,
 * so it's safe to return 500 on transient handler failures.
 */
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
    event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed", err);
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "checkout.session.expired":
        handleCheckoutExpired(event.data.object as Stripe.Checkout.Session);
        break;
      case "customer.subscription.created":
        handleSubscriptionCreated(event.data.object as Stripe.Subscription);
        break;
      case "customer.subscription.updated":
        handleSubscriptionUpdated(
          event.data.object as Stripe.Subscription,
          event.data.previous_attributes,
        );
        break;
      case "customer.subscription.deleted":
        handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      case "invoice.payment_succeeded":
        handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      case "invoice.payment_failed":
        handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      default:
        // Subscribed events should be exhaustively listed above. Anything else
        // means the Dashboard webhook config drifted from the code — log so we
        // notice, but ack so Stripe doesn't retry forever.
        console.log(`[stripe-webhook] unhandled event ${event.type} id=${event.id}`);
    }
  } catch (err) {
    console.error(`[stripe-webhook] handler error type=${event.type} id=${event.id}`, err);
    return NextResponse.json({ error: "handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

// --- handlers ---------------------------------------------------------------
// Style: structured, single-line per event. Anything that needs a side-effect
// (email, Slack ping, CRM write) is marked TODO so we can grep later.

function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email ?? session.customer_email ?? "unknown";
  const amount = fmtAmount(session.amount_total);
  const product = session.metadata?.product ?? "unknown";
  const mode = session.mode;

  console.log(
    `[stripe-webhook] checkout.completed session=${session.id} mode=${mode} ` +
      `product=${product} email=${email} amount=${amount} subscription=${session.subscription ?? "—"}`,
  );

  // TODO: trigger Blueprint delivery email when product === "blueprint".
  // TODO: send BLUEPRINT-CREDIT coupon to Blueprint buyers in the delivery email.
  // TODO: kick off G2M onboarding sequence when mode === "subscription".
}

function handleCheckoutExpired(session: Stripe.Checkout.Session) {
  const email = session.customer_details?.email ?? session.customer_email ?? "unknown";
  const amount = fmtAmount(session.amount_total);
  console.log(
    `[stripe-webhook] checkout.expired session=${session.id} email=${email} amount=${amount} source=${session.metadata?.source ?? "unknown"}`,
  );
  // TODO: if email is known, fire a one-shot abandoned-checkout recovery email.
}

function handleSubscriptionCreated(sub: Stripe.Subscription) {
  console.log(
    `[stripe-webhook] subscription.created sub=${sub.id} customer=${sub.customer} ` +
      `status=${sub.status} price=${priceIdsOf(sub).join(",")}`,
  );
  // TODO: write to CRM, send welcome / onboarding email.
}

function handleSubscriptionUpdated(
  sub: Stripe.Subscription,
  previous?: Stripe.Event.Data.PreviousAttributes,
) {
  const changed = previous ? Object.keys(previous).join(",") : "—";
  console.log(
    `[stripe-webhook] subscription.updated sub=${sub.id} status=${sub.status} ` +
      `cancel_at_period_end=${sub.cancel_at_period_end} changed=${changed}`,
  );
  // TODO: detect pauses (`pause_collection`) vs. plan changes and route distinctly.
}

function handleSubscriptionDeleted(sub: Stripe.Subscription) {
  console.log(
    `[stripe-webhook] subscription.deleted sub=${sub.id} customer=${sub.customer} ended=${sub.ended_at}`,
  );
  // TODO: notify the partners — Smart Retries already exhausted at this point.
}

function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log(
    `[stripe-webhook] invoice.paid invoice=${invoice.id} customer=${invoice.customer} ` +
      `amount=${fmtAmount(invoice.amount_paid)} subscription=${(invoice as { subscription?: string }).subscription ?? "—"}`,
  );
  // TODO: write to revenue ledger / monthly recurring report.
}

function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log(
    `[stripe-webhook] invoice.payment_failed invoice=${invoice.id} customer=${invoice.customer} ` +
      `attempt=${invoice.attempt_count} next_attempt=${invoice.next_payment_attempt}`,
  );
  // TODO: surface to the partners on the final retry (attempt_count >= 3).
}

// --- helpers ----------------------------------------------------------------

function fmtAmount(cents: number | null | undefined): string {
  return cents != null ? `$${(cents / 100).toFixed(2)}` : "unknown";
}

function priceIdsOf(sub: Stripe.Subscription): string[] {
  return sub.items.data.map((item) => item.price.id);
}
