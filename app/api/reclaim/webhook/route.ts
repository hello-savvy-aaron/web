import crypto from "node:crypto";
import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Header + algorithm are placeholders — confirm against Reclaim's webhook docs
// when registering the endpoint. If wrong, every legitimate call will return
// 401, which is loud and safe (vs silently accepting unverified payloads).
const SIGNATURE_HEADER = "x-reclaim-signature";

export async function POST(req: NextRequest) {
  const secret = process.env.RECLAIM_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[reclaim-webhook] RECLAIM_WEBHOOK_SECRET is not set");
    return Response.json({ ok: false }, { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get(SIGNATURE_HEADER);
  if (!signature || !verifySignature(rawBody, signature, secret)) {
    return Response.json({ ok: false, error: "bad signature" }, { status: 401 });
  }

  let event: unknown;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return Response.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  // Sinks (CRM push, Slack ping, etc.) get added here as they're needed.
  console.log("[reclaim-webhook]", event);

  return Response.json({ ok: true });
}

function verifySignature(body: string, signature: string, secret: string): boolean {
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  const sigBuf = Buffer.from(signature);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length) return false;
  return crypto.timingSafeEqual(sigBuf, expBuf);
}
