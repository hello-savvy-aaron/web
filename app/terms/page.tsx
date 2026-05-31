import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service · HelloSavvy",
  description: "Terms governing use of HelloSavvy's website and client portal.",
};

const LAST_UPDATED = "May 30, 2026";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[720px] px-8 py-20">
      <p className="mb-4 text-sm text-ink-tertiary">Last updated {LAST_UPDATED}</p>
      <h1 className="mb-10 text-[40px] font-bold leading-[1.1] tracking-[-0.025em] text-ink-primary">
        Terms of Service
      </h1>

      <div className="prose-hs space-y-8 text-base leading-[1.7] text-ink-secondary">

        <section>
          <h2>Agreement</h2>
          <p>
            By accessing <strong>hellosavvy.design</strong> or the client portal
            at <strong>app.hellosavvy.design</strong>, you agree to these Terms.
            If you do not agree, do not use our services. "HelloSavvy", "we",
            "us", or "our" refers to the boutique software studio operating
            under the HelloSavvy brand.
          </p>
        </section>

        <section>
          <h2>Services</h2>
          <p>
            HelloSavvy provides custom software development, website design,
            go-to-market strategy, and related consulting services to small
            businesses. Specific scope, deliverables, timelines, and fees for
            each engagement are agreed in a separate written proposal or
            statement of work, which takes precedence over these general Terms
            for matters of project delivery.
          </p>
        </section>

        <section>
          <h2>Client portal</h2>
          <p>
            Registered users of the client portal may view project status,
            documents, and updates relevant to their engagement. You are
            responsible for keeping your login credentials secure. You may not
            share your account with others or attempt to access accounts that
            do not belong to you. We reserve the right to suspend or terminate
            access for misuse.
          </p>
        </section>

        <section>
          <h2>Payments</h2>
          <p>
            Blueprint purchases are processed via Stripe. All fees are stated
            in USD and are non-refundable except where required by applicable
            law or as stated in a separate engagement agreement. If you believe
            a charge is in error, contact us within 14 days.
          </p>
        </section>

        <section>
          <h2>Intellectual property</h2>
          <p>
            All content on hellosavvy.design (copy, design, code, graphics) is
            owned by HelloSavvy unless otherwise noted. You may not reproduce,
            distribute, or create derivative works without our written
            permission.
          </p>
          <p>
            Unless otherwise agreed in writing, work product delivered to
            clients becomes the client's property upon receipt of full payment.
            HelloSavvy retains the right to display completed work in our
            portfolio.
          </p>
        </section>

        <section>
          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, HelloSavvy will not be
            liable for indirect, incidental, or consequential damages arising
            from your use of our services or the client portal. Our total
            liability for any claim will not exceed the amount you paid us in
            the 90 days preceding the claim.
          </p>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>
            Our website and portal are provided "as is." We make no warranties,
            express or implied, regarding availability, accuracy, or fitness for
            a particular purpose. We are not responsible for third-party
            services (Stripe, Google, Supabase, Vercel) that we use to deliver
            our platform.
          </p>
        </section>

        <section>
          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of California,
            United States, without regard to conflict-of-law provisions.
          </p>
        </section>

        <section>
          <h2>Changes</h2>
          <p>
            We may update these Terms at any time. The date at the top of this
            page indicates the most recent revision. Continued use of our
            services after an update constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions? Email{" "}
            <a
              href="mailto:hello@hellosavvy.design"
              className="text-brand-primary hover:underline"
            >
              hello@hellosavvy.design
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
