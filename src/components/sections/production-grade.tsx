import { Section } from "../section";

const pillars = [
  {
    title: "Real infrastructure",
    body: "Terraform stands the project up on day zero. Production and preview environments live in your Vercel team, your Supabase org, your DNS — never ours.",
  },
  {
    title: "CI from commit one",
    body: "GitHub Actions runs typecheck, lint, tests, and migrations on every PR. Preview deploys for each branch. No 'works on my machine' demos.",
  },
  {
    title: "Observability on day one",
    body: "Structured logs, error tracking, and uptime checks wired before launch. The dashboards are yours too — no opaque vendor magic in the middle.",
  },
  {
    title: "Owned, not rented",
    body: "Repo lives in your GitHub org. Infrastructure lives in your accounts. Secrets are yours. We can keep helping, but nothing breaks when we stop.",
  },
];

export function ProductionGrade() {
  return (
    <Section
      eyebrow="What ships"
      title="What 'production-ready' actually means here"
      intro="Most AI-built apps fall over not because the code is bad, but because there's no infrastructure around it. We close those gaps before the first feature lands."
    >
      <ul className="grid sm:grid-cols-2 gap-8">
        {pillars.map((p) => (
          <li key={p.title} className="border-l-2 border-accent pl-5">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-2 text-ink-muted text-pretty">{p.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
