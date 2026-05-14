import type { ReactNode } from "react";
import { Container } from "./container";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`border-t border-rule py-20 sm:py-28 ${className}`}
    >
      <Container>
        {(eyebrow || title || intro) && (
          <header className="mb-12 sm:mb-16 max-w-2xl">
            {eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="display mt-3 text-3xl sm:text-5xl font-normal text-balance">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-lg text-ink-muted text-pretty">{intro}</p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
