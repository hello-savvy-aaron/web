import { Section } from "../section";
import { excluded } from "@/content/excluded";

export function Excluded() {
  return (
    <Section
      eyebrow="Out of scope"
      title="Where to look elsewhere"
      intro="We're a small shop. Being plain about what we don't do is faster than pretending we can do everything."
    >
      <ul className="flex flex-wrap gap-2">
        {excluded.map((item) => (
          <li
            key={item}
            className="rounded-full border border-rule px-4 py-2 text-sm text-ink-muted line-through decoration-accent/60"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
