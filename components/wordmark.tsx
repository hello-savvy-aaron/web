type WordmarkProps = {
  size?: "sm" | "lg";
  className?: string;
};

export default function Wordmark({ size = "lg", className }: WordmarkProps) {
  const sizeClass = size === "sm" ? "text-lg" : "text-2xl";

  return (
    <span
      className={`font-bold tracking-tight ${sizeClass}${
        className ? ` ${className}` : ""
      }`}
    >
      <span className="text-display-lavender">Hello</span>
      <span className="text-display-magenta">Savvy</span>
    </span>
  );
}
