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
