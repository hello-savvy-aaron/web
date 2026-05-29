import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Payment received",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function PaymentSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  let customerEmail: string | null = null;
  let amount: string | null = null;

  if (session_id) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      customerEmail = session.customer_details?.email ?? session.customer_email ?? null;
      if (session.amount_total != null) {
        amount = `$${(session.amount_total / 100).toFixed(2)}`;
      }
    } catch {
      // Bad / expired session_id — fall through to generic success copy.
    }
  }

  return (
    <main className="mx-auto max-w-[720px] px-8 pt-16 pb-32 text-center">
      <span className="mb-6 inline-flex w-fit rounded-pill bg-mint-100 px-[14px] py-[6px] text-xs font-semibold tracking-[0.08em] text-ink-primary ring-1 ring-mint-500 ring-inset">
        PAYMENT RECEIVED
      </span>
      <h1 className="mb-6 text-[36px] leading-[1.05] font-bold tracking-[-0.025em] text-ink-primary md:text-[48px]">
        Thanks{customerEmail ? `, ${customerEmail}` : ""}.
      </h1>
      <p className="mb-10 text-base leading-[1.5] text-ink-secondary lg:text-lg">
        {amount
          ? `We've received your payment of ${amount} for Blueprints.`
          : "Your payment was successful."}{" "}
        A receipt is on its way to your inbox. The team will follow up within one
        business day with the discovery questions and a calendar link.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-pill bg-display-lavender px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_0_rgba(91,71,229,0.3)] transition-colors duration-150 ease-out hover:bg-brand-primary-hover"
      >
        Back to HelloSavvy
      </Link>
    </main>
  );
}
