"use client";

import { useEffect, useRef } from "react";

const RECLAIM_LINK_ID = process.env.NEXT_PUBLIC_RECLAIM_LINK_ID;
const RECLAIM_SCRIPT_SRC =
  "https://meet.reclaimai.com/scripts/embed-scheduling-link.0.x.x.js";

export default function BookEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Reclaim's snippet is a <script> inside a target <div> — the script reads
  // its own data-* attributes and mounts the widget into its parent. next/script
  // injects into <head>, which would break that contract, so we append the
  // element directly onto our ref'd container.
  useEffect(() => {
    if (!RECLAIM_LINK_ID || !containerRef.current) return;
    const container = containerRef.current;

    const script = document.createElement("script");
    script.src = RECLAIM_SCRIPT_SRC;
    script.async = true;
    script.dataset.id = RECLAIM_LINK_ID;
    script.dataset.redirect = `${window.location.origin}/book/confirmed`;
    container.appendChild(script);

    return () => {
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  if (!RECLAIM_LINK_ID) {
    return (
      <div className="mx-auto max-w-[720px] rounded-xl bg-bg-elevated p-12 text-center shadow-[0_4px_24px_-8px_rgba(13,31,28,0.08)]">
        <p className="text-base leading-[1.5] text-ink-secondary">
          The booking link is being set up. In the meantime, email{" "}
          <a
            href="mailto:aaron@hellosavvy.design?subject=Book%20a%20chat"
            className="font-semibold text-display-lavender hover:underline"
          >
            aaron@hellosavvy.design
          </a>{" "}
          and we&apos;ll send times directly.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[840px] overflow-hidden rounded-xl bg-bg-elevated p-2 shadow-[0_4px_24px_-8px_rgba(13,31,28,0.08)]">
      <div ref={containerRef} className="min-h-[720px] w-full" />
    </div>
  );
}
