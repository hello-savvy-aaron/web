import type { Metadata } from "next";
import BookEmbed from "@/components/book-embed";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "30 minutes, on your calendar. No pitch deck — just an honest conversation about whether your project is a fit.",
};

export default function BookPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-8 pt-16 pb-32">
      <header className="mx-auto max-w-[720px] text-center">
        <span className="mb-6 inline-flex w-fit rounded-pill bg-brand-primary-soft px-[14px] py-[6px] text-xs font-semibold tracking-[0.08em] text-display-lavender">
          BOOK A CHAT · FREE
        </span>
        <h1 className="mb-6 text-[36px] leading-[1.05] font-bold tracking-[-0.025em] text-ink-primary md:text-[48px]">
          Pick a time. No pitch deck.
        </h1>
        <p className="mb-16 text-base leading-[1.5] text-ink-secondary lg:text-lg">
          30 minutes. Bring the problem, the timeline, and the budget. You&apos;ll
          leave with a free two-page brief — how we&apos;d approach it, the risks,
          the rough numbers. Worth the call even if you don&apos;t hire us.
        </p>
      </header>

      <BookEmbed />

      <p className="mx-auto mt-8 max-w-[720px] text-center text-sm text-ink-tertiary">
        Calendar not loading?{" "}
        <a
          href="mailto:aaron@hellosavvy.design?subject=Book%20a%20chat"
          className="text-display-lavender hover:underline"
        >
          Email aaron@hellosavvy.design
        </a>{" "}
        — same-day reply on weekdays.
      </p>
    </main>
  );
}
