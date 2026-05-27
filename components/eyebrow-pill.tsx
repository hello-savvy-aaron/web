type EyebrowPillProps = {
  children: React.ReactNode;
  className?: string;
};

export default function EyebrowPill({ children, className = "" }: EyebrowPillProps) {
  return (
    <span
      className={`inline-flex w-fit rounded-pill bg-brand-primary-soft px-[14px] py-[6px] text-xs font-semibold tracking-[0.08em] text-display-lavender ${className}`}
    >
      {children}
    </span>
  );
}
