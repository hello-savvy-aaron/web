import Stripe from "stripe";

// Lazy initialization: instantiating at module load would crash any page that
// transitively imports this module (e.g. the home page, via the hero CTA's
// Server Action) whenever STRIPE_SECRET_KEY is unset. By deferring until first
// use, only the actual Checkout/webhook flow fails — and only when invoked.
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (_stripe) return _stripe;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local (see .env.example).",
    );
  }

  _stripe = new Stripe(key, {
    apiVersion: "2026-04-22.dahlia",
    typescript: true,
    appInfo: {
      name: "hellosavvy.design",
      version: "1.0.0",
    },
  });
  return _stripe;
}
