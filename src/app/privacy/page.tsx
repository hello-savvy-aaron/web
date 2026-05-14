import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <Container size="prose">
      <article className="prose-page py-20">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
          Privacy
        </p>
        <h1 className="display mt-3 text-4xl font-normal">Privacy policy</h1>
        <p className="mt-6 text-ink-muted">
          We collect the minimum we need to run the business: your name and
          email when you book a call, and basic analytics on this site. We
          don't sell or share it. If you'd like your information deleted, email{" "}
          <a href="mailto:hello@hellosavvy.com" className="text-ink underline">
            hello@hellosavvy.com
          </a>{" "}
          and we'll handle it within five business days.
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}.
        </p>
      </article>
    </Container>
  );
}
