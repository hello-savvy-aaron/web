import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment canceled",
  robots: { index: false, follow: false },
};

export default function PaymentCancelPage() {
  return (
    <main className="mx-auto max-w-[720px] px-8 pt-16 pb-32 text-center">
      <span className="mb-6 inline-flex w-fit rounded-pill bg-brand-primary-soft px-[14px] py-[6px] text-xs font-semibold tracking-[0.08em] text-display-lavender">
        NO CHARGE MADE
      </span>
      <h1 className="mb-6 text-[36px] leading-[1.05] font-bold tracking-[-0.025em] text-ink-primary md:text-[48px]">
        Payment canceled.
      </h1>
      <p className="mb-10 text-base leading-[1.5] text-ink-secondary lg:text-lg">
        No charge was made. If something went wrong, email{" "}
        <a
          href="mailto:aaron@hellosavvy.design?subject=Blueprints%20checkout%20issue"
          className="text-display-lavender hover:underline"
        >
          aaron@hellosavvy.design
        </a>{" "}
        and we&apos;ll sort it out.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-pill bg-display-lavender px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_0_rgba(91,71,229,0.3)] transition-colors duration-150 ease-out hover:bg-brand-primary-hover"
      >
        Back to HelloSavvy
      </Link>
    </main>
  );
}
