import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "page" | "prose";
};

export function Container({ children, className = "", size = "page" }: Props) {
  const max = size === "prose" ? "max-w-(--container-prose)" : "max-w-(--container-page)";
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 ${max} ${className}`}>{children}</div>
  );
}
