import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

/**
 * Appointment requests for counselling and dietetic clinics.
 *
 * Validated and appended to data/bookings.jsonl. Swap persist() for the
 * clinic's booking system, EHR or CRM when the service goes live — and note
 * that this file will then contain health information, so it must live
 * somewhere with the appropriate access controls and retention policy.
 */

const KINDS = ["counselling", "dietitian"];

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function persist(record: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(
    path.join(dir, "bookings.jsonl"),
    JSON.stringify(record) + "\n",
    "utf8",
  );
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const kind = clean(payload.kind, 20);
  const name = clean(payload.name, 120);
  const contact = clean(payload.contact, 200);

  if (!KINDS.includes(kind)) {
    return NextResponse.json({ error: "Unknown service." }, { status: 400 });
  }
  if (name.length < 2) {
    return NextResponse.json({ error: "Please give a name." }, { status: 422 });
  }
  if (contact.length < 5) {
    return NextResponse.json(
      { error: "Please give an email address or phone number." },
      { status: 422 },
    );
  }

  const record = {
    kind,
    service: clean(payload.service, 80),
    name,
    contact,
    role: clean(payload.role, 40),
    preferred: clean(payload.preferred, 200),
    notes: clean(payload.notes, 2000),
    urgent: payload.urgent === true,
    receivedAt: new Date().toISOString(),
  };

  try {
    await persist(record);
  } catch (err) {
    // Read-only or serverless filesystem: log it so the request is not lost,
    // and still confirm to the person waiting.
    console.log("carecircle-booking", JSON.stringify(record));
    if (process.env.NODE_ENV !== "production") {
      console.error("Booking persisted to log only:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
