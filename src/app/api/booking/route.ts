import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 5; // max requests per IP per hour
const DUPLICATE_MS = 10 * 60 * 1000; // same mobile within 10 minutes
const MIN_FILL_MS = 3000; // humans can't fill this form in under 3 seconds

const hits = new Map<string, number[]>();
const recentMobiles = new Map<string, number>();

function getIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Keep memory small
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

function todayIST() {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
}

export async function POST(req: Request) {
  // 1. Rate limit per IP
  if (isRateLimited(getIp(req))) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  // 2. Safe JSON parsing
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { website, elapsed, ...rest } = body as Record<string, unknown>;

  // 3. Bot checks: reply "ok" so bots think it worked, but do nothing
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }
  if (typeof elapsed === "number" && elapsed < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  // 4. Validate on the server
  const parsed = bookingSchema.safeParse(rest);
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // 5. Date can't be in the past
  if (parsed.data.date < todayIST()) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // 6. Same mobile number again within 10 minutes: skip silently
  const now = Date.now();
  const last = recentMobiles.get(parsed.data.mobile);
  if (last && now - last < DUPLICATE_MS) {
    return NextResponse.json({ ok: true });
  }
  recentMobiles.set(parsed.data.mobile, now);

  const webhookUrl = process.env.BOOKING_WEBHOOK_URL;
  const secret = process.env.BOOKING_SECRET;

  if (!webhookUrl || !secret) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, secret }),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
