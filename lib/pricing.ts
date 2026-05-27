export type TierId = "assessment" | "websites-gtm" | "custom-apps";

export type Tier = {
  id: TierId;
  number: string;
  name: string;
  price: string;
  priceLabel: string;
  anchor: string;
  shortDescription: string;
  pitch: string;
  whatYouGet: string[];
  ctaLabel: string;
};

export const TIERS: Tier[] = [
  {
    id: "assessment",
    number: "01",
    name: "Assessment & Plan",
    price: "$449",
    priceLabel: "Price: 449 US dollars",
    anchor: "Universal entry",
    shortDescription:
      "Up to 2 hours with Aaron, two rounds of iteration, and a written plan covering recommended approach, scope, cost, timeline, and alternatives. Credit applies to any engagement that follows. The productized intake.",
    pitch:
      "The productized intake. Bring us an idea; leave with a real plan and an honest go or no-go.",
    whatYouGet: [
      "Up to 2 hours of consultation with Aaron",
      "A written plan: recommended approach, scope, cost, timeline, alternatives",
      "Two rounds of iteration to tighten the plan",
      "$449 applies as credit toward any engagement that follows",
      "A clean break with a referral if we're not the right fit",
    ],
    ctaLabel: "Start the Assessment ($449)",
  },
  {
    id: "websites-gtm",
    number: "02",
    name: "Websites & Go-to-Market",
    price: "$2K–$5K",
    priceLabel: "Price: 2,000 to 5,000 US dollars",
    anchor: "Haka Construction",
    shortDescription:
      "Sites that do real work — strategy, copy, design, build, launch. Plus the growth motions that put them in front of customers: positioning, messaging, channel strategy, lifecycle. Led by Lara on the GTM side.",
    pitch:
      "Sites that do real work, and the growth motion that puts them in front of customers.",
    whatYouGet: [
      "Positioning and messaging worked through before any pixel is pushed",
      "Copy, design, build, launch — by partners, not handoffs",
      "Channel strategy and lifecycle (email, content, paid where it fits)",
      "Lara leads the GTM side; 30 years across QA, BA, and lean process",
      "Tracker access for the duration of the engagement",
    ],
    ctaLabel: "Start with an Assessment",
  },
  {
    id: "custom-apps",
    number: "03",
    name: "Custom App Development",
    price: "$10K–$50K",
    priceLabel: "Price: 10,000 to 50,000 US dollars",
    anchor: "HS Project Tracker",
    shortDescription:
      "Production-grade software — web apps, internal tools, customer portals, AI features, agentic workflows. Auth, payments, real-time updates, the things vibe coders can't ship. Modern stacks with AI woven through the work.",
    pitch:
      "Production-grade software. The things vibe-coding tools can't ship.",
    whatYouGet: [
      "Modern stack (Next.js, TypeScript, Supabase, Vercel — or what fits)",
      "Auth, payments, real-time, the unglamorous load-bearing parts",
      "AI features and agentic workflows where they earn their keep",
      "Senior engineering throughout — no junior layer learning on your dime",
      "Tracker access with milestones, screenshots, and a comment thread",
    ],
    ctaLabel: "Start with an Assessment",
  },
];

export const PROCESS_STEPS = [
  {
    number: "1",
    title: "You buy the Assessment ($449)",
    body: "Aaron schedules a 2-hour call within 3 business days.",
  },
  {
    number: "2",
    title: "We write the plan",
    body: "Approach, scope, cost, timeline, alternatives. Two rounds of iteration to land it.",
  },
  {
    number: "3",
    title: "You decide",
    body: "Engage on the plan (the $449 credits in), walk away with the plan, or take our referral elsewhere.",
  },
];

export const NOT_IN_SCOPE = [
  "Logo design and brand identity work as standalone projects",
  "Native iOS or Android development (responsive web with PWA install: yes)",
  "Enterprise procurement, SOC 2 audits, six-month sales cycles",
  "Pixel-perfect Figma mockups before any code (we design in the browser)",
  "Strategy decks without a shipped deliverable",
  "Hourly billing or open-ended retainers",
];

export const FAQ = [
  {
    slug: "why-paywall",
    q: "Why a $449 paywall on the intake?",
    a: "Three reasons. It filters for prospects who are serious about scoping their work; it pays for the senior time that goes into a real plan; and it credits back to the engagement if we move forward. Free discovery calls are how studios sell you on themselves. This is how we sell you on the plan.",
  },
  {
    slug: "already-know",
    q: "What if I already know what I want built?",
    a: "The Assessment is still the right starting point. Two hours with a senior engineer and a written plan will catch the things you haven't thought of yet — and price the work honestly. If we agree on the first call, we can compress the iteration rounds and move into the engagement faster.",
  },
  {
    slug: "how-priced",
    q: "How are Websites & GTM and Custom Apps priced?",
    a: "Fixed price per engagement, quoted after the Assessment. We don't do hourly billing. The ranges shown ($2K–$5K, $10K–$50K) cover most of what we take on; bigger or stranger work gets quoted individually.",
  },
  {
    slug: "who-does-work",
    q: "Who actually does the work?",
    a: "Aaron, Tom, and Lara — the three partners. We pull in a vetted bench of senior contractors and AI agents when a project calls for it; you see who's on your engagement in your tracker. No junior layer, no hidden subcontractors.",
  },
  {
    slug: "not-a-fit",
    q: "What if the Assessment surfaces that we're not a fit?",
    a: "You keep the written plan and we send you a referral to someone better suited. The $449 doesn't refund — it paid for the senior time and the plan, both of which you still get to keep.",
  },
  {
    slug: "retainers",
    q: "Do you offer ongoing maintenance or retainers?",
    a: "Not as a standalone product. Post-launch support is scoped into the original engagement (typically 30 days of bug cover). If you need ongoing capacity beyond that, talk to us — most clients don't, and we'd rather you didn't pay for one if you don't need it.",
  },
];
