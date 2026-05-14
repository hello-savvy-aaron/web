import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CalInline } from "@/components/cal-inline";
import { ButtonLink } from "@/components/button-link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Half an hour, straight talk. A short call to see whether hello savvy is the right team for what you're building.",
};

export default function BookPage() {
  const hasCalendar = site.calUsername.length > 0;

  return (
    <Container>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 lg:gap-16 pt-16 pb-24">
        <aside className="lg:sticky lg:top-24 self-start">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            Book a call
          </p>
          <h1 className="display mt-3 text-4xl sm:text-6xl font-normal text-balance">
            Half an hour, straight talk.
          </h1>
          <p className="mt-5 text-lg text-ink-muted text-pretty">
            Come with the project, a rough deadline, and the budget you're
            working against. We'll keep it tight.
          </p>

          <ol className="mt-10 space-y-6">
            <Step
              n={1}
              title="Talk through the build"
              body="The first ten minutes go to what you're making and why. No deck, no intake form, no warmup questions."
            />
            <Step
              n={2}
              title="Honest read on fit"
              body="We'll point you at the right package — Sprint, Studio, or Custom — or tell you straight if nothing here lines up."
            />
            <Step
              n={3}
              title="Quote within two business days"
              body="If we're a fit, expect a one-page summary and a fixed price within forty-eight hours. If we're not, you'll get a referral worth using."
            />
          </ol>

          {hasCalendar && (
            <p className="mt-10 text-sm text-ink-muted">
              Calendar acting up, or nothing on it works? Drop a note to{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-ink underline underline-offset-4 decoration-rule hover:decoration-accent"
              >
                {site.email}
              </a>{" "}
              — we usually reply the same business day.
            </p>
          )}
        </aside>

        {hasCalendar ? (
          <div className="border border-rule bg-paper min-h-[640px]">
            <CalInline calLink={site.calUsername} />
          </div>
        ) : (
          <EmailFallback />
        )}
      </div>
    </Container>
  );
}

function EmailFallback() {
  return (
    <div className="border border-rule bg-paper p-10 sm:p-14 flex flex-col gap-6 justify-center min-h-[480px]">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        Easiest path
      </p>
      <h2 className="display text-3xl sm:text-4xl font-normal text-balance">
        Send a note and we'll send back times.
      </h2>
      <p className="text-ink-muted text-pretty">
        We reply the same business day, usually within a few hours. A two-line
        email about what you're building is plenty — we'll do the scheduling
        from there.
      </p>
      <div>
        <ButtonLink href={`mailto:${site.email}`} variant="primary">
          Email {site.email} →
        </ButtonLink>
      </div>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="font-mono text-xs text-accent pt-1">0{n}</span>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-ink-muted text-pretty">{body}</p>
      </div>
    </li>
  );
}
