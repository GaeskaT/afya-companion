"use client";

import { useState } from "react";
import { SAFETY_PLAN_STEPS } from "@/content/crisis";
import { useLocalState } from "@/lib/storage";
import { KEYS } from "@/lib/records";

export function SafetyPlan() {
  const [plan, setPlan] = useLocalState<Record<string, string>>(KEYS.safetyPlan, {});
  const [saved, setSaved] = useState(false);

  function update(key: string, value: string) {
    setPlan({ ...plan, [key]: value });
    setSaved(false);
  }

  const filled = SAFETY_PLAN_STEPS.filter((s) => plan[s.title]?.trim()).length;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted">
        A safety plan is written when you are well, and read when you are not.
        It stays on this device — print it or write it out and keep a copy where
        you will find it.
      </p>

      {SAFETY_PLAN_STEPS.map((step) => (
        <div key={step.title} className="card p-4">
          <label className="label" htmlFor={step.title}>
            {step.title}
          </label>
          <p className="mb-2 text-sm text-muted">{step.prompt}</p>
          <textarea
            id={step.title}
            className="field"
            rows={3}
            value={plan[step.title] ?? ""}
            placeholder={step.placeholder}
            onChange={(e) => update(step.title, e.target.value)}
          />
        </div>
      ))}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setSaved(true)}
        >
          Saved automatically
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => window.print()}>
          Print my plan
        </button>
        <span className="text-sm text-muted">
          {filled} of {SAFETY_PLAN_STEPS.length} sections filled
          {saved ? " · stored on this device" : ""}
        </span>
      </div>
    </div>
  );
}
