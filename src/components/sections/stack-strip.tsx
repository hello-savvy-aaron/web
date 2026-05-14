import { Container } from "../container";
import { stack } from "@/content/stack";

export function StackStrip() {
  return (
    <section className="border-y border-rule bg-bg-elev py-10">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
          Built on
        </p>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
          {stack.map((s) => (
            <li key={s.name} className="flex flex-col">
              <span className="font-medium">{s.name}</span>
              <span className="font-mono text-xs text-ink-muted">{s.note}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
