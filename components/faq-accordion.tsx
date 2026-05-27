"use client";

import { useId, useState } from "react";
import { FAQ } from "@/lib/pricing";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={`flex-shrink-0 text-ink-tertiary transition-transform duration-200 ease-out ${
        open ? "rotate-90" : ""
      }`}
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

export default function FaqAccordion() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const baseId = useId();

  return (
    <div className="mx-auto w-full max-w-[720px]">
      {FAQ.map((item) => {
        const open = openSlug === item.slug;
        const buttonId = `${baseId}-${item.slug}-q`;
        const panelId = `${baseId}-${item.slug}-a`;
        return (
          <div
            key={item.slug}
            className="border-b border-[rgba(13,31,28,0.08)]"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenSlug(open ? null : item.slug)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-bold text-ink-primary transition-colors duration-150 ease-out hover:text-display-lavender"
              >
                <span>{item.q}</span>
                <ChevronIcon open={open} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-6 text-base leading-[1.625] text-ink-secondary"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
