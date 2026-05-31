import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · HelloSavvy",
  description: "How HelloSavvy collects, uses, and protects your information.",
};

const LAST_UPDATED = "May 30, 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[720px] px-8 py-20">
      <p className="mb-4 text-sm text-ink-tertiary">Last updated {LAST_UPDATED}</p>
      <h1 className="mb-10 text-[40px] font-bold leading-[1.1] tracking-[-0.025em] text-ink-primary">
        Privacy Policy
      </h1>

      <div className="prose-hs space-y-8 text-base leading-[1.7] text-ink-secondary">

        <section>
          <h2>Who we are</h2>
          <p>
            HelloSavvy ("we", "us", "our") is a boutique software studio
            operating at <strong>hellosavvy.design</strong>. We build custom
            websites, go-to-market systems, and software for small businesses.
            This policy explains how we handle information when you visit our
            site or use our client portal at{" "}
            <strong>app.hellosavvy.design</strong>.
          </p>
        </section>

        <section>
          <h2>Information we collect</h2>
          <p>
            <strong>Information you give us directly.</strong> When you book a
            call, purchase a Blueprint, or create an account in the client
            portal, we collect your name, email address, and any details you
            share about your project.
          </p>
          <p>
            <strong>Authentication data.</strong> Our client portal uses Google
            OAuth and email magic links (via Supabase Auth). We store your email
            address and the name provided by your identity provider. We never
            see or store passwords.
          </p>
          <p>
            <strong>Usage data.</strong> We may log standard server-side request
            data (IP address, browser, pages visited) for security and
            performance purposes.
          </p>
        </section>

        <section>
          <h2>How we use your information</h2>
          <ul>
            <li>To provide and manage the services you have engaged us for.</li>
            <li>
              To give you access to project documents, status updates, and
              communications in the client portal.
            </li>
            <li>To respond to enquiries and schedule calls.</li>
            <li>
              To send transactional emails (sign-in links, project updates).
              We do not send marketing email without your consent.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>Sharing your information</h2>
          <p>
            We do not sell your personal information. We share it only with the
            service providers necessary to operate our business:
          </p>
          <ul>
            <li>
              <strong>Supabase</strong> — database and authentication hosting.
            </li>
            <li>
              <strong>Vercel</strong> — website and application hosting.
            </li>
            <li>
              <strong>Stripe</strong> — payment processing for Blueprint
              purchases. We do not store card details.
            </li>
            <li>
              <strong>Google</strong> — OAuth sign-in, if you choose to use it.
            </li>
          </ul>
          <p>
            Each provider has their own privacy policy and processes data only
            as needed to deliver their service.
          </p>
        </section>

        <section>
          <h2>Data retention</h2>
          <p>
            We keep your account data for as long as your relationship with
            HelloSavvy is active. You may request deletion at any time by
            emailing us. We will remove your personal data within 30 days,
            except where we are required by law to retain it.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            All data is transmitted over HTTPS. Access to the client portal
            requires authentication; document storage uses private, signed URLs.
            We follow industry-standard practices to protect your information,
            but no system is completely immune to breach.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            You have the right to access, correct, or delete the personal
            information we hold about you. To exercise these rights, contact us
            at the address below.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Our site uses only functional cookies required for authentication
            (session tokens). We do not use advertising or tracking cookies.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of
            this page reflects when it was last revised. Continued use of our
            services after an update constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
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
