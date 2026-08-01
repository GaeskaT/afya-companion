"use client";

import Link from "next/link";
import { useState } from "react";
import { Callout } from "@/components/ui";
import { uid, useLocalState } from "@/lib/storage";
import { KEYS, type AssistantMessage } from "@/lib/records";
import type { NutritionProfile } from "@/lib/nutrition";

const SUGGESTIONS = [
  "What should I eat during chemotherapy?",
  "Cheap high-protein meals for one person",
  "How do I manage a sore mouth and still eat?",
  "My father has no appetite — what can I try?",
  "Kidney diet basics before I see the dietitian",
  "Plan a week of low-salt meals",
];

export function AssistantChat() {
  const [thread, setThread] = useLocalState<AssistantMessage[]>(KEYS.assistant, []);
  const [profile] = useLocalState<NutritionProfile | null>(KEYS.nutritionProfile, null);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [links, setLinks] = useState<{ href: string; label: string }[]>([]);
  const [escalate, setEscalate] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || busy) return;
    setBusy(true);
    setError(null);
    setEscalate(null);
    setInput("");

    const userMessage: AssistantMessage = {
      id: uid(),
      role: "user",
      text,
      at: new Date().toISOString(),
    };
    setThread([...thread, userMessage]);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          question: text,
          profile: profile
            ? { conditions: profile.conditions, goal: profile.goal, appetite: profile.appetite }
            : null,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Something went wrong.");

      setThread((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          text: data.answer,
          at: new Date().toISOString(),
          engine: data.engine,
        },
      ]);
      setLinks(data.links ?? []);
      setEscalate(data.escalate ?? null);
    } catch {
      setError(
        "Could not reach the assistant. If you are offline, the rest of the nutrition section still works — try the condition guides or the assessment.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-5">
      <Callout tone="info" title="What this can and cannot do">
        It answers nutrition questions using this app&apos;s own guidance. It
        does not diagnose, does not prescribe, and will not give individual
        kidney, liver or fluid-restriction targets — those come from your own
        dietitian, from your blood results.
      </Callout>

      {thread.length === 0 && (
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              className="btn btn-ghost text-sm"
              onClick={() => ask(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {thread.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user"
                ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-white"
                : "mr-auto max-w-[92%] rounded-2xl rounded-bl-sm border border-line bg-surface px-4 py-3"
            }
          >
            <p className="whitespace-pre-wrap text-[0.95rem] leading-relaxed">
              {message.text}
            </p>
            {message.engine && (
              <p className="mt-2 text-[0.68rem] text-muted">via {message.engine}</p>
            )}
          </div>
        ))}
        {busy && (
          <p className="text-sm text-muted">Thinking…</p>
        )}
      </div>

      {escalate && <Callout tone="danger">{escalate}</Callout>}
      {error && <Callout tone="warn">{error}</Callout>}

      {links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn-soft text-sm">
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          className="field flex-1"
          value={input}
          placeholder="Ask about food, symptoms, meal ideas…"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={busy}>
          Ask
        </button>
      </form>

      {thread.length > 0 && (
        <button
          type="button"
          className="text-sm text-muted hover:text-danger"
          onClick={() => {
            setThread([]);
            setLinks([]);
          }}
        >
          Clear this conversation
        </button>
      )}
    </div>
  );
}
