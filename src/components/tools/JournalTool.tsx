"use client";

import { useState } from "react";
import { Scale } from "@/components/tools/Scale";
import { Callout, EmptyState } from "@/components/ui";
import { relativeTime, todayKey, uid, useLocalState } from "@/lib/storage";
import { KEYS, MOOD_EMOJI, MOOD_LABELS, type JournalEntry } from "@/lib/records";

type Kind = JournalEntry["kind"];

const TABS: { key: Kind; label: string; hint: string }[] = [
  {
    key: "pain",
    label: "Pain & distress",
    hint: "Track the sensation and the feeling around it. Bring this to your appointment.",
  },
  {
    key: "thought",
    label: "Thought record",
    hint: "The seven-column method from cognitive restructuring, in short form.",
  },
  {
    key: "free",
    label: "Free writing",
    hint: "Anything you cannot say out loud yet.",
  },
];

export function JournalTool() {
  const [entries, setEntries] = useLocalState<JournalEntry[]>(KEYS.journal, []);
  const [kind, setKind] = useState<Kind>("pain");
  const [draft, setDraft] = useState<Partial<JournalEntry>>({});
  const [saved, setSaved] = useState(false);

  function save() {
    const entry: JournalEntry = {
      id: uid(),
      at: new Date().toISOString(),
      kind,
      ...draft,
    };
    setEntries([entry, ...entries]);
    setDraft({});
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  function remove(id: string) {
    setEntries(entries.filter((e) => e.id !== id));
  }

  const canSave =
    kind === "pain"
      ? draft.painScore !== undefined
      : kind === "thought"
        ? Boolean(draft.thought)
        : Boolean(draft.body);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => {
              setKind(tab.key);
              setDraft({});
            }}
            className={`btn text-sm ${kind === tab.key ? "btn-primary" : "btn-ghost"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted">{TABS.find((t) => t.key === kind)?.hint}</p>

      <div className="card space-y-4 p-4 sm:p-5">
        {kind === "pain" && (
          <>
            <div>
              <p className="label">Pain right now (0–10)</p>
              <Scale
                name="Pain now"
                min={0}
                max={10}
                value={draft.painScore ?? null}
                onChange={(v) => setDraft({ ...draft, painScore: v })}
              />
            </div>
            <div>
              <p className="label">Worst it has been today (0–10)</p>
              <Scale
                name="Worst pain"
                min={0}
                max={10}
                value={draft.painWorst ?? null}
                onChange={(v) => setDraft({ ...draft, painWorst: v })}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="loc">
                  Where, and what it feels like
                </label>
                <input
                  id="loc"
                  className="field"
                  value={draft.location ?? ""}
                  onChange={(e) => setDraft({ ...draft, location: e.target.value })}
                  placeholder="e.g. lower back, burning"
                />
              </div>
              <div>
                <label className="label" htmlFor="med">
                  Medication taken and how much it helped
                </label>
                <input
                  id="med"
                  className="field"
                  value={draft.medication ?? ""}
                  onChange={(e) => setDraft({ ...draft, medication: e.target.value })}
                  placeholder="e.g. 2 paracetamol at 14:00, took the edge off"
                />
              </div>
            </div>
            <div>
              <p className="label">Mood alongside the pain</p>
              <Scale
                name="Mood"
                value={draft.mood ?? null}
                onChange={(v) => setDraft({ ...draft, mood: v })}
                labels={MOOD_LABELS}
                emoji={MOOD_EMOJI}
              />
            </div>
            <div>
              <label className="label" htmlFor="helped">
                What made it easier, even slightly
              </label>
              <input
                id="helped"
                className="field"
                value={draft.helped ?? ""}
                onChange={(e) => setDraft({ ...draft, helped: e.target.value })}
                placeholder="e.g. heat pad, lying flat, distraction"
              />
            </div>
          </>
        )}

        {kind === "thought" && (
          <>
            <Field
              label="The situation — what happened, factually"
              value={draft.situation ?? ""}
              onChange={(v) => setDraft({ ...draft, situation: v })}
              placeholder="e.g. the clinic rang to bring my scan forward"
            />
            <Field
              label="The thought — the exact sentence in your head"
              value={draft.thought ?? ""}
              onChange={(v) => setDraft({ ...draft, thought: v })}
              placeholder="e.g. they've found something and they're not telling me"
            />
            <div>
              <p className="label">How strong is the feeling?</p>
              <Scale
                name="Feeling"
                value={draft.mood ?? null}
                onChange={(v) => setDraft({ ...draft, mood: v })}
              />
            </div>
            <Field
              label="Evidence for the thought"
              value={draft.evidenceFor ?? ""}
              onChange={(v) => setDraft({ ...draft, evidenceFor: v })}
              textarea
            />
            <Field
              label="Evidence against it — including what you'd tell a friend"
              value={draft.evidenceAgainst ?? ""}
              onChange={(v) => setDraft({ ...draft, evidenceAgainst: v })}
              textarea
            />
            <Field
              label="A fairer version that fits all the evidence"
              value={draft.balanced ?? ""}
              onChange={(v) => setDraft({ ...draft, balanced: v })}
              textarea
            />
          </>
        )}

        {kind === "free" && (
          <Field
            label="Write whatever is there"
            value={draft.body ?? ""}
            onChange={(v) => setDraft({ ...draft, body: v })}
            placeholder="Nobody else will read this. It never leaves your device."
            textarea
            rows={8}
          />
        )}

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={save}
            disabled={!canSave}
          >
            Save entry
          </button>
          {saved && <span className="text-sm font-medium text-good">Saved</span>}
        </div>
      </div>

      {kind === "pain" && (
        <Callout tone="info" title="Taking this to your appointment">
          Bring the last two weeks. Highlight the three worst episodes and say
          plainly what you want: better background control, something for
          breakthrough pain, or help with the fear that comes with it.
        </Callout>
      )}

      <section className="space-y-3">
        <h2 className="text-lg">Your entries</h2>
        {entries.length === 0 ? (
          <EmptyState
            title="Nothing written yet"
            body="Entries appear here, newest first, and stay on this device only."
          />
        ) : (
          <ul className="space-y-3">
            {entries.map((entry) => (
              <li key={entry.id} className="card p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="chip">
                      {TABS.find((t) => t.key === entry.kind)?.label}
                    </span>
                    <p className="mt-1 text-xs text-muted">
                      {relativeTime(entry.at)} ·{" "}
                      {new Date(entry.at).toLocaleString()}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-medium text-muted hover:text-danger"
                    onClick={() => remove(entry.id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="mt-3 space-y-1.5 text-sm text-ink-soft">
                  {entry.painScore !== undefined && (
                    <p>
                      <strong>Pain:</strong> {entry.painScore}/10
                      {entry.painWorst !== undefined && ` (worst ${entry.painWorst}/10)`}
                      {entry.location && ` — ${entry.location}`}
                    </p>
                  )}
                  {entry.medication && (
                    <p>
                      <strong>Medication:</strong> {entry.medication}
                    </p>
                  )}
                  {entry.helped && (
                    <p>
                      <strong>Helped:</strong> {entry.helped}
                    </p>
                  )}
                  {entry.situation && (
                    <p>
                      <strong>Situation:</strong> {entry.situation}
                    </p>
                  )}
                  {entry.thought && (
                    <p>
                      <strong>Thought:</strong> {entry.thought}
                    </p>
                  )}
                  {entry.balanced && (
                    <p>
                      <strong>Fairer version:</strong> {entry.balanced}
                    </p>
                  )}
                  {entry.body && <p className="whitespace-pre-wrap">{entry.body}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  textarea,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const id = label.replace(/\W+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          className="field"
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          id={id}
          className="field"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

export function GratitudeTool() {
  const [entries, setEntries] = useLocalState<
    { id: string; date: string; items: string[]; reflection?: string }[]
  >(KEYS.gratitude, []);
  const [items, setItems] = useState(["", "", ""]);
  const [reflection, setReflection] = useState("");
  const [saved, setSaved] = useState(false);

  function save() {
    const filled = items.filter((i) => i.trim());
    if (!filled.length && !reflection.trim()) return;
    setEntries([
      { id: uid(), date: todayKey(), items: filled, reflection: reflection.trim() },
      ...entries,
    ]);
    setItems(["", "", ""]);
    setReflection("");
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="space-y-6">
      <div className="card space-y-4 p-4 sm:p-5">
        <p className="label">Three things, however small</p>
        {items.map((item, i) => (
          <input
            key={i}
            className="field"
            value={item}
            placeholder={
              ["Someone who made today lighter", "A small comfort", "Something outside the window"][i]
            }
            onChange={(e) =>
              setItems((prev) => prev.map((v, j) => (j === i ? e.target.value : v)))
            }
          />
        ))}
        <div>
          <label className="label" htmlFor="reflection">
            Anything else about today
          </label>
          <textarea
            id="reflection"
            className="field"
            rows={3}
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="btn btn-primary" onClick={save}>
            Save
          </button>
          {saved && <span className="text-sm font-medium text-good">Saved</span>}
        </div>
      </div>

      {entries.length > 0 && (
        <ul className="space-y-3">
          {entries.slice(0, 20).map((entry) => (
            <li key={entry.id} className="card p-4">
              <p className="text-xs text-muted">{entry.date}</p>
              <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                {entry.items.map((item, i) => (
                  <li key={i}>· {item}</li>
                ))}
              </ul>
              {entry.reflection && (
                <p className="mt-2 whitespace-pre-wrap text-sm text-ink-soft">
                  {entry.reflection}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
