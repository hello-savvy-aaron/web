import { Section } from "../section";

export function Guarantee() {
  return (
    <Section eyebrow="Coverage">
      <div className="border border-rule p-8 sm:p-12 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          Month one is on us
        </p>
        <h2 className="display mt-3 text-3xl sm:text-4xl font-normal text-balance">
          If anything breaks in the first thirty days after launch, we fix it. No invoice, no stopwatch, no debate.
        </h2>
        <p className="mt-6 text-ink-muted text-pretty">
          The cover applies to regressions and bugs in the scope we shipped.
          New features and added scope are a separate conversation — but
          anything broken from what we built is ours to make right.
        </p>
      </div>
    </Section>
  );
}
