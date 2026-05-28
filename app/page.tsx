import Hero from "@/components/hero";
import PricingSection from "@/components/pricing-section";
import EyebrowPill from "@/components/eyebrow-pill";

type SectionStub = {
  id: string;
  eyebrow: string;
  heading: string;
  blurb: string;
};

const STUB_SECTIONS: SectionStub[] = [
  {
    id: "work",
    eyebrow: "WORK",
    heading: "Selected work.",
    blurb: "Case studies are on the way — a look at what we've shipped and why.",
  },
  {
    id: "process",
    eyebrow: "PROCESS",
    heading: "How we work.",
    blurb:
      "A transparent, AI-assisted process from first call to launch. Details coming soon.",
  },
  {
    id: "about",
    eyebrow: "ABOUT",
    heading: "Who we are.",
    blurb:
      "A small studio of senior partners. More on the team and our story soon.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {STUB_SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mx-auto w-full max-w-[1100px] scroll-mt-24 px-8 py-20"
        >
          <div className="max-w-[720px]">
            <EyebrowPill className="mb-4">{section.eyebrow}</EyebrowPill>
            <h2 className="mb-4 text-[28px] leading-[1.1] font-bold tracking-[-0.025em] text-ink-primary md:text-4xl">
              {section.heading}
            </h2>
            <p className="text-base leading-[1.5] text-ink-secondary lg:text-lg">
              {section.blurb}
            </p>
          </div>
        </section>
      ))}

      <PricingSection />
    </main>
  );
}
