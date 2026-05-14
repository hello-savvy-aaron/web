import { Container } from "../container";
import { ButtonLink } from "../button-link";
import { site } from "@/content/site";

export function FinalCta() {
  return (
    <section className="border-t border-rule py-24 sm:py-32 bg-ink text-bg">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-bg/60">
            Next step
          </p>
          <h2 className="display mt-3 text-4xl sm:text-6xl font-normal text-balance">
            Worth a short conversation?
          </h2>
          <p className="mt-5 text-lg text-bg/70 text-pretty">
            Half an hour on a call. Bring the build, a rough deadline, and the
            budget you're working against. We'll tell you straight whether
            we're the right team — and if we aren't, we'll send you to someone
            who is.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/book" variant="inverse">
              See the calendar →
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-bg/70 hover:text-bg underline underline-offset-4 decoration-bg/30 hover:decoration-bg"
            >
              or email {site.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
