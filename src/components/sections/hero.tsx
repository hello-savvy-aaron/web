import { Container } from "../container";
import { ButtonLink } from "../button-link";

export function Hero() {
  return (
    <section className="pt-20 sm:pt-28 pb-20 sm:pb-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
          A small development shop
        </p>
        <h1 className="display mt-6 text-5xl sm:text-7xl font-normal text-balance leading-[1.02]">
          We build the custom software{" "}
          <span className="text-accent italic">your roadmap keeps deferring</span>
          <span className="text-ink-muted">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-ink-muted text-pretty">
          Two-week sprints with senior engineers. Production-ready output —
          code and infrastructure live in your accounts from the first commit,
          not handed over at the end like a deliverable.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="/book" variant="primary">
            Start with a short call →
          </ButtonLink>
          <ButtonLink href="#pricing" variant="secondary">
            See packages
          </ButtonLink>
        </div>
        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8 font-mono text-sm">
          <Stat label="Default sprint" value="10 working days" />
          <Stat label="Starting from" value="$25,000" />
          <Stat label="Post-launch cover" value="30 days" />
          <Stat label="Kickoff" value="Same day" />
        </dl>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-ink-muted text-xs uppercase tracking-[0.12em]">{label}</dt>
      <dd className="mt-1 text-base text-ink">{value}</dd>
    </div>
  );
}
