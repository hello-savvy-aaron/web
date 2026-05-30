import Link from "next/link";
import Wordmark from "@/components/wordmark";

const NAV_LINKS: { label: string; href: string }[] = [];

export default function SiteNav() {
  return (
    <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-5">
      <Link href="/" aria-label="HelloSavvy home">
        <Wordmark size="lg" gradient className="text-2xl md:text-3xl" />
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base font-medium text-ink-primary transition-colors duration-150 ease-out hover:text-display-lavender"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/book"
        className="rounded-pill bg-display-lavender px-[18px] py-[10px] text-xs font-semibold text-white shadow-[0_0_24px_0_rgba(91,71,229,0.3)] transition-colors duration-150 ease-out hover:bg-brand-primary-hover md:px-6 md:py-3 md:text-sm"
      >
        Book a Call →
      </Link>
    </nav>
  );
}
