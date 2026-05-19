const GRADIENT_TEXT: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, #5B47E5 0%, #8B5BD4 50%, #D8479A 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-8 pt-24 pb-32 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col">
        <span className="mb-6 inline-flex w-fit rounded-pill bg-brand-primary-soft px-[14px] py-[6px] text-xs font-semibold tracking-[0.08em] text-display-lavender">
          BOUTIQUE SOFTWARE STUDIO
        </span>

        <h1 className="mb-6 text-[36px] leading-[1.05] font-bold tracking-[-0.025em] text-ink-primary md:text-[48px] lg:text-hero">
          Custom software,{" "}
          <span style={GRADIENT_TEXT}>transparently</span> built.
        </h1>

        <p className="mb-10 max-w-[540px] text-base leading-[1.5] font-normal text-ink-secondary lg:text-lg">
          A small studio of senior partners building the right thing for each
          client, with a transparent process and AI in every workflow.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#book-chat"
            className="rounded-pill bg-display-lavender px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_0_rgba(91,71,229,0.3)] transition-colors duration-150 ease-out hover:bg-brand-primary-hover"
          >
            Book a chat
          </a>
          <a
            href="#assessment"
            className="rounded-pill bg-mint-100 px-8 py-4 text-base font-semibold text-ink-primary ring-2 ring-mint-500 ring-inset transition-colors duration-150 ease-out hover:bg-mint-200"
          >
            Start the Assessment
          </a>
        </div>
      </div>

      {/* TEMPORARY: giant HS monogram in place of the hero image. Per
          Aaron 2026-05-19 — overrides §4 "wordmark/mark never combined"
          for now; revisit when the real hero visual (project tracker) lands. */}
      <div
        aria-hidden
        className="flex aspect-[4/3] w-full items-center justify-center"
      >
        <svg
          viewBox="0 0 120 120"
          className="h-full w-auto drop-shadow-[0_24px_64px_rgba(91,71,229,0.18)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="hero-hs"
              x1="6"
              y1="6"
              x2="114"
              y2="114"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#5B47E5" />
              <stop offset="0.5" stopColor="#8B5BD4" />
              <stop offset="1" stopColor="#D8479A" />
            </linearGradient>
          </defs>
          <rect
            x="6"
            y="6"
            width="108"
            height="108"
            rx="26"
            fill="url(#hero-hs)"
          />
          <text
            x="60"
            y="60"
            fill="#FFFFFF"
            fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontSize="58"
            fontWeight="800"
            letterSpacing="-2"
            textAnchor="middle"
            dominantBaseline="central"
          >
            HS
          </text>
        </svg>
      </div>
    </section>
  );
}
