"use client";

import { useState } from "react";
import { Callout, Card, EmptyState, Stat } from "@/components/ui";
import {
  KEYS,
  MILESTONE_CATEGORY_LABEL,
  type Milestone,
  type MilestoneCategory,
} from "@/lib/records";
import { todayKey, uid, useLocalState } from "@/lib/storage";

const CATEGORIES = Object.keys(MILESTONE_CATEGORY_LABEL) as MilestoneCategory[];

/** Starting points, because a blank form is hard when you are exhausted. */
const SUGGESTIONS: { category: MilestoneCategory; title: string }[] = [
  { category: "treatment", title: "Last cycle of this treatment" },
  { category: "treatment", title: "First scan or test after treatment ends" },
  { category: "treatment", title: "The day the line or port comes out" },
  { category: "physical", title: "Walk to the end of the road and back" },
  { category: "physical", title: "Climb the stairs without stopping" },
  { category: "physical", title: "First proper night's sleep in my own bed" },
  { category: "personal", title: "Cook a meal for the family again" },
  { category: "personal", title: "Go back to work, even for a morning" },
  { category: "personal", title: "Drive myself to an appointment" },
  { category: "family", title: "Be at the wedding" },
  { category: "family", title: "A grandchild's birthday" },
  { category: "family", title: "Record the family stories" },
  { category: "wellbeing", title: "Thirty days of check-ins" },
  { category: "wellbeing", title: "One month without a hospital admission" },
  { category: "wellbeing", title: "Say the thing I have been avoiding saying" },
];

const EMPTY = {
  title: "",
  category: "personal" as MilestoneCategory,
  targetDate: "",
  why: "",
  howToMark: "",
};

export function MilestonesTool() {
  const [milestones, setMilestones] = useLocalState<Milestone[]>(KEYS.milestones, []);
  const [draft, setDraft] = useState(EMPTY);
  const [celebrating, setCelebrating] = useState<string | null>(null);
  const [reflection, setReflection] = useState("");

  function add() {
    if (!draft.title.trim()) return;
    setMilestones([
      {
        id: uid(),
        ...draft,
        title: draft.title.trim(),
        status: "planned",
        createdAt: new Date().toISOString(),
      },
      ...milestones,
    ]);
    setDraft(EMPTY);
  }

  function achieve(id: string) {
    setMilestones(
      milestones.map((m) =>
        m.id === id
          ? {
              ...m,
              status: "achieved",
              achievedDate: todayKey(),
              reflection: reflection.trim() || m.reflection,
            }
          : m,
      ),
    );
    setCelebrating(null);
    setReflection("");
  }

  function setStatus(id: string, status: Milestone["status"]) {
    setMilestones(
      milestones.map((m) =>
        m.id === id
          ? { ...m, status, achievedDate: status === "achieved" ? todayKey() : undefined }
          : m,
      ),
    );
  }

  const planned = milestones
    .filter((m) => m.status === "planned")
    .sort((a, b) => (a.targetDate || "9999") .localeCompare(b.targetDate || "9999"));
  const paused = milestones.filter((m) => m.status === "paused");
  const achieved = milestones
    .filter((m) => m.status === "achieved")
    .sort((a, b) => (b.achievedDate ?? "").localeCompare(a.achievedDate ?? ""));

  const today = todayKey();
  const soon = planned.filter(
    (m) => m.targetDate && m.targetDate >= today && m.targetDate <= addDays(today, 30),
  );

  return (
    <div className="space-y-8">
      {milestones.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Reached" value={achieved.length} />
          <Stat label="Ahead of you" value={planned.length} />
          <Stat label="In the next month" value={soon.length} />
          <Stat label="Paused" value={paused.length} hint="waiting for a better week" />
        </div>
      )}

      <section className="card space-y-3 p-4 sm:p-5">
        <div>
          <label className="label" htmlFor="m-title">
            The milestone
          </label>
          <input
            id="m-title"
            className="field"
            value={draft.title}
            placeholder="Something you want to reach, however small"
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="m-category">
              Kind of milestone
            </label>
            <select
              id="m-category"
              className="field"
              value={draft.category}
              onChange={(e) =>
                setDraft({ ...draft, category: e.target.value as MilestoneCategory })
              }
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {MILESTONE_CATEGORY_LABEL[c]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="m-date">
              Hoping for (optional)
            </label>
            <input
              id="m-date"
              type="date"
              className="field"
              value={draft.targetDate}
              onChange={(e) => setDraft({ ...draft, targetDate: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="m-why">
              Why it matters to you
            </label>
            <input
              id="m-why"
              className="field"
              value={draft.why}
              onChange={(e) => setDraft({ ...draft, why: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="m-mark">
              How you will mark it
            </label>
            <input
              id="m-mark"
              className="field"
              value={draft.howToMark}
              placeholder="e.g. ring the bell, a photo, tell my sister"
              onChange={(e) => setDraft({ ...draft, howToMark: e.target.value })}
            />
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={add}>
          Add milestone
        </button>

        {milestones.length === 0 && (
          <div>
            <p className="label mt-2">Or start from one of these</p>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTIONS.slice(0, 9).map((s) => (
                <button
                  key={s.title}
                  type="button"
                  className="rounded-full border border-line-strong px-3 py-1.5 text-sm text-ink-soft hover:bg-surface-2"
                  onClick={() => setDraft({ ...EMPTY, title: s.title, category: s.category })}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {milestones.length === 0 ? (
        <EmptyState
          title="Nothing marked out yet"
          body="Milestones are different from goals. A goal is something to do this fortnight; a milestone is a point you are moving towards, and a moment worth marking when you reach it."
        />
      ) : (
        <>
          <section className="space-y-3">
            <h2 className="text-lg">Ahead of you</h2>
            {planned.length === 0 ? (
              <Card>
                <p className="text-sm text-muted">
                  Nothing planned at the moment. That is allowed — add one when
                  you are ready.
                </p>
              </Card>
            ) : (
              <ul className="space-y-3">
                {planned.map((m) => (
                  <li key={m.id} className="card p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0">
                        <span className="chip">{MILESTONE_CATEGORY_LABEL[m.category]}</span>
                        <p className="mt-1.5 font-semibold">{m.title}</p>
                        {m.why && <p className="mt-1 text-sm text-muted">{m.why}</p>}
                        {m.howToMark && (
                          <p className="mt-1 text-sm text-muted">
                            How I&apos;ll mark it: {m.howToMark}
                          </p>
                        )}
                      </div>
                      {m.targetDate && (
                        <span className="text-xs text-muted">
                          {countdown(m.targetDate, today)}
                        </span>
                      )}
                    </div>

                    {celebrating === m.id ? (
                      <div className="mt-3 space-y-2">
                        <label className="label" htmlFor={`r-${m.id}`}>
                          Anything you want to remember about reaching it?
                        </label>
                        <textarea
                          id={`r-${m.id}`}
                          className="field"
                          rows={2}
                          value={reflection}
                          onChange={(e) => setReflection(e.target.value)}
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="btn btn-primary text-sm"
                            onClick={() => achieve(m.id)}
                          >
                            Mark it reached
                          </button>
                          <button
                            type="button"
                            className="btn btn-ghost text-sm"
                            onClick={() => setCelebrating(null)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="btn btn-soft text-sm"
                          onClick={() => {
                            setCelebrating(m.id);
                            setReflection("");
                          }}
                        >
                          I reached it
                        </button>
                        <button
                          type="button"
                          className="text-xs text-muted hover:text-ink"
                          onClick={() => setStatus(m.id, "paused")}
                        >
                          Pause
                        </button>
                        <button
                          type="button"
                          className="text-xs text-muted hover:text-danger"
                          onClick={() =>
                            setMilestones(milestones.filter((x) => x.id !== m.id))
                          }
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {achieved.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg">Reached</h2>
              <ol className="relative space-y-3 border-l border-line pl-5">
                {achieved.map((m) => (
                  <li key={m.id} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full bg-good"
                    />
                    <div className="card p-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <p className="font-semibold">{m.title}</p>
                        <span className="text-xs text-muted">{m.achievedDate}</span>
                      </div>
                      {m.reflection && (
                        <p className="mt-1.5 text-sm text-ink-soft">{m.reflection}</p>
                      )}
                      <button
                        type="button"
                        className="mt-2 text-xs text-muted hover:text-ink"
                        onClick={() => setStatus(m.id, "planned")}
                      >
                        Move back to planned
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {paused.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg">Paused</h2>
              <ul className="space-y-2">
                {paused.map((m) => (
                  <li key={m.id} className="card flex items-center gap-3 p-3 text-sm">
                    <span className="flex-1">{m.title}</span>
                    <button
                      type="button"
                      className="text-xs font-medium text-primary hover:underline"
                      onClick={() => setStatus(m.id, "planned")}
                    >
                      Restart
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}

      <Callout tone="info" title="If a milestone slips">
        Illness moves the dates. A milestone that has to be paused has not been
        failed — pause it, keep it, and bring it back when the week allows.
        Shrinking it is also allowed: a shorter walk, a phone call instead of a
        visit.
      </Callout>
    </div>
  );
}

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;
}

function countdown(target: string, today: string): string {
  if (target < today) return "date has passed";
  if (target === today) return "today";
  const [ty, tm, td] = target.split("-").map(Number);
  const [cy, cm, cd] = today.split("-").map(Number);
  const days = Math.round(
    (new Date(ty, tm - 1, td).getTime() - new Date(cy, cm - 1, cd).getTime()) / 86400000,
  );
  if (days === 1) return "tomorrow";
  if (days < 14) return `in ${days} days`;
  if (days < 60) return `in ${Math.round(days / 7)} weeks`;
  return `in ${Math.round(days / 30)} months`;
}
