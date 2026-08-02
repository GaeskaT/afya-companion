"use client";

import Link from "next/link";
import { useState } from "react";
import { LineChart } from "@/components/charts/LineChart";
import { Bullets, Callout, Card, EmptyState, Stat } from "@/components/ui";
import { KEYS, type GlucoseReading } from "@/lib/records";
import { todayKey, uid, useLocalState } from "@/lib/storage";
import { useNow } from "@/lib/now";
import {
  classifyGlucose,
  DEFAULT_GLUCOSE_TARGETS,
  formatGlucose,
  GLUCOSE_CONTEXTS,
  GLUCOSE_TECHNIQUE,
  glucoseStats,
  toMmol,
  fromMmol,
  type GlucoseContext,
  type GlucoseTargets,
  type GlucoseUnit,
} from "@/lib/vitals";

const RANGES = [7, 14, 30, 90];

export function GlucoseTracker() {
  const [readings, setReadings] = useLocalState<GlucoseReading[]>(KEYS.glucose, []);
  const [unit, setUnit] = useLocalState<GlucoseUnit>(KEYS.glucoseUnit, "mmol/L");
  const [targets, setTargets] = useLocalState<GlucoseTargets>(
    KEYS.glucoseTargets,
    DEFAULT_GLUCOSE_TARGETS,
  );

  const [value, setValue] = useState("");
  const [context, setContext] = useState<GlucoseContext>("fasting");
  const [note, setNote] = useState("");
  const [days, setDays] = useState(14);
  const [showTargets, setShowTargets] = useState(false);
  const now = useNow();
  const [lastBand, setLastBand] = useState<ReturnType<typeof classifyGlucose> | null>(null);

  const cutoff = now - days * 86400000;
  const inWindow = readings
    .filter((r) => new Date(r.at).getTime() >= cutoff)
    .sort((a, b) => (a.at < b.at ? -1 : 1));

  const stats = glucoseStats(inWindow, targets, days);

  function add() {
    const entered = Number(value);
    if (!entered || entered <= 0) return;
    const mmol = toMmol(entered, unit);
    if (mmol > 60) return;

    const reading: GlucoseReading = {
      id: uid(),
      mmol,
      context,
      at: new Date().toISOString(),
      date: todayKey(),
      note: note.trim() || undefined,
    };
    setReadings([reading, ...readings]);
    setLastBand(classifyGlucose(mmol, context, targets));
    setValue("");
    setNote("");
  }

  const chartSeries = [
    {
      key: "glucose",
      label: `Glucose (${unit})`,
      colour: "var(--primary)",
      points: inWindow.map((r) => ({
        x: new Date(r.at).getTime(),
        y: Number(fromMmol(r.mmol, unit).toFixed(unit === "mmol/L" ? 1 : 0)),
        label: `${formatGlucose(r.mmol, unit)} — ${
          GLUCOSE_CONTEXTS.find((c) => c.key === r.context)?.label
        }`,
      })),
    },
  ];

  const yLow = unit === "mmol/L" ? 2 : 40;
  const yHigh = unit === "mmol/L" ? 22 : 400;

  return (
    <div className="space-y-8">
      <section className="card space-y-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label className="label" htmlFor="glucose-value">
              Reading
            </label>
            <input
              id="glucose-value"
              type="number"
              inputMode="decimal"
              step={unit === "mmol/L" ? 0.1 : 1}
              className="field w-32"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={unit === "mmol/L" ? "6.4" : "115"}
            />
          </div>
          <div>
            <label className="label" htmlFor="glucose-unit">
              Unit
            </label>
            <select
              id="glucose-unit"
              className="field w-32"
              value={unit}
              onChange={(e) => setUnit(e.target.value as GlucoseUnit)}
            >
              <option value="mmol/L">mmol/L</option>
              <option value="mg/dL">mg/dL</option>
            </select>
          </div>
          <div className="min-w-48 flex-1">
            <label className="label" htmlFor="glucose-context">
              When
            </label>
            <select
              id="glucose-context"
              className="field"
              value={context}
              onChange={(e) => setContext(e.target.value as GlucoseContext)}
            >
              {GLUCOSE_CONTEXTS.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="label" htmlFor="glucose-note">
            Anything worth remembering (optional)
          </label>
          <input
            id="glucose-note"
            className="field"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. steroids today, missed lunch, unwell, long walk"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn btn-primary" onClick={add}>
            Save reading
          </button>
          <button
            type="button"
            className="text-sm font-medium text-primary hover:underline"
            onClick={() => setShowTargets((v) => !v)}
          >
            {showTargets ? "Hide targets" : "Adjust my targets"}
          </button>
        </div>

        {showTargets && (
          <div className="rounded-xl bg-surface-2 p-4">
            <p className="text-sm text-muted">
              Targets are individual. Yours may be looser — in frailty, in
              advanced illness, or where hypos are dangerous. Use the numbers
              your diabetes team gave you, in mmol/L.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {(
                [
                  ["preLow", "Lower limit"],
                  ["preHigh", "Upper, before meals"],
                  ["postHigh", "Upper, 2h after meals"],
                ] as const
              ).map(([key, label]) => (
                <div key={key}>
                  <label className="label" htmlFor={`t-${key}`}>
                    {label}
                  </label>
                  <input
                    id={`t-${key}`}
                    type="number"
                    step={0.1}
                    className="field"
                    value={targets[key]}
                    onChange={(e) =>
                      setTargets({ ...targets, [key]: Number(e.target.value) })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {lastBand?.action && (
          <Callout tone={lastBand.tone === "good" ? "good" : lastBand.tone}>
            <strong>{lastBand.label}.</strong> {lastBand.action}
          </Callout>
        )}
      </section>

      {readings.length === 0 ? (
        <EmptyState
          title="No readings yet"
          body="Add a reading above. The chart, time in range and averages appear once there is something to plot — and none of it leaves this device."
        />
      ) : (
        <>
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
                  series={chartSeries}
                  yMin={yLow}
                  yMax={yHigh}
                  band={{
                    from: Number(fromMmol(targets.preLow, unit).toFixed(1)),
                    to: Number(fromMmol(targets.postHigh, unit).toFixed(1)),
                    label: "target range",
                  }}
                  markers={[
                    {
                      y: Number(fromMmol(targets.preLow, unit).toFixed(1)),
                      label: "hypo threshold",
                      colour: "var(--danger)",
                    },
                  ]}
                  yLabel={unit}
                />
              </Card>
            ) : (
              <Card>
                <p className="text-sm text-muted">
                  Nothing recorded in the last {days} days.
                </p>
              </Card>
            )}
          </section>

          <section>
            <h2 className="mb-3 text-lg">Last {days} days</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="Readings" value={stats.count} />
              <Stat
                label="Average"
                value={stats.meanMmol ? formatGlucose(stats.meanMmol, unit).split(" ")[0] : "—"}
                unit={unit}
              />
              <Stat label="In range" value={`${stats.inRange}%`} hint={`${stats.above}% above · ${stats.below}% below`} />
              <Stat
                label="Low readings"
                value={stats.hypoCount}
                hint={stats.hypoCount ? "see the hypo guidance" : "none"}
              />
            </div>

            {stats.gmi !== null && (
              <p className="mt-3 text-sm text-muted">
                Estimated glucose management indicator: <strong>{stats.gmi}%</strong>.
                This is a calculation from your average, not a laboratory HbA1c —
                fingerprick readings are not evenly spread through the day, so
                treat it as a rough guide only.
              </p>
            )}

            {stats.hypoCount >= 3 && (
              <Callout tone="warn" title="Repeated low readings">
                Three or more hypos in this period is worth a conversation with
                your diabetes team — it usually means a dose or timing needs
                reviewing. Do not adjust insulin or tablets yourself.
              </Callout>
            )}
            {stats.count >= 10 && stats.inRange < 50 && (
              <Callout tone="warn" title="Less than half your readings are in range">
                Take this chart to your next appointment. Patterns matter far
                more than single numbers, and a chart is far more useful than
                trying to remember.
              </Callout>
            )}
          </section>

          <section className="space-y-3">
            <h2 className="text-lg">Recent readings</h2>
            <ul className="space-y-2">
              {readings.slice(0, 20).map((r) => {
                const band = classifyGlucose(r.mmol, r.context, targets);
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
                    <span className="font-semibold">{formatGlucose(r.mmol, unit)}</span>
                    <span className={`text-xs font-medium ${tone}`}>{band.label}</span>
                    <span className="text-xs text-muted">
                      {GLUCOSE_CONTEXTS.find((c) => c.key === r.context)?.label}
                    </span>
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
          <p className="font-semibold">Getting an accurate reading</p>
          <div className="mt-3">
            <Bullets items={GLUCOSE_TECHNIQUE} />
          </div>
        </Card>
        <Card>
          <p className="font-semibold text-danger">Treating a hypo</p>
          <div className="mt-3">
            <Bullets
              items={[
                "15–20 g of fast-acting carbohydrate: 4–5 glucose tablets, 150 ml fruit juice or ordinary cola, or 3–4 teaspoons of sugar in water.",
                "Wait 15 minutes and retest. Repeat if still below 4 mmol/L (72 mg/dL).",
                "Once back in range, eat something starchy — a sandwich, fruit, or your next meal if it is due.",
                "Do not drive until you are in range and have waited 45 minutes.",
                "If someone is drowsy, confused, fitting or unconscious, do not put anything in their mouth — this is an emergency, call for help.",
              ]}
            />
          </div>
        </Card>
      </section>

      <Callout tone="info">
        This is a log, not a diagnosis, and it will never tell you to change a
        dose. Bring it to your appointments — and see{" "}
        <Link href="/nutrition/conditions/diabetes">diabetes nutrition</Link> for
        how food, timing and portions move these numbers.
      </Callout>
    </div>
  );
}
