export type Tier = {
  name: string;
  price: string;
  cadence: string;
  pitch: string;
  features: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Sprint",
    price: "$25,000",
    cadence: "10 working days",
    pitch: "One engineer, two weeks. Get a real v1 in front of users while your team stays focused on what it's already doing.",
    features: [
      "One senior engineer",
      "Next.js + Supabase + Vercel by default",
      "Auth, payments, transactional email — wired in",
      "Repo and infrastructure handed over at launch",
      "30 days of fix cover after launch",
    ],
    cta: { label: "Start with a short call", href: "/book" },
  },
  {
    name: "Studio",
    price: "$48,000",
    cadence: "three working weeks",
    pitch: "More surface area. Two engineers, a designer, deeper integrations, and a real polish pass.",
    features: [
      "Everything in Sprint",
      "Two engineers and a product designer",
      "Third-party integrations (Stripe, Clerk, S3, Resend, etc.)",
      "Background workers and webhooks",
      "Logging, error tracking, and uptime monitoring",
      "60 days of fix cover after launch",
    ],
    cta: { label: "Start with a short call", href: "/book" },
    highlight: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    cadence: "scope dependent",
    pitch: "Bigger lifts and longer engagements. We'll quote it after a single honest conversation.",
    features: [
      "Multi-month engagements",
      "Existing codebases we can read into",
      "Embedded with your team if useful",
      "References on request",
    ],
    cta: { label: "Start with a short call", href: "/book" },
  },
];
