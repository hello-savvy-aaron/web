import Link from "next/link";
import Wordmark from "@/components/wordmark";
import CalendarIcon from "@/components/calendar-icon";

const NAV_LINKS: { label: string; href: string }[] = [];

// HelloSavvy client portal.
const APP_URL = "https://app.hellosavvy.design/login";

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

      <div className="flex items-center gap-4 md:gap-6">
        <a
          href={APP_URL}
          className="hidden text-sm font-medium text-ink-primary transition-colors duration-150 ease-out hover:text-display-lavender md:block"
        >
          Sign In
        </a>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 rounded-pill bg-[linear-gradient(135deg,#EEE9FB_0%,#F1E7F7_50%,#FBE9F1_100%)] px-[18px] py-[10px] text-xs font-semibold text-ink-primary ring-2 ring-display-lavender ring-inset transition duration-150 ease-out hover:brightness-[0.97] md:px-6 md:py-3 md:text-sm"
        >
          Book a Call
          <CalendarIcon className="h-4 w-4" />
        </Link>
      </div>
    </nav>
  );
}
