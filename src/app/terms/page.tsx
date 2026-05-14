import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <Container size="prose">
      <article className="py-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
          Terms
        </p>
        <h1 className="display mt-3 text-4xl font-normal">Terms of service</h1>
        <p className="mt-6 text-ink-muted">
          This site is a marketing site. Engagements are governed by the
          signed statement of work that goes with each project. Nothing on
          this page is a contract.
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
        </p>
      </article>
    </Container>
  );
}
