import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

type CalPayload = {
  triggerEvent?: string;
  payload?: {
    uid?: string;
    bookingId?: number | string;
    title?: string;
    startTime?: string;
    endTime?: string;
    attendees?: Array<{ name?: string; email?: string }>;
    organizer?: { email?: string };
    status?: string;
  };
};

const STATUS_BY_EVENT: Record<string, string> = {
  "BOOKING_CREATED": "accepted",
  "BOOKING_CANCELLED": "cancelled",
  "BOOKING_RESCHEDULED": "rescheduled",
};

export async function POST(request: NextRequest) {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "CAL_WEBHOOK_SECRET is not configured" },
      { status: 500 }
    );
  }

  const raw = await request.text();
  const signature = request.headers.get("x-cal-signature-256");

  if (!signature || !verifySignature(raw, signature, secret)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  let body: CalPayload;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const trigger = body.triggerEvent ?? "";
  const status = STATUS_BY_EVENT[trigger];
  const p = body.payload;

  if (!status || !p?.uid || !p?.startTime) {
    return NextResponse.json({ ok: true, ignored: trigger });
  }

  const attendee = p.attendees?.[0];
  if (!attendee?.email) {
    return NextResponse.json({ ok: true, ignored: "no attendee" });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("bookings").upsert(
    {
      external_id: p.uid,
      guest_email: attendee.email,
      guest_name: attendee.name ?? null,
      scheduled_at: p.startTime,
      status,
      raw: body,
    },
    { onConflict: "external_id" }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function verifySignature(payload: string, signature: string, secret: string): boolean {
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(signature, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
