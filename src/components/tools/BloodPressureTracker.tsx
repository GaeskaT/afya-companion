"use client";

import Link from "next/link";
import { useState } from "react";
import { LineChart } from "@/components/charts/LineChart";
import { Bullets, Callout, Card, EmptyState, Stat } from "@/components/ui";
import { KEYS, type BPReading } from "@/lib/records";
import { todayKey, uid, useLocalState } from "@/lib/storage";
import { useNow } from "@/lib/now";
import { BP_TECHNIQUE, bpStats, classifyBP, type BPContext } from "@/lib/vitals";

const RANGES = [7, 14, 30, 90];

const CONTEXTS: { key: BPContext; label: string }[] = [
  { key: "morning", label: "Morning" },
  { key: "evening", label: "Evening" },
  { key: "other", label: "Other time" },
];

export function BloodPressureTracker() {
  const [readings, setReadings] = useLocalState<BPReading[]>(KEYS.bloodPressure, []);
  const [systolic, setSystolic] = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [pulse, setPulse] = useState("");
  const [context, setContext] = useState<BPContext>("morning");
  const [arm, setArm] = useState<"left" | "right">("left");
  const [note, setNote] = useState("");
  const [days, setDays] = useState(14);
  const [lastBand, setLastBand] = useState<ReturnType<typeof classifyBP> | null>(null);

  const now = useNow();
  const cutoff = now - days * 86400000;
  const inWindow = readings
    .filter((r) => new Date(r.at).getTime() >= cutoff)
    .sort((a, b) => (a.at < b.at ? -1 : 1));

  const weekCutoff = now - 7 * 86400000;
  const week = readings.filter((r) => new Date(r.at).getTime() >= weekCutoff);
  const stats = bpStats(week);
  const windowStats = bpStats(inWindow);

  function add() {
    const sys = Number(systolic);
    const dia = Number(diastolic);
    if (!sys || !dia || sys < 50 || sys > 300 || dia < 30 || dia > 200) return;
    if (dia >= sys) return;

    const reading: BPReading = {
      id: uid(),
      systolic: sys,
      diastolic: dia,
      pulse: pulse ? Number(pulse) : undefined,
      context,
      arm,
      at: new Date().toISOString(),
      date: todayKey(),
      note: note.trim() || undefined,
    };
    setReadings([reading, ...readings]);
    setLastBand(classifyBP(sys, dia));
    setSystolic("");
    setDiastolic("");
    setPulse("");
    setNote("");
  }

  const series = [
    {
      key: "systolic",
      label: "Systolic",
      colour: "var(--primary)",
      points: inWindow.map((r) => ({
        x: new Date(r.at).getTime(),
        y: r.systolic,
        label: `${r.systolic}/${r.diastolic} — ${r.context}`,
      })),
    },
    {
      key: "diastolic",
      label: "Diastolic",
      colour: "var(--calm)",
      points: inWindow.map((r) => ({
        x: new Date(r.at).getTime(),
        y: r.diastolic,
        label: `${r.systolic}/${r.diastolic} — ${r.context}`,
      })),
    },
  ];

  return (
    <div className="space-y-8">
      <section className="card space-y-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label className="label" htmlFor="bp-sys">
              Systolic (top)
            </label>
            <input
              id="bp-sys"
              type="number"
              inputMode="numeric"
              className="field w-28"
              value={systolic}
              onChange={(e) => setSystolic(e.target.value)}
              placeholder="128"
            />
          </div>
          <div>
            <label className="label" htmlFor="bp-dia">
              Diastolic (bottom)
            </label>
            <input
              id="bp-dia"
              type="number"
              inputMode="numeric"
              className="field w-28"
              value={diastolic}
              onChange={(e) => setDiastolic(e.target.value)}
              placeholder="82"
            />
          </div>
          <div>
            <label className="label" htmlFor="bp-pulse">
              Pulse (optional)
            </label>
            <input
              id="bp-pulse"
              type="number"
              inputMode="numeric"
              className="field w-28"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
              placeholder="72"
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="label" htmlFor="bp-context">
              When
            </label>
            <select
              id="bp-context"
              className="field"
              value={context}
              onChange={(e) => setContext(e.target.value as BPContext)}
            >
              {CONTEXTS.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="bp-arm">
              Arm
            </label>
            <select
              id="bp-arm"
              className="field"
              value={arm}
              onChange={(e) => setArm(e.target.value as "left" | "right")}
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div>
            <label className="label" htmlFor="bp-note">
              Note (optional)
            </label>
            <input
              id="bp-note"
              className="field"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. before medication, stressful day"
            />
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={add}>
          Save reading
        </button>

        {lastBand && (
          <Callout tone={lastBand.tone === "good" ? "good" : lastBand.tone}>
            <strong>{lastBand.label}.</strong>{" "}
            {lastBand.action ??
              "One reading on its own says very little — it is the average over a week that matters."}
          </Callout>
        )}
      </section>

      {readings.length === 0 ? (
        <EmptyState
          title="No readings yet"
          body="Add a reading above. Two readings a minute apart, morning and evening, for seven days is the pattern your clinician will want — the app works out the average."
        />
      ) : (
        <>
          <section>
            <h2 className="mb-3 text-lg">Last 7 days</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat
                label="7-day average"
                value={
                  stats.avgSystolic ? `${stats.avgSystolic}/${stats.avgDiastolic}` : "—"
                }
                unit={stats.avgSystolic ? "mmHg" : undefined}
                hint={stats.band?.label}
              />
              <Stat label="Readings" value={stats.count} />
              <Stat label="Morning" value={stats.morningAvg ?? "—"} />
              <Stat label="Evening" value={stats.eveningAvg ?? "—"} />
            </div>

            {!stats.protocolMet && stats.count > 0 && (
              <Callout tone="info" title="Not enough yet for a proper average">
                The standard home protocol is two readings a minute apart, twice
                a day, for seven days — then the first day is discarded. Keep
                going and the average here becomes something your clinician can
                act on.
              </Callout>
            )}
            {stats.band?.action && (
              <Callout tone={stats.band.tone === "good" ? "good" : stats.band.tone} title={`Average: ${stats.band.label}`}>
                {stats.band.action}
              </Callout>
            )}
            {stats.avgPulse && (
              <p className="mt-3 text-sm text-muted">
                Average pulse {stats.avgPulse} bpm. A resting pulse persistently
                above 100 or below 50, or an irregular one, is worth mentioning
                to your team.
              </p>
            )}
          </section>

          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg">Your chart</h2>
              <div className="flex gap-1.5">
                {RANGES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setDays(r)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      days === r ? "bg-primary text-white" : "bg-surface-2 text-muted"
                    }`}
                  >
                    {r} days
                  </button>
                ))}
              </div>
            </div>

            {inWindow.length ? (
              <Card>
                <LineChart
                  series={series}
                  yMin={40}
                  yMax={200}
                  band={{ from: 60, to: 135, label: "home target zone" }}
                  markers={[
                    { y: 180, label: "seek help same day", colour: "var(--danger)" },
                  ]}
                  yLabel="mmHg"
                  height={220}
                />
                <p className="mt-2 text-xs text-muted">
                  {windowStats.count} readings over {days} days · average{" "}
                  {windowStats.avgSystolic}/{windowStats.avgDiastolic} mmHg
                </p>
              </Card>
            ) : (
              <Card>
                <p className="text-sm text-muted">
                  Nothing recorded in the last {days} days.
                </p>
              </Card>
            )}
          </section>

          <section className="space-y-3">
            <h2 className="text-lg">Recent readings</h2>
            <ul className="space-y-2">
              {readings.slice(0, 20).map((r) => {
                const band = classifyBP(r.systolic, r.diastolic);
                const tone = {
                  good: "text-good",
                  warn: "text-warn",
                  danger: "text-danger",
                  info: "text-muted",
                }[band.tone];
                return (
                  <li key={r.id} className="card flex flex-wrap items-center gap-3 p-3 text-sm">
                    <span className="w-28 shrink-0 text-xs text-muted">
                      {new Date(r.at).toLocaleString(undefined, {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className="font-semibold">
                      {r.systolic}/{r.diastolic}
                    </span>
                    <span className={`text-xs font-medium ${tone}`}>{band.label}</span>
                    {r.pulse && <span className="text-xs text-muted">{r.pulse} bpm</span>}
                    <span className="text-xs text-muted">{r.context}</span>
                    {r.note && <span className="text-xs text-muted">· {r.note}</span>}
                    <button
                      type="button"
                      className="ml-auto text-xs text-muted hover:text-danger"
                      onClick={() => setReadings(readings.filter((x) => x.id !== r.id))}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}

      <section className="grid gap-4 sm:grid-cols-2">
        <Card>
          <p className="font-semibold">Measuring properly</p>
          <div className="mt-3">
            <Bullets items={BP_TECHNIQUE} />
          </div>
        </Card>
        <Card>
          <p className="font-semibold text-danger">Get help the same day if</p>
          <div className="mt-3">
            <Bullets
              items={[
                "A repeated reading is 180/120 or above.",
                "You have chest pain, breathlessness, or pain spreading to the arm or jaw — call emergency services.",
                "Sudden weakness or numbness on one side, difficulty speaking, or a drooping face — call emergency services.",
                "A sudden severe headache unlike any you have had, or new vision changes.",
                "You feel faint or keep falling — low readings matter too.",
              ]}
            />
          </div>
        </Card>
      </section>

      <Callout tone="info">
        A log, not a diagnosis. Never change a dose on the strength of these
        numbers — take the chart to your clinician instead. Diet moves blood
        pressure more than most people expect: see{" "}
        <Link href="/nutrition/conditions/hypertension">
          nutrition for high blood pressure
        </Link>
        .
      </Callout>
    </div>
  );
}
