import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

/**
 * Community posts. Everything goes into a moderation queue — nothing is
 * published straight to the board, because these spaces carry crisis
 * disclosures, medical advice and grief, and unmoderated peer forums in
 * health settings do real harm.
 *
 * A basic risk scan tags posts that mention self-harm so a moderator sees them
 * first. It never blocks the post; it prioritises the human review.
 */

const RISK = /(suicid|kill myself|end (my|it all)|self.?harm|overdose|want to die|better off dead)/i;

function clean(value: unknown, max = 4000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const text = clean(payload.text);
  if (text.length < 5) {
    return NextResponse.json({ error: "Please write a little more." }, { status: 422 });
  }

  const record = {
    space: clean(payload.space, 40),
    alias: clean(payload.alias, 60) || "Anonymous",
    text,
    riskFlagged: RISK.test(text),
    status: "pending-moderation",
    receivedAt: new Date().toISOString(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "community-queue.jsonl"),
      JSON.stringify(record) + "\n",
      "utf8",
    );
  } catch (err) {
    console.log("carecircle-community", JSON.stringify(record));
    if (process.env.NODE_ENV !== "production") {
      console.error("Community post persisted to log only:", err);
    }
  }

  return NextResponse.json({
    ok: true,
    riskFlagged: record.riskFlagged,
  });
}
