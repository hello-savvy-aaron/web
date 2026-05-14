import Link from "next/link";
import { Container } from "./container";
import { Wordmark } from "./wordmark";
import { site } from "@/content/site";

const studio = [
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Book a call", href: "/book" },
];

const elsewhere = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Bluesky", href: site.social.bluesky },
  { label: "GitHub", href: site.social.github },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-rule mt-24">
      <Container>
        <div className="py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm text-ink-muted">
              A custom development shop. Senior engineers shipping production
              software on fixed price and fixed time.
            </p>
          </div>
          <FooterCol title="Studio" items={studio} />
          <FooterCol title="Elsewhere" items={elsewhere} />
          <FooterCol title="Legal" items={legal} />
        </div>
        <div className="border-t border-rule py-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-ink-muted font-mono">
          <p>© {new Date().getFullYear()} hello savvy</p>
          <p>
            Built with Next.js + Supabase, deployed on Vercel.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
