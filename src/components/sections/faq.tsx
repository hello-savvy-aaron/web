import { Section } from "../section";
import { faq } from "@/content/faq";

export function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions we get a lot">
      <ul className="divide-y divide-rule border-y border-rule">
        {faq.map((item) => (
          <li key={item.q}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                <span className="text-pretty">{item.q}</span>
                <span
                  aria-hidden
                  className="font-mono text-xl text-ink-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-ink-muted text-pretty">
                {item.a}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
