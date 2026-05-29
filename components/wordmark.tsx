type WordmarkProps = {
  size?: "sm" | "lg";
  className?: string;
  /** Render the whole wordmark as a single lavender→magenta gradient sweep. */
  gradient?: boolean;
};

export default function Wordmark({
  size = "lg",
  className,
  gradient = false,
}: WordmarkProps) {
  const sizeClass = size === "sm" ? "text-lg" : "text-2xl";
  const base = `font-bold tracking-tight ${sizeClass}${
    className ? ` ${className}` : ""
  }`;

  if (gradient) {
    return (
      <span
        className={`${base} bg-[linear-gradient(90deg,#5B47E5_0%,#8B5BD4_50%,#D8479A_100%)] bg-clip-text text-transparent`}
      >
        HelloSavvy
      </span>
    );
  }

  return (
    <span className={base}>
      <span className="text-display-lavender">Hello</span>
      <span className="text-display-magenta">Savvy</span>
    </span>
  );
}
