"use client";

import Link from "next/link";
import { useState } from "react";
import { Callout } from "@/components/ui";
import { uid, useLocalState } from "@/lib/storage";
import { KEYS, type AssistantMessage } from "@/lib/records";
import type { NutritionProfile } from "@/lib/nutrition";
import { offlineAssistant, type AssistantReply } from "@/lib/assistantOffline";
import { IS_DEMO } from "@/lib/env";

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

    const context = profile
      ? { conditions: profile.conditions, goal: profile.goal, appetite: profile.appetite }
      : undefined;

    // The offline library runs in the browser too, so a missing server, a
    // dropped signal or a static demo build all still get a real answer.
    const localReply = () => offlineAssistant(text, context);

    try {
      const reply: AssistantReply = IS_DEMO
        ? localReply()
        : await fetch("/api/assistant", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ question: text, profile: context ?? null }),
          })
            .then(async (response) => {
              if (!response.ok) throw new Error("no server");
              return (await response.json()) as AssistantReply;
            })
            .catch(() => localReply());

      setThread((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          text: reply.answer,
          at: new Date().toISOString(),
          engine: reply.engine,
        },
      ]);
      setLinks(reply.links ?? []);
      setEscalate(reply.escalate ?? null);
    } catch {
      setError(
        "Something went wrong answering that. The rest of the nutrition section still works — try the condition guides or the assessment.",
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
        {IS_DEMO && (
          <>
            {" "}
            This public demo has no server, so answers come from the built-in
            library rather than a language model — the same fallback the app
            uses when you have no signal.
          </>
        )}
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
