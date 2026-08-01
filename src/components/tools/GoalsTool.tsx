"use client";

import { useState } from "react";
import { EmptyState } from "@/components/ui";
import { uid, useLocalState } from "@/lib/storage";
import { KEYS, type GoalRecord } from "@/lib/records";

const EMPTY = {
  title: "",
  why: "",
  firstStep: "",
  badDayVersion: "",
  helper: "",
  by: "",
};

export function GoalsTool() {
  const [goals, setGoals] = useLocalState<GoalRecord[]>(KEYS.goals, []);
  const [draft, setDraft] = useState(EMPTY);

  function add() {
    if (!draft.title.trim()) return;
    setGoals([
      { id: uid(), ...draft, done: false, createdAt: new Date().toISOString() },
      ...goals,
    ]);
    setDraft(EMPTY);
  }

  function toggle(id: string) {
    setGoals(goals.map((g) => (g.id === id ? { ...g, done: !g.done } : g)));
  }

  function remove(id: string) {
    setGoals(goals.filter((g) => g.id !== id));
  }

  const open = goals.filter((g) => !g.done);
  const done = goals.filter((g) => g.done);

  return (
    <div className="space-y-6">
      <div className="card space-y-3 p-4 sm:p-5">
        <div>
          <label className="label" htmlFor="g-title">
            The goal — small, specific, and something you actually want
          </label>
          <input
            id="g-title"
            className="field"
            value={draft.title}
            placeholder="e.g. Walk to the end of the road three times this week"
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="g-why">
              Why it matters to you
            </label>
            <input
              id="g-why"
              className="field"
              value={draft.why}
              onChange={(e) => setDraft({ ...draft, why: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="g-step">
              The very first step
            </label>
            <input
              id="g-step"
              className="field"
              value={draft.firstStep}
              placeholder="e.g. put my shoes by the door tonight"
              onChange={(e) => setDraft({ ...draft, firstStep: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="g-bad">
              The bad-day version
            </label>
            <input
              id="g-bad"
              className="field"
              value={draft.badDayVersion}
              placeholder="e.g. stand outside for two minutes"
              onChange={(e) => setDraft({ ...draft, badDayVersion: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="g-helper">
              Who will know about it
            </label>
            <input
              id="g-helper"
              className="field"
              value={draft.helper}
              onChange={(e) => setDraft({ ...draft, helper: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="g-by">
              By when
            </label>
            <input
              id="g-by"
              type="date"
              className="field"
              value={draft.by}
              onChange={(e) => setDraft({ ...draft, by: e.target.value })}
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={add}>
          Add goal
        </button>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg">Working on</h2>
        {open.length === 0 ? (
          <EmptyState
            title="No open goals"
            body="A goal keeps a life pointed forward. Make it small enough that a bad week cannot cancel it."
          />
        ) : (
          <ul className="space-y-3">
            {open.map((goal) => (
              <li key={goal.id} className="card p-4">
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => toggle(goal.id)}
                    aria-label="Mark done"
                    className="mt-0.5 h-6 w-6 shrink-0 rounded-full border-2 border-line-strong hover:border-primary"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{goal.title}</p>
                    <dl className="mt-2 space-y-1 text-sm text-muted">
                      {goal.why && <p>Why: {goal.why}</p>}
                      {goal.firstStep && <p>First step: {goal.firstStep}</p>}
                      {goal.badDayVersion && <p>Bad day: {goal.badDayVersion}</p>}
                      {goal.helper && <p>With: {goal.helper}</p>}
                      {goal.by && <p>By: {goal.by}</p>}
                    </dl>
                  </div>
                  <button
                    type="button"
                    className="text-xs text-muted hover:text-danger"
                    onClick={() => remove(goal.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {done.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg">Done</h2>
          <ul className="space-y-2">
            {done.map((goal) => (
              <li
                key={goal.id}
                className="card flex items-center gap-3 p-3 text-sm text-muted"
              >
                <button
                  type="button"
                  onClick={() => toggle(goal.id)}
                  aria-label="Mark not done"
                  className="h-5 w-5 shrink-0 rounded-full bg-good"
                />
                <span className="line-through">{goal.title}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
