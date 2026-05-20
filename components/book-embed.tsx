const RECLAIM_EMBED_URL = process.env.NEXT_PUBLIC_RECLAIM_EMBED_URL;

export default function BookEmbed() {
  if (!RECLAIM_EMBED_URL) {
    return (
      <div className="mx-auto max-w-[720px] rounded-xl bg-bg-elevated p-12 text-center shadow-[0_4px_24px_-8px_rgba(13,31,28,0.08)]">
        <p className="text-base leading-[1.5] text-ink-secondary">
          The booking link is being set up. In the meantime, email{" "}
          <a
            href="mailto:aaron@hellosavvy.design?subject=Book%20a%20chat"
            className="font-semibold text-display-lavender hover:underline"
          >
            aaron@hellosavvy.design
          </a>{" "}
          and we'll send times directly.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[840px] overflow-hidden rounded-xl bg-bg-elevated p-2 shadow-[0_4px_24px_-8px_rgba(13,31,28,0.08)]">
      <iframe
        src={RECLAIM_EMBED_URL}
        title="Book a chat with HelloSavvy"
        className="block h-[720px] w-full rounded-lg border-0"
        loading="lazy"
      />
    </div>
  );
}
