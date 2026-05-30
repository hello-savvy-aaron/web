import type { Tier } from "@/lib/pricing";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="mt-[5px] flex-shrink-0 text-mint-500"
    >
      <path
        d="M3 8.5L6.5 12L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type TierCardProps = {
  tier: Tier;
  highlighted?: boolean;
};

export default function TierCard({ tier, highlighted = false }: TierCardProps) {
  return (
    <div
      id={tier.id}
      className={`group flex h-full scroll-mt-24 flex-col rounded-xl bg-bg-elevated p-8 shadow-[0_4px_12px_-2px_rgba(13,31,28,0.06),0_2px_4px_-2px_rgba(13,31,28,0.04)] transition-all duration-150 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-4px_rgba(13,31,28,0.08),0_4px_8px_-2px_rgba(13,31,28,0.04)] ${
        highlighted ? "ring-2 ring-display-lavender ring-offset-2 ring-offset-bg-canvas" : ""
      }`}
    >
      <div className="mb-5 flex items-center justify-end gap-3">
        <span
          className="inline-flex items-center rounded-pill bg-lime-200 px-3 py-1 text-sm font-bold text-brand-deep"
          aria-label={tier.priceLabel}
        >
          <span aria-hidden>{tier.price}</span>
        </span>
      </div>

      <h3 className="mb-4 text-2xl font-bold tracking-[-0.015em] text-ink-primary">
        {tier.name}
      </h3>

      <p className="mb-6 text-base leading-[1.5] text-ink-secondary">
        {tier.pitch}
      </p>

      <ul className="mb-8 flex flex-col gap-3">
        {tier.whatYouGet.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm leading-[1.5] text-ink-primary">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="mb-5 flex flex-wrap items-baseline gap-x-2">
          <span className="text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase">
            Anchor example:
          </span>
          {tier.anchorHref ? (
            <a
              href={tier.anchorHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-display-lavender transition-colors duration-150 ease-out hover:text-brand-primary-hover hover:underline"
            >
              {tier.anchor}
            </a>
          ) : (
            <span className="text-sm text-ink-secondary">{tier.anchor}</span>
          )}
        </div>
      </div>
    </div>
  );
}
