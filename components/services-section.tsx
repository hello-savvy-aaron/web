import Link from "next/link";
import EyebrowPill from "@/components/eyebrow-pill";

type Service = {
  key: string;
  title: string;
  blurb: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    key: "sites",
    title: "Sites",
    blurb:
      "Strategy-first websites that do real work — positioning and messaging settled before a line of code, then designed, built, and launched by partners.",
    href: "/#websites-gtm",
  },
  {
    key: "software",
    title: "Software",
    blurb:
      "Production-grade custom software — auth, payments, integrations, AI features, and the agentic workflows that earn their keep.",
    href: "/#custom-apps",
  },
  {
    key: "sales",
    title: "Sales",
    blurb:
      "Go-to-market that lands — ideal customer profile, messaging, channels, ads, and outreach, tuned with analytics-driven results.",
    href: "/#websites-gtm",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-8 pt-8 lg:pt-12"
    >
      <div className="mb-10 max-w-[720px]">
        <EyebrowPill className="mb-4">SERVICES</EyebrowPill>
        <h2 className="text-[28px] leading-[1.1] font-bold tracking-[-0.025em] text-ink-primary md:text-4xl">
          One studio, three ways to grow.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.key}
            href={service.href}
            className="group flex h-full flex-col rounded-xl bg-bg-elevated p-8 shadow-[0_4px_12px_-2px_rgba(13,31,28,0.06),0_2px_4px_-2px_rgba(13,31,28,0.04)] transition-all duration-150 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-4px_rgba(13,31,28,0.08),0_4px_8px_-2px_rgba(13,31,28,0.04)]"
          >
            <span className="mb-5 h-1 w-10 rounded-full bg-[linear-gradient(90deg,#5B47E5_0%,#D8479A_100%)]" />
            <h3 className="mb-3 text-2xl font-bold tracking-[-0.015em] text-ink-primary">
              {service.title}
            </h3>
            <p className="text-base leading-[1.5] text-ink-secondary">
              {service.blurb}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
