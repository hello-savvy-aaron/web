/**
 * Header logo lockup: HelloSavvy wordmark + gradient underline + waving hand.
 *
 * NOTE: This intentionally departs from Design System v0.6 §4, which rejects
 * the waving-hand mascot and the "wordmark + icon" pairing. Adopted per founder
 * request 2026-05-29 ahead of a design-system update. The plain text wordmark
 * (components/wordmark.tsx) is still used in the footer.
 */
export default function SiteLogo() {
  return (
    <span className="inline-flex flex-col">
      <span className="inline-flex items-center gap-2">
        <span className="text-2xl leading-none font-bold tracking-tight md:text-3xl">
          <span className="text-display-lavender">Hello</span>
          <span className="text-display-magenta">Savvy</span>
        </span>
        <svg
          aria-hidden
          viewBox="0 0 52 48"
          className="h-7 w-auto md:h-8"
          fill="none"
        >
          <defs>
            <linearGradient
              id="hs-wave"
              x1="6"
              y1="6"
              x2="46"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#5B47E5" />
              <stop offset="1" stopColor="#D8479A" />
            </linearGradient>
          </defs>
          <g transform="rotate(14 24 28)" fill="url(#hs-wave)">
            <rect x="13" y="22" width="22" height="20" rx="9" />
            <rect x="15" y="10" width="5" height="20" rx="2.5" />
            <rect x="20.5" y="7" width="5" height="23" rx="2.5" />
            <rect x="26" y="9" width="5" height="21" rx="2.5" />
            <rect x="31.5" y="13" width="5" height="17" rx="2.5" />
            <rect
              x="8"
              y="25"
              width="5"
              height="14"
              rx="2.5"
              transform="rotate(-38 10.5 32)"
            />
          </g>
          <g
            stroke="url(#hs-wave)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M43 10 C46 13 46 17 43 20" />
            <path d="M47 7 C51 11 51 18 47 22" />
          </g>
        </svg>
      </span>
      <span
        aria-hidden
        className="mt-1 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#5B47E5_0%,#D8479A_100%)]"
      />
    </span>
  );
}
