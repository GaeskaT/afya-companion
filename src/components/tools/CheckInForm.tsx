"use client";

import Link from "next/link";
import { useState } from "react";
import { Scale } from "@/components/tools/Scale";
import { Callout } from "@/components/ui";
import { useLocalState, todayKey, dayLabel, lastNDays } from "@/lib/storage";
import { KEYS, MOOD_EMOJI, MOOD_LABELS, ENERGY_LABELS } from "@/lib/records";
import type { CheckIn } from "@/lib/records";

export function CheckInForm({ compact = false }: { compact?: boolean }) {
  const [checkIns, setCheckIns, ready] = useLocalState<CheckIn[]>(KEYS.checkIns, []);
  const today = todayKey();
  const existing = checkIns.find((c) => c.date === today);

  const [mood, setMood] = useState<number | null>(null);
  const [energy, setEnergy] = useState<number | null>(null);
  const [pain, setPain] = useState<number | null>(null);
  const [sleep, setSleep] = useState("");
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);

  const current = {
    mood: mood ?? existing?.mood ?? null,
    energy: energy ?? existing?.energy ?? null,
    pain: pain ?? existing?.pain ?? null,
  };

  function save() {
    if (current.mood === null) return;
    const entry: CheckIn = {
      date: today,
      mood: current.mood,
      energy: current.energy ?? 3,
      pain: current.pain ?? 0,
      sleepHours: sleep ? Number(sleep) : existing?.sleepHours,
      note: note || existing?.note,
      at: new Date().toISOString(),
    };
    setCheckIns([...checkIns.filter((c) => c.date !== today), entry]);
    setSaved(true);
  }

  const recent = lastNDays(compact ? 7 : 14).map((date) => ({
    date,
    entry: checkIns.find((c) => c.date === date),
  }));

  const lowStreak = countLowStreak(checkIns);

  return (
    <div className="space-y-5">
      <div className="card p-4 sm:p-5 space-y-4">
        <div>
          <p className="label">How is your mood today?</p>
          <Scale
            name="Mood"
            value={current.mood}
            onChange={(v) => {
              setMood(v);
              setSaved(false);
            }}
            labels={MOOD_LABELS}
            emoji={MOOD_EMOJI}
          />
        </div>

        {!compact && (
          <>
            <div>
              <p className="label">Energy</p>
              <Scale
                name="Energy"
                value={current.energy}
                onChange={(v) => {
                  setEnergy(v);
                  setSaved(false);
                }}
                labels={ENERGY_LABELS}
              />
            </div>
            <div>
              <p className="label">Pain right now (0 = none, 10 = worst)</p>
              <Scale
                name="Pain"
                value={current.pain}
                min={0}
                max={10}
                onChange={(v) => {
                  setPain(v);
                  setSaved(false);
                }}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="label" htmlFor="sleep">
                  Hours of sleep last night
                </label>
                <input
                  id="sleep"
                  type="number"
                  inputMode="decimal"
                  min={0}
                  max={24}
                  step={0.5}
                  className="field"
                  value={sleep}
                  onChange={(e) => setSleep(e.target.value)}
                  placeholder={existing?.sleepHours?.toString() ?? "e.g. 6"}
                />
              </div>
              <div>
                <label className="label" htmlFor="note">
                  One word or line for today
                </label>
                <input
                  id="note"
                  className="field"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={existing?.note ?? "e.g. tired but steadier"}
                />
              </div>
            </div>
          </>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={save}
            disabled={current.mood === null}
          >
            {existing ? "Update today" : "Save today"}
          </button>
          {saved && (
            <span className="text-sm font-medium text-good">Saved on this device</span>
          )}
          {compact && (
            <Link href="/tools/check-in" className="text-sm font-medium text-primary hover:underline">
              Full check-in →
            </Link>
          )}
        </div>
      </div>

      {ready && lowStreak >= 5 && (
        <Callout tone="warn" title="Five or more low days in a row">
          A run of low days is worth acting on. Consider taking the{" "}
          <Link href="/tools/screening/phq-9">depression questionnaire</Link>, or
          telling someone on your care team.
        </Callout>
      )}

      <div className="card p-4">
        <p className="label mb-3">Recent days</p>
        <div className="flex items-end gap-1.5 overflow-x-auto no-scrollbar">
          {recent.map(({ date, entry }) => (
            <div key={date} className="flex min-w-9 flex-1 flex-col items-center gap-1">
              <div className="flex h-24 w-full items-end rounded-md bg-surface-2">
                <div
                  className="w-full rounded-md bg-primary transition-all"
                  style={{ height: entry ? `${(entry.mood / 5) * 100}%` : "0%" }}
                  title={entry ? `${dayLabel(date)}: ${MOOD_LABELS[entry.mood - 1]}` : dayLabel(date)}
                />
              </div>
              <span className="text-[0.6rem] text-muted">{date.slice(8)}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">
          Mood over the last {compact ? 7 : 14} days. One low day means little; a
          run of them means something.
        </p>
      </div>
    </div>
  );
}

function countLowStreak(checkIns: CheckIn[]): number {
  const sorted = [...checkIns].sort((a, b) => (a.date < b.date ? 1 : -1));
  let streak = 0;
  for (const entry of sorted) {
    if (entry.mood <= 2) streak++;
    else break;
  }
  return streak;
}
