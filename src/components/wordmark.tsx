import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 font-medium tracking-tight ${className}`}
      aria-label="hello savvy — home"
    >
      <span aria-hidden className="inline-block size-2 rounded-full bg-accent" />
      <span>hello savvy</span>
    </Link>
  );
}
