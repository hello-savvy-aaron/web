import { Section } from "../section";
import { work } from "@/content/work";

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Recent work"
      title="A sampler of what we've shipped"
      intro="Each one is a real application that someone is using to run their business today. Client logos and case detail available on the call."
    >
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
        {work.map((item) => (
          <li
            key={item.slug}
            className="bg-bg p-6 sm:p-8 flex flex-col gap-4 min-h-56"
          >
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em]">
              <span className="text-ink-muted">{item.client}</span>
              <span
                className={
                  item.status === "shipped"
                    ? "text-ink-muted"
                    : "text-accent"
                }
              >
                {item.status}
              </span>
            </div>
            <p className="text-pretty text-ink flex-1">{item.outcome}</p>
            <dl className="mt-2 grid grid-cols-2 gap-2 font-mono text-xs text-ink-muted">
              <div>
                <dt className="uppercase tracking-[0.12em]">Sprint</dt>
                <dd className="mt-0.5 text-ink">{item.timeline}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.12em]">Budget</dt>
                <dd className="mt-0.5 text-ink">{item.budget}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </Section>
  );
}
