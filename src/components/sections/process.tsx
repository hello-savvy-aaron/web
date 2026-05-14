import { Section } from "../section";
import { process } from "@/content/process";

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How it works"
      title="From first call to handoff in ten working days"
      intro="A linear path, not a methodology. Scope locks on day zero, the design clicks on day three, you own everything on day ten."
    >
      <ol className="grid gap-px bg-rule border border-rule sm:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => (
          <li key={step.day} className="bg-bg p-6 sm:p-8 flex flex-col gap-3">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
              <span>{step.day}</span>
              <span className="text-accent">0{i + 1}</span>
            </div>
            <h3 className="text-xl font-medium">{step.title}</h3>
            <p className="text-sm text-ink-muted text-pretty">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
