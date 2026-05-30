import Link from "next/link";
import { startBlueprintCheckout } from "@/app/actions/checkout";
import EyebrowPill from "@/components/eyebrow-pill";
import ProcessSteps from "@/components/process-steps";
import TierCard from "@/components/tier-card";
import { TIERS } from "@/lib/pricing";

const GRADIENT_TEXT: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, #5B47E5 0%, #8B5BD4 50%, #D8479A 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

export default function PricingSection() {
  return (
    <div id="pricing" className="scroll-mt-24">
      {/* Section header */}
      <section className="mx-auto max-w-[1280px] px-8 pt-4 pb-8 lg:pt-6 lg:pb-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <EyebrowPill className="mb-6">PRICING</EyebrowPill>
            <h2 className="text-[36px] leading-[1.05] font-bold tracking-[-0.025em] text-ink-primary md:text-[48px] lg:text-hero">
              Three tiers. One <span style={GRADIENT_TEXT}>place</span> to start.
            </h2>
          </div>
          <div className="flex flex-col">
            <p className="mb-8 max-w-[560px] text-base leading-[1.5] text-ink-secondary lg:text-lg">
              Every project starts with Blueprints — a practical roadmap that
              stands on its own. Like the direction? We&apos;ll build it with you
              — website, go-to-market motion, or custom app.
            </p>
            <div className="flex flex-wrap gap-4">
              <form action={startBlueprintCheckout}>
                <button
                  type="submit"
                  className="rounded-pill bg-mint-100 px-7 py-3 text-sm font-semibold text-ink-primary ring-2 ring-mint-500 ring-inset transition-colors duration-150 ease-out hover:bg-mint-200 md:text-base"
                >
                  Buy Blueprints
                </button>
              </form>
              <Link
                href="/book"
                className="rounded-pill bg-display-lavender px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_0_rgba(91,71,229,0.3)] transition-colors duration-150 ease-out hover:bg-brand-primary-hover md:text-base"
              >
                Book a call →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tier deep-dive cards */}
      <section className="mx-auto mt-12 w-full max-w-[1280px] px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </section>

      {/* How an engagement starts */}
      <section className="mx-auto mt-24 w-full max-w-[1280px] px-8">
        <div className="mb-10 max-w-[720px]">
          <EyebrowPill className="mb-4">HOW TO GET STARTED</EyebrowPill>
          <h3 className="text-[28px] leading-[1.1] font-bold tracking-[-0.025em] text-ink-primary md:text-4xl">
            Three simple steps.
          </h3>
        </div>
        <ProcessSteps />
      </section>
    </div>
  );
}
