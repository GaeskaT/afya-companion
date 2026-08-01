"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BREATH_PATTERNS, GUIDED_SCRIPTS } from "@/content/daily";
import { Callout } from "@/components/ui";

export function BreathingPlayer() {
  const [patternSlug, setPatternSlug] = useState(BREATH_PATTERNS[0].slug);
  const pattern = BREATH_PATTERNS.find((p) => p.slug === patternSlug)!;
  const [minutes, setMinutes] = useState(pattern.defaultMinutes);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const cycleLength = useMemo(
    () => pattern.cycle.reduce((s, p) => s + p.seconds, 0),
    [pattern],
  );

  function choosePattern(slug: string) {
    const next = BREATH_PATTERNS.find((p) => p.slug === slug);
    if (!next) return;
    setPatternSlug(slug);
    setMinutes(next.defaultMinutes);
    setElapsed(0);
    setRunning(false);
  }

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setElapsed((e) => {
        const next = e + 0.1;
        if (next >= minutes * 60) {
          setRunning(false);
          return minutes * 60;
        }
        return next;
      });
    }, 100);
    return () => window.clearInterval(id);
  }, [running, minutes]);

  const positionInCycle = elapsed % cycleLength;
  let acc = 0;
  let phase = pattern.cycle[0];
  let phaseElapsed = 0;
  for (const p of pattern.cycle) {
    if (positionInCycle < acc + p.seconds) {
      phase = p;
      phaseElapsed = positionInCycle - acc;
      break;
    }
    acc += p.seconds;
  }

  const progress = phaseElapsed / phase.seconds;
  const scale =
    phase.scale === "in"
      ? 0.55 + 0.45 * progress
      : phase.scale === "out"
        ? 1 - 0.45 * progress
        : phase.scale === "hold" && acc === 0
          ? 1
          : 1;

  const remaining = Math.max(0, minutes * 60 - elapsed);
  const finished = elapsed >= minutes * 60 && minutes > 0;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {BREATH_PATTERNS.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => choosePattern(p.slug)}
            className={`btn text-sm ${
              p.slug === patternSlug ? "btn-primary" : "btn-ghost"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="card p-5">
        <p className="text-sm text-ink-soft">{pattern.tagline}</p>
        <p className="mt-1 text-sm text-muted">{pattern.bestFor}</p>

        <div className="my-8 flex flex-col items-center gap-4">
          <div className="relative flex h-56 w-56 items-center justify-center">
            <div
              className="absolute h-56 w-56 rounded-full bg-primary-tint"
              style={{
                transform: `scale(${running ? scale : 0.7})`,
                transition: "transform 120ms linear",
              }}
            />
            <div className="relative text-center">
              <p className="font-display text-2xl">
                {finished ? "Done" : running ? phase.label : "Ready"}
              </p>
              <p className="mt-1 text-sm text-muted">
                {finished
                  ? "Notice how you feel now."
                  : running
                    ? `${Math.ceil(phase.seconds - phaseElapsed)}`
                    : `${minutes} minute${minutes === 1 ? "" : "s"}`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (finished) setElapsed(0);
                setRunning((r) => !r);
              }}
            >
              {running ? "Pause" : finished ? "Start again" : "Start"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setRunning(false);
                setElapsed(0);
              }}
            >
              Reset
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <label htmlFor="minutes">Length</label>
            <select
              id="minutes"
              className="field w-auto py-1.5"
              value={minutes}
              onChange={(e) => {
                setMinutes(Number(e.target.value));
                setElapsed(0);
                setRunning(false);
              }}
            >
              {[1, 2, 3, 4, 5, 8, 10].map((m) => (
                <option key={m} value={m}>
                  {m} min
                </option>
              ))}
            </select>
            {running && (
              <span>
                {Math.floor(remaining / 60)}:
                {String(Math.floor(remaining % 60)).padStart(2, "0")} left
              </span>
            )}
          </div>
        </div>

        {pattern.caution && <Callout tone="warn">{pattern.caution}</Callout>}
      </div>

      <Callout tone="info" title="If focusing on the breath makes you more anxious">
        That is common with breathlessness, panic or trauma, and it is not
        failure. Use an external anchor instead — cold water on the wrists, feet
        pressed into the floor, or the 5-4-3-2-1 grounding script below.
      </Callout>
    </div>
  );
}

export function GuidedPlayer() {
  const [slug, setSlug] = useState(GUIDED_SCRIPTS[0].slug);
  const script = GUIDED_SCRIPTS.find((s) => s.slug === slug)!;
  const [index, setIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = useRef<number | null>(null);

  function chooseScript(next: string) {
    setSlug(next);
    setIndex(0);
    setRunning(false);
  }

  useEffect(() => {
    if (!running) return;
    const line = script.lines[index];
    if (!line) return;
    timer.current = window.setTimeout(() => {
      if (index + 1 < script.lines.length) setIndex(index + 1);
      else setRunning(false);
    }, line.seconds * 1000);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [running, index, script]);

  const done = !running && index === script.lines.length - 1;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {GUIDED_SCRIPTS.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => chooseScript(s.slug)}
            className={`btn text-sm ${s.slug === slug ? "btn-primary" : "btn-ghost"}`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="card p-5">
        <p className="text-sm text-muted">
          {script.minutes} minutes · {script.bestFor}
        </p>

        <div className="my-8 min-h-32 flex items-center justify-center px-2 text-center">
          <p key={index} className="animate-fade-up font-display text-xl leading-snug">
            {script.lines[index]?.text}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (done) setIndex(0);
              setRunning((r) => !r);
            }}
          >
            {running ? "Pause" : done ? "Start again" : index === 0 ? "Start" : "Continue"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() =>
              setIndex((i) => Math.min(script.lines.length - 1, i + 1))
            }
          >
            Next
          </button>
        </div>

        <div className="mt-5 h-1.5 w-full rounded-full bg-surface-2">
          <div
            className="h-1.5 rounded-full bg-primary transition-all"
            style={{ width: `${((index + 1) / script.lines.length) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-center text-xs text-muted">
          Step {index + 1} of {script.lines.length}
        </p>
      </div>
    </div>
  );
}
