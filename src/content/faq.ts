export const faq = [
  {
    q: "Who owns the code?",
    a: "You do. The repo and infrastructure are in your accounts from the first commit. We push to your GitHub org, deploy on your Vercel team, and run on your Supabase project. We're a contributor, not a vendor holding the keys.",
  },
  {
    q: "What if the scope shifts mid-build?",
    a: "Small additions usually get absorbed. Anything that moves the launch date or materially reshapes the system gets a one-line written change order with the delta on price and time before we touch the keyboard.",
  },
  {
    q: "What if you slip past the deadline?",
    a: "A fixed price is a fixed price. If we miss the date, we eat the overage. The reason we can offer this is that scope locks at the plan, not at kickoff.",
  },
  {
    q: "What's the stack and can we swap pieces of it?",
    a: "Default is Next.js, TypeScript, Supabase, Tailwind, and Vercel. We're opinionated because these tools let us ship fast, not because we refuse to use anything else. Past swaps: Clerk in place of Supabase Auth, Neon for Postgres, S3 for storage, Resend for transactional mail.",
  },
  {
    q: "Do you do retainers or ongoing maintenance?",
    a: "Not as a default. The 30-day cover handles regressions. After that, most clients self-serve or hire in-house — we'll happily refer engineers we trust if that's what you need.",
  },
  {
    q: "What about design?",
    a: "Sprint includes a clean, neutral design pass. Studio includes real design work with a product designer. We don't do brand identity, logos, or marketing sites for other companies — there are better shops for that.",
  },
  {
    q: "How do payments work?",
    a: "Half up front, half at launch. Wire, ACH, or card via Stripe. Invoices come from a US LLC.",
  },
  {
    q: "What won't you build?",
    a: "Native mobile apps, anything blockchain, marketing sites, deepfake tooling, and anything that needs to pass HIPAA or SOC 2 on day one. Ask if you're not sure — we'll be direct.",
  },
] as const;
