import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

/**
 * Registration intake for all five roles.
 *
 * The application record is appended to data/registrations.jsonl and uploaded
 * documents are written under data/uploads/<reference>/.
 *
 * ⚠ Before this handles real applicants, replace persist() with storage that
 * has the controls this data needs. What arrives here includes identity
 * documents, professional registration numbers, police clearances and
 * occupational health records — for the caregiver roles, everything an
 * identity thief would want in one folder. That means, at minimum: encryption
 * at rest, access limited to named verification staff with an audit trail,
 * virus scanning on upload, a retention and deletion schedule, and a lawful
 * basis recorded for each category of data.
 */

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_FILES = 15;
const ACCEPTED = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REFERENCE_RE = /^CC-[A-Z0-9]{3,8}-[A-Z0-9]{3}$/;

type Payload = {
  reference?: unknown;
  role?: unknown;
  roleName?: unknown;
  variant?: unknown;
  answers?: Record<string, unknown>;
  documents?: Record<string, unknown>;
  consents?: Record<string, unknown>;
};

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Filenames come from the applicant's device — never trust them as paths. */
function safeName(name: string): string {
  return (
    name
      .replace(/[^A-Za-z0-9._-]/g, "_")
      .replace(/^\.+/, "")
      .slice(-80) || "document"
  );
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  let payload: Payload;
  try {
    payload = JSON.parse(String(form.get("application") ?? "")) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid application data." }, { status: 400 });
  }

  const reference = clean(payload.reference, 32);
  const role = clean(payload.role, 40);
  if (!REFERENCE_RE.test(reference)) {
    return NextResponse.json({ error: "Invalid reference." }, { status: 400 });
  }
  if (!role) {
    return NextResponse.json({ error: "Missing role." }, { status: 400 });
  }

  const answers = Object.fromEntries(
    Object.entries(payload.answers ?? {}).map(([k, v]) => [
      clean(k, 60),
      clean(v, 4000),
    ]),
  );
  if (!answers.fullName || answers.fullName.length < 2) {
    return NextResponse.json({ error: "Please give your name." }, { status: 422 });
  }
  if (!EMAIL_RE.test(answers.email ?? "")) {
    return NextResponse.json(
      { error: "Please give a valid email address." },
      { status: 422 },
    );
  }

  const files = [...form.entries()].filter(
    (entry): entry is [string, File] =>
      entry[0].startsWith("file:") && entry[1] instanceof File,
  );
  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: "Too many documents." }, { status: 413 });
  }
  for (const [, file] of files) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        { error: `${file.name} is larger than 5 MB.` },
        { status: 413 },
      );
    }
    if (file.type && !ACCEPTED.has(file.type)) {
      return NextResponse.json(
        { error: `${file.name} is not a PDF or an image.` },
        { status: 415 },
      );
    }
  }

  const stored: { key: string; storedAs: string; size: number; type: string }[] = [];

  try {
    const dir = path.join(process.cwd(), "data", "uploads", reference);
    await fs.mkdir(dir, { recursive: true });
    for (const [field, file] of files) {
      const key = field.slice("file:".length).replace(/[^a-z0-9-]/gi, "");
      const storedAs = `${key}-${safeName(file.name)}`;
      const bytes = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(path.join(dir, storedAs), bytes);
      stored.push({ key, storedAs, size: file.size, type: file.type });
    }
  } catch (err) {
    console.error("carecircle-registration: could not store documents", err);
    return NextResponse.json(
      {
        error:
          "Your documents could not be stored. Nothing was saved — please try again, or email the verification team.",
      },
      { status: 500 },
    );
  }

  const record = {
    reference,
    role,
    roleName: clean(payload.roleName, 80),
    variant: clean(payload.variant, 40) || undefined,
    answers,
    documents: payload.documents ?? {},
    consents: payload.consents ?? {},
    files: stored,
    status: "submitted",
    receivedAt: new Date().toISOString(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "registrations.jsonl"),
      JSON.stringify(record) + "\n",
      "utf8",
    );
  } catch (err) {
    console.error("carecircle-registration: could not append record", err);
    return NextResponse.json(
      { error: "Your application could not be recorded. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, reference, files: stored.length });
}
