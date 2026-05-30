import Link from "next/link";
import { startBlueprintCheckout } from "@/app/actions/checkout";
import CalendarIcon from "@/components/calendar-icon";
import { PROCESS_STEPS } from "@/lib/pricing";

function StepChevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className="flex-shrink-0 text-ink-tertiary"
    >
      <path
        d="M7 4L13 10L7 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProcessSteps() {
  return (
    <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-stretch lg:gap-3">
      {PROCESS_STEPS.map((step, idx) => (
        <div
          key={step.number}
          className="flex flex-1 items-stretch gap-3 lg:items-center"
        >
          <div className="flex flex-1 flex-col rounded-lg bg-bg-elevated p-6 shadow-[0_1px_2px_0_rgba(13,31,28,0.04)]">
            <span
              className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-200 text-2xl font-bold text-brand-deep"
              aria-hidden
            >
              {step.number}
            </span>
            <h3 className="mb-2 text-xl font-bold tracking-[-0.015em] text-ink-primary">
              {step.title}
            </h3>
            <p className="text-sm leading-[1.5] text-ink-secondary">
              {step.body}
            </p>
            {step.cta?.kind === "book" && (
              <Link
                href="/book"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-pill bg-display-lavender px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-primary-hover"
              >
                <CalendarIcon className="h-4 w-4" />
                {step.cta.label}
              </Link>
            )}
            {step.cta?.kind === "buy" && (
              <form action={startBlueprintCheckout} className="mt-5">
                <button
                  type="submit"
                  className="inline-flex w-fit items-center rounded-pill bg-mint-100 px-5 py-2.5 text-sm font-semibold text-ink-primary ring-2 ring-mint-500 ring-inset transition-colors duration-150 ease-out hover:bg-mint-200"
                >
                  {step.cta.label}
                </button>
              </form>
            )}
          </div>
          {idx < PROCESS_STEPS.length - 1 && (
            <div className="flex items-center justify-center lg:px-1">
              <StepChevron />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
