import Link from "next/link";
import Wordmark from "@/components/wordmark";

const EXPLORE_LINKS = [
  { label: "Pricing", href: "/#pricing" },
  { label: "Book a Chat", href: "/book" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-primary/10 bg-bg-section-tint">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-8 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[360px]">
          <Link href="/" aria-label="HelloSavvy home">
            <Wordmark size="lg" />
          </Link>
          <p className="mt-4 text-sm leading-[1.5] text-ink-secondary">
            AI-driven sites, software, and sales. Enterprise-class rigor for the
            small business.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-col gap-3 md:items-end md:text-right"
        >
          <span className="text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase">
            Explore
          </span>
          {EXPLORE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-primary transition-colors duration-150 ease-out hover:text-display-lavender"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-ink-primary/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-8 py-6 text-xs text-ink-tertiary md:flex-row md:items-center md:justify-between">
          <span>© {year} HelloSavvy. All rights reserved.</span>
          <span>Boutique software studio</span>
        </div>
      </div>
    </footer>
  );
}
