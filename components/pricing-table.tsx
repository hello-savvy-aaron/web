import { TIERS } from "@/lib/pricing";

function PricePill({
  price,
  priceLabel,
}: {
  price: string;
  priceLabel: string;
}) {
  return (
    <span
      className="inline-flex items-center rounded-pill bg-lime-200 px-3 py-1 text-sm font-bold text-brand-deep"
      aria-label={priceLabel}
    >
      <span aria-hidden>{price}</span>
    </span>
  );
}

function AnchorPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-pill bg-bg-section-tint px-3 py-1 text-sm text-ink-secondary">
      {children}
    </span>
  );
}

export default function PricingTable() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-8">
      <div className="rounded-xl bg-bg-elevated p-6 shadow-[0_4px_12px_-2px_rgba(13,31,28,0.06),0_2px_4px_-2px_rgba(13,31,28,0.04)] md:p-10">
        <p className="mb-8 max-w-[760px] text-base leading-[1.625] text-ink-secondary md:text-lg">
          Three tiers covering the full range of what we ship. The team and the
          process are the constant; the deliverable changes per engagement.
          Range is a strength when there&apos;s an organizing principle behind
          it — for us, that&apos;s the partners, the network, and the intake.
        </p>

        {/* Desktop / tablet table */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-bg-section-tint">
                <th
                  scope="col"
                  className="rounded-l-md px-5 py-4 text-left text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase"
                >
                  Tier
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 text-left text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase"
                >
                  What it is
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 text-left text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="rounded-r-md px-5 py-4 text-left text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase"
                >
                  Anchor example
                </th>
              </tr>
            </thead>
            <tbody>
              {TIERS.map((tier, idx) => (
                <tr
                  key={tier.id}
                  className={
                    idx > 0
                      ? "border-t border-[rgba(13,31,28,0.06)]"
                      : ""
                  }
                >
                  <td className="w-[22%] px-5 py-6 align-top text-lg font-bold text-ink-primary">
                    {tier.name}
                  </td>
                  <td className="px-5 py-6 align-top text-base leading-[1.625] text-ink-secondary">
                    {tier.shortDescription}
                  </td>
                  <td className="w-[14%] px-5 py-6 align-top">
                    <PricePill
                      price={tier.price}
                      priceLabel={tier.priceLabel}
                    />
                  </td>
                  <td className="w-[18%] px-5 py-6 align-top">
                    <AnchorPill>{tier.anchor}</AnchorPill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked view */}
        <div className="flex flex-col gap-6 md:hidden">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className="border-t border-[rgba(13,31,28,0.06)] pt-6 first:border-t-0 first:pt-0"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-ink-primary">
                  {tier.name}
                </h3>
                <PricePill
                  price={tier.price}
                  priceLabel={tier.priceLabel}
                />
              </div>
              <p className="mb-3 text-base leading-[1.625] text-ink-secondary">
                {tier.shortDescription}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase">
                  Anchor
                </span>
                <AnchorPill>{tier.anchor}</AnchorPill>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-[1.625] text-ink-tertiary italic">
          Bigger or stranger engagements get quoted individually after the
          Assessment. The free consultation is available to anyone who wants
          to talk through whether we&apos;re a fit before committing to the
          $449.
        </p>
      </div>
    </section>
  );
}
