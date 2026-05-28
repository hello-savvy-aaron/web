import type { Metadata } from "next";
import Link from "next/link";
import { startBlueprintCheckout } from "@/app/actions/checkout";
import EyebrowPill from "@/components/eyebrow-pill";
import ProcessSteps from "@/components/process-steps";
import TierCard from "@/components/tier-card";
import { NOT_IN_SCOPE, TIERS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three tiers. One honest way in. Every engagement starts with a $449 Blueprint.",
};

const GRADIENT_TEXT: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, #5B47E5 0%, #8B5BD4 50%, #D8479A 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const SOFT_GRADIENT_BG: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #FBF8F2 0%, #EEE9FB 100%)",
};

export default function PricingPage() {
  return (
    <main className="pb-24">
      {/* Section 1 — Page header */}
      <section className="mx-auto max-w-[1280px] px-8 pt-12 pb-8 lg:pt-20 lg:pb-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <EyebrowPill className="mb-6">PRICING</EyebrowPill>
            <h1 className="text-[36px] leading-[1.05] font-bold tracking-[-0.025em] text-ink-primary md:text-[48px] lg:text-hero">
              Three tiers. One <span style={GRADIENT_TEXT}>honest</span> way in.
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="mb-8 max-w-[560px] text-base leading-[1.5] text-ink-secondary lg:text-lg">
              Every project starts with a $449 Blueprint, so you come away with
              a practical roadmap that&apos;s useful on its own. Like the
              direction? We&apos;ll build it with you — website, go-to-market
              motion, custom app — with your $449 credited toward the work. No
              surprises mid-build.
            </p>
            <div className="flex flex-wrap gap-4">
              <form action={startBlueprintCheckout}>
                <button
                  type="submit"
                  className="rounded-pill bg-display-lavender px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_0_rgba(91,71,229,0.3)] transition-colors duration-150 ease-out hover:bg-brand-primary-hover md:text-base"
                >
                  Get the Blueprint ($449)
                </button>
              </form>
              <Link
                href="/book"
                className="rounded-pill bg-brand-primary-soft px-7 py-3 text-sm font-semibold text-display-lavender transition-colors duration-150 ease-out hover:bg-[#E2DAF7] md:text-base"
              >
                Book a Chat (Free)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Tier deep-dive cards */}
      <section className="mx-auto mt-6 w-full max-w-[1280px] px-8">
        <EyebrowPill className="mb-8 text-sm">WHAT YOU GET</EyebrowPill>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
        <p className="mt-8 max-w-[720px] text-sm leading-[1.625] text-ink-tertiary italic">
          All three tiers funnel to the Blueprint as the booking action. The
          Blueprint is the only thing on the site you can buy without a
          conversation first.
        </p>
      </section>

      {/* Section 4 — How an engagement starts */}
      <section className="mx-auto mt-24 w-full max-w-[1100px] px-8">
        <div className="mb-10 max-w-[720px]">
          <EyebrowPill className="mb-4">HOW IT STARTS</EyebrowPill>
          <h2 className="text-[28px] leading-[1.1] font-bold tracking-[-0.025em] text-ink-primary md:text-4xl">
            Same first three steps, every time.
          </h2>
        </div>
        <ProcessSteps />
      </section>

      {/* Section 5 — Things we don't do */}
      <section className="mx-auto mt-24 w-full max-w-[1100px] px-8">
        <div className="rounded-xl bg-bg-section-tint p-8 md:p-10">
          <EyebrowPill className="mb-4">SCOPE</EyebrowPill>
          <h2 className="mb-6 text-[28px] leading-[1.1] font-bold tracking-[-0.025em] text-ink-primary md:text-3xl">
            Things we don&apos;t do.
          </h2>
          <ul className="flex max-w-[760px] flex-col gap-3">
            {NOT_IN_SCOPE.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base leading-[1.5] text-ink-secondary"
              >
                <span
                  aria-hidden
                  className="mt-[10px] inline-block h-[2px] w-3 flex-shrink-0 bg-ink-tertiary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 7 — Final CTA band */}
      <section className="mt-24 px-4">
        <div
          className="mx-auto max-w-[1280px] rounded-xl px-8 py-20 text-center"
          style={SOFT_GRADIENT_BG}
        >
          <h2 className="mx-auto mb-5 max-w-[640px] text-[32px] leading-[1.1] font-bold tracking-[-0.025em] text-ink-primary md:text-4xl">
            Start with the Blueprint.
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-base leading-[1.5] text-ink-secondary lg:text-lg">
            $449 buys you two hours with the team and a written plan. If we
            engage, it credits back. If we don&apos;t, you still own the plan.
          </p>
          <form action={startBlueprintCheckout} className="inline-block">
            <button
              type="submit"
              className="rounded-pill bg-display-lavender px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_0_rgba(91,71,229,0.3)] transition-colors duration-150 ease-out hover:bg-brand-primary-hover"
            >
              Get the Blueprint ($449)
            </button>
          </form>
          <div className="mt-5">
            <Link
              href="/book"
              className="text-sm font-medium text-display-lavender transition-colors duration-150 ease-out hover:text-brand-primary-hover"
            >
              Not sure yet? Book a free chat first →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
