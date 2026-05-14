export type WorkItem = {
  slug: string;
  client: string;
  outcome: string;
  timeline: string;
  budget: string;
  status: "shipped" | "in flight";
};

export const work: WorkItem[] = [
  {
    slug: "northbeam-portal",
    client: "Northbeam",
    outcome: "Client portal for a forty-attorney litigation firm — replaced a $90k/yr off-the-shelf product on its renewal date.",
    timeline: "10 days",
    budget: "$25,000",
    status: "shipped",
  },
  {
    slug: "linnea-storefront",
    client: "Linnea Field Notes",
    outcome: "Subscription storefront and fulfillment dashboard for an independent publisher. Stripe Billing, Shippo, real inventory.",
    timeline: "15 days",
    budget: "$32,000",
    status: "shipped",
  },
  {
    slug: "cloudfern-routes",
    client: "Cloudfern Logistics",
    outcome: "Dispatch dashboard and a driver-facing PWA. Live route ETAs, offline-tolerant manifests, no native app required.",
    timeline: "18 days",
    budget: "$38,000",
    status: "in flight",
  },
];
