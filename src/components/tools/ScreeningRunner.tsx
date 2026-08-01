"use client";

import Link from "next/link";
import { useState } from "react";
import {
  bandFor,
  maxScore,
  scoreTool,
  type ScreeningTool,
} from "@/content/screening";
import { Callout, Card, Bullets } from "@/components/ui";
import { useLocalState, uid } from "@/lib/storage";
import { KEYS, type ScreeningResult } from "@/lib/records";
import { SCREENING_DISCLAIMER } from "@/lib/site";

export function ScreeningRunner({ tool }: { tool: ScreeningTool }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    tool.items.map(() => null),
  );
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useLocalState<ScreeningResult[]>(KEYS.screening, []);

  const complete = answers.every((a) => a !== null);
  const score = complete ? scoreTool(tool, answers as number[]) : 0;
  const band = complete ? bandFor(tool, score) : null;
  const max = maxScore(tool);
  const riskFlagged =
    tool.riskItemIndex !== undefined &&
    (answers[tool.riskItemIndex] ?? 0) > 0;

  const previous = history
    .filter((h) => h.tool === tool.slug)
    .sort((a, b) => (a.at < b.at ? 1 : -1));

  function submit() {
    if (!complete || !band) return;
    setHistory([
      {
        id: uid(),
        tool: tool.slug,
        at: new Date().toISOString(),
        score,
        band: band.label,
        answers: answers as number[],
      },
      ...history,
    ]);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted && band) {
    const toneClass = {
      good: "bg-good-tint text-good",
      info: "bg-primary-tint text-primary-700",
      warn: "bg-warn-tint text-warn",
      danger: "bg-danger-tint text-danger",
    }[band.tone];

    return (
      <div className="space-y-6">
        <div className={`rounded-2xl p-5 ${toneClass}`}>
          <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
            Your score
          </p>
          <p className="mt-1 font-display text-4xl font-semibold">
            {score}
            <span className="ml-1 text-lg opacity-70">/ {max}</span>
          </p>
          <p className="mt-2 text-lg font-semibold">{band.label}</p>
          <p className="mt-1 text-sm leading-relaxed">{band.meaning}</p>
        </div>

        {riskFlagged && (
          <Callout tone="danger" title="You answered yes to thoughts of self-harm">
            Please treat this as urgent. Contact your doctor or care team today,
            and tell someone close to you. If you might act on these thoughts,
            go to <Link href="/care/crisis">crisis support</Link> or call your
            local emergency number now.
          </Callout>
        )}

        <Card>
          <p className="font-semibold">What to do next</p>
          <div className="mt-3">
            <Bullets items={band.guidance} />
          </div>
        </Card>

        <Card>
          <p className="font-semibold">Worth knowing</p>
          <div className="mt-3">
            <Bullets items={tool.afterwards} />
          </div>
        </Card>

        <Callout tone="info">{SCREENING_DISCLAIMER}</Callout>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setAnswers(tool.items.map(() => null));
              setSubmitted(false);
            }}
          >
            Take it again
          </button>
          <Link href="/tools/screening" className="btn btn-soft">
            All questionnaires
          </Link>
          <Link href="/care/counselling" className="btn btn-soft">
            Talk to someone
          </Link>
        </div>

        {previous.length > 0 && <History results={previous} max={max} />}
      </div>
    );
  }

  const answered = answers.filter((a) => a !== null).length;

  return (
    <div className="space-y-5">
      <Callout tone="info">{SCREENING_DISCLAIMER}</Callout>

      <div className="sticky top-14 z-20 -mx-1 rounded-xl bg-bg/90 px-1 py-2 backdrop-blur lg:top-0">
        <div className="h-1.5 w-full rounded-full bg-surface-2">
          <div
            className="h-1.5 rounded-full bg-primary transition-all"
            style={{ width: `${(answered / tool.items.length) * 100}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-muted">
          {answered} of {tool.items.length} answered
        </p>
      </div>

      <p className="font-medium text-ink-soft">{tool.timeframe}</p>

      <ol className="space-y-3">
        {tool.items.map((item, i) => (
          <li key={i} className="card p-4">
            <p className="font-medium leading-snug">
              <span className="mr-2 text-muted">{i + 1}.</span>
              {item}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tool.options.map((option) => {
                const active = answers[i] === option.value;
                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() =>
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[i] = option.value;
                        return next;
                      })
                    }
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                      active
                        ? "border-transparent bg-primary text-white"
                        : "border-line-strong bg-surface text-ink-soft hover:bg-surface-2"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={submit}
          disabled={!complete}
        >
          See my result
        </button>
        {!complete && (
          <span className="text-sm text-muted">
            Answer every question to see your score.
          </span>
        )}
      </div>

      <p className="text-xs text-muted">{tool.provenance}</p>

      {previous.length > 0 && <History results={previous} max={max} />}
    </div>
  );
}

function History({ results, max }: { results: ScreeningResult[]; max: number }) {
  return (
    <section className="card p-4">
      <p className="font-semibold">Your previous scores</p>
      <ul className="mt-3 space-y-2">
        {results.slice(0, 8).map((r) => (
          <li key={r.id} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-xs text-muted">
              {new Date(r.at).toLocaleDateString()}
            </span>
            <span className="h-2 flex-1 rounded-full bg-surface-2">
              <span
                className="block h-2 rounded-full bg-primary"
                style={{ width: `${Math.min(100, (r.score / max) * 100)}%` }}
              />
            </span>
            <span className="w-28 shrink-0 text-right text-xs font-medium">
              {r.score} · {r.band}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">
        Stored only on this device. The trend over weeks tells you more than any
        single score.
      </p>
    </section>
  );
}
