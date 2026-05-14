import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

type Props = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-bg hover:bg-accent hover:text-accent-ink",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
  ghost:
    "bg-transparent text-ink hover:text-accent",
  inverse:
    "bg-bg text-ink hover:bg-accent hover:text-accent-ink",
};

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  return (
    <Link
      {...rest}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
