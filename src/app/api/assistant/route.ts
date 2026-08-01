import { NextResponse } from "next/server";
import { offlineAssistant } from "@/lib/assistantOffline";

export const runtime = "nodejs";

/**
 * Nutrition assistant.
 *
 * With ANTHROPIC_API_KEY set, questions go to Claude under a tightly scoped
 * system prompt. Without it — or if the call fails — the same question is
 * answered from the app's own content library, so the feature never simply
 * breaks in a clinic with no signal.
 *
 * The question is sent to the model; nothing is stored server-side.
 */

const MODEL = "claude-sonnet-5";

const SYSTEM = `You are the nutrition assistant inside CareCircle, an app supporting patients, caregivers and families living with medical conditions.

Your scope is nutrition and dietetics education, plus practical eating support during illness and treatment.

Rules you must follow:
- You are not a clinician. Never diagnose, never prescribe, never give doses, and never tell someone to start, stop or change medication.
- Never give individual renal, hepatic or fluid-restriction targets. Say those must come from the person's own dietitian, because they are set from blood results.
- Prioritise weight and muscle maintenance during active treatment. Do not recommend weight loss, fasting or restrictive diets to someone in cancer treatment, with malnutrition, or who is losing weight.
- If the question describes a red flag — choking or coughing on food, unintentional weight loss of 5% or more, not eating for days, blood in vomit or stool, or thoughts of self-harm — say so plainly first and tell them to contact their care team (or emergency services / the crisis page for self-harm).
- Be specific and practical. Prefer cheap, widely available foods. Offer alternatives for different cuisines and budgets.
- Keep answers under about 250 words. Use short paragraphs and bullet points.
- End by noting when something needs a registered dietitian.
- If asked about anything outside nutrition and eating, redirect briefly to the relevant part of the app (emotional support, screening questionnaires, counselling, crisis support).`;

type Body = {
  question?: unknown;
  profile?: { conditions?: string[]; goal?: string; appetite?: string } | null;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const question =
    typeof body.question === "string" ? body.question.trim().slice(0, 2000) : "";
  if (question.length < 2) {
    return NextResponse.json({ error: "Please type a question." }, { status: 422 });
  }

  const context = {
    conditions: body.profile?.conditions ?? [],
    goal: body.profile?.goal,
  };
  const fallback = offlineAssistant(question, context);

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return NextResponse.json(fallback);

  const contextLine = context.conditions.length
    ? `The person has told the app about: ${context.conditions.join(", ")}. Their goal is to ${context.goal ?? "maintain weight"}.`
    : "The person has not shared a profile.";

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        system: SYSTEM,
        messages: [
          { role: "user", content: `${contextLine}\n\nQuestion: ${question}` },
        ],
      }),
    });

    if (!response.ok) return NextResponse.json(fallback);

    const data = (await response.json()) as {
      content?: { type: string; text?: string }[];
    };
    const text = (data.content ?? [])
      .filter((block) => block.type === "text")
      .map((block) => block.text ?? "")
      .join("\n")
      .trim();

    if (!text) return NextResponse.json(fallback);

    return NextResponse.json({
      answer: text,
      links: fallback.links,
      engine: MODEL,
      escalate: fallback.escalate,
    });
  } catch {
    return NextResponse.json(fallback);
  }
}
