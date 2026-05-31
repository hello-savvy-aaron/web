/** The tangible artifacts a Blueprint engagement delivers, shown on the card. */

const ARTIFACTS = [
  { key: "plan", label: "Detailed action plan" },
  { key: "roadmap", label: "Roadmap with milestones" },
  { key: "estimate", label: "Cost & timeline estimate" },
  { key: "guidance", label: "Guidance and recommendations" },
] as const;

function Icon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "plan":
      return (
        <svg {...common} aria-hidden>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );
    case "roadmap":
      return (
        <svg {...common} aria-hidden>
          <circle cx="5" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <circle cx="19" cy="6" r="2" />
          <path d="M5 8v3a2 2 0 0 0 2 2h5M19 8v3a2 2 0 0 1-2 2h-5" />
        </svg>
      );
    case "estimate":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "guidance":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="m16.24 7.76-1.8 5.41a2 2 0 0 1-1.27 1.27l-5.41 1.8 1.8-5.41a2 2 0 0 1 1.27-1.27z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BlueprintDeliverables() {
  return (
    <div className="rounded-lg bg-bg-section-tint p-5">
      <div className="mb-3 text-xs font-semibold tracking-[0.08em] text-ink-tertiary uppercase">
        What you&apos;ll receive
      </div>
      <ul className="flex flex-col gap-3">
        {ARTIFACTS.map((a) => (
          <li key={a.key} className="flex items-center gap-3">
            <span className="text-display-lavender">
              <Icon name={a.key} />
            </span>
            <span className="text-sm leading-[1.4] text-ink-primary">
              {a.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
