import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

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
