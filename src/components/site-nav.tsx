import { Container } from "./container";
import { Wordmark } from "./wordmark";
import { ButtonLink } from "./button-link";
import { nav, site } from "@/content/site";
import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Wordmark />
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={site.bookUrl} variant="primary">
            Book a call →
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
