import { Section } from "../section";
import { ButtonLink } from "../button-link";
import { tiers } from "@/content/pricing";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Packages"
      title="One price, one scope, one calendar date"
      intro="Three ways to engage. The number you see is the number you pay — no time-and-materials, no change-order spiral."
    >
      <div className="grid lg:grid-cols-3 gap-px bg-rule border border-rule">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`bg-bg p-6 sm:p-8 flex flex-col gap-6 ${
              tier.highlight ? "lg:bg-bg-elev" : ""
            }`}
          >
            <header className="flex flex-col gap-2">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em]">
                <span className="text-ink-muted">{tier.name}</span>
                {tier.highlight && (
                  <span className="text-accent">Most projects</span>
                )}
              </div>
              <p className="text-3xl font-medium tracking-tight">{tier.price}</p>
              <p className="font-mono text-xs text-ink-muted">{tier.cadence}</p>
            </header>
            <p className="text-pretty text-ink-muted">{tier.pitch}</p>
            <ul className="space-y-2 text-sm flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="mt-2 size-1 rounded-full bg-accent shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <ButtonLink
              href={tier.cta.href}
              variant={tier.highlight ? "primary" : "secondary"}
              className="w-full justify-center"
            >
              {tier.cta.label} →
            </ButtonLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
