"use client";

import Link from "next/link";
import { EmptyState, Stat } from "@/components/ui";
import { lastNDays, useLocalState } from "@/lib/storage";
import { useNow } from "@/lib/now";
import {
  KEYS,
  MOOD_LABELS,
  type BPReading,
  type CheckIn,
  type FluidEntry,
  type FoodEntry,
  type GlucoseReading,
  type Milestone,
  type ScreeningResult,
  type WeightEntry,
} from "@/lib/records";
import { bmi, bmiBand, type NutritionProfile } from "@/lib/nutrition";
import {
  bpStats,
  formatGlucose,
  glucoseStats,
  DEFAULT_GLUCOSE_TARGETS,
  type GlucoseTargets,
  type GlucoseUnit,
} from "@/lib/vitals";

export function Dashboard() {
  const [checkIns] = useLocalState<CheckIn[]>(KEYS.checkIns, []);
  const [weights] = useLocalState<WeightEntry[]>(KEYS.weights, []);
  const [fluid] = useLocalState<FluidEntry[]>(KEYS.fluid, []);
  const [food] = useLocalState<FoodEntry[]>(KEYS.foodDiary, []);
  const [results] = useLocalState<ScreeningResult[]>(KEYS.screening, []);
  const [profile] = useLocalState<NutritionProfile | null>(KEYS.nutritionProfile, null);
  const [glucose] = useLocalState<GlucoseReading[]>(KEYS.glucose, []);
  const [unit] = useLocalState<GlucoseUnit>(KEYS.glucoseUnit, "mmol/L");
  const [targets] = useLocalState<GlucoseTargets>(KEYS.glucoseTargets, DEFAULT_GLUCOSE_TARGETS);
  const [bp] = useLocalState<BPReading[]>(KEYS.bloodPressure, []);
  const [milestones] = useLocalState<Milestone[]>(KEYS.milestones, []);

  const now = useNow();
  const fortnightAgo = now - 14 * 86400000;
  const recentGlucose = glucose.filter((g) => new Date(g.at).getTime() >= fortnightAgo);
  const gStats = glucoseStats(recentGlucose, targets, 14);
  const weekAgo = now - 7 * 86400000;
  const bpWeek = bp.filter((r) => new Date(r.at).getTime() >= weekAgo);
  const bStats = bpStats(bpWeek);
  const milestonesReached = milestones.filter((m) => m.status === "achieved").length;

  const days = lastNDays(30);
  const monthCheckIns = days.map((date) => checkIns.find((c) => c.date === date));
  const recorded = monthCheckIns.filter(Boolean) as CheckIn[];

  if (
    checkIns.length === 0 &&
    weights.length === 0 &&
    fluid.length === 0 &&
    results.length === 0 &&
    glucose.length === 0 &&
    bp.length === 0 &&
    milestones.length === 0
  ) {
    return (
      <EmptyState
        title="Nothing to show yet"
        body="The dashboard fills in as you use the check-in, the trackers and the questionnaires. Everything stays on this device."
        action={{ href: "/tools/check-in", label: "Start with a check-in" }}
      />
    );
  }

  const avgMood = recorded.length
    ? (recorded.reduce((s, c) => s + c.mood, 0) / recorded.length).toFixed(1)
    : "—";
  const avgPain = recorded.length
    ? (recorded.reduce((s, c) => s + c.pain, 0) / recorded.length).toFixed(1)
    : "—";
  const avgSleep = recorded.filter((c) => c.sleepHours).length
    ? (
        recorded.filter((c) => c.sleepHours).reduce((s, c) => s + (c.sleepHours ?? 0), 0) /
        recorded.filter((c) => c.sleepHours).length
      ).toFixed(1)
    : "—";

  const latestWeight = [...weights].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
  const firstWeight = [...weights].sort((a, b) => (a.date > b.date ? 1 : -1))[0];
  const weightChange =
    latestWeight && firstWeight && latestWeight.date !== firstWeight.date
      ? Math.round((latestWeight.kg - firstWeight.kg) * 10) / 10
      : null;
  const currentBmi =
    latestWeight && profile?.heightCm ? bmi(latestWeight.kg, profile.heightCm) : 0;

  const proteinDays = lastNDays(7).map((date) => {
    const entries = food.filter((f) => f.date === date);
    return { date, meals: entries.length, protein: entries.filter((f) => f.protein).length };
  });

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-3 text-lg">Last 30 days</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Average mood" value={avgMood} hint="out of 5" />
          <Stat label="Average pain" value={avgPain} hint="out of 10" />
          <Stat label="Average sleep" value={avgSleep} unit="h" />
          <Stat
            label="Days recorded"
            value={recorded.length}
            hint={`of ${days.length}`}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg">Mood and pain together</h2>
        <div className="card p-4">
          <div className="flex items-end gap-[3px]">
            {monthCheckIns.map((entry, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
                <div className="flex h-28 w-full flex-col justify-end gap-[2px]">
                  <div
                    className="w-full rounded-sm bg-primary"
                    style={{ height: entry ? `${(entry.mood / 5) * 60}%` : "0%" }}
                    title={entry ? `Mood: ${MOOD_LABELS[entry.mood - 1]}` : ""}
                  />
                  <div
                    className="w-full rounded-sm bg-accent"
                    style={{ height: entry ? `${(entry.pain / 10) * 40}%` : "0%" }}
                    title={entry ? `Pain: ${entry.pain}/10` : ""}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-4 rounded-sm bg-primary" /> Mood
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-4 rounded-sm bg-accent" /> Pain
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            Look for the pattern rather than the day — mood and pain usually move
            together, and that is useful information for your care team.
          </p>
        </div>
      </section>

      {weights.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg">Weight and BMI</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Latest weight" value={latestWeight.kg} unit="kg" />
            <Stat
              label="Change since first entry"
              value={weightChange === null ? "—" : `${weightChange > 0 ? "+" : ""}${weightChange}`}
              unit={weightChange === null ? undefined : "kg"}
            />
            <Stat
              label="BMI"
              value={currentBmi || "—"}
              hint={currentBmi ? bmiBand(currentBmi).label : "Add height in the assessment"}
            />
            <Stat label="Entries" value={weights.length} />
          </div>
        </section>
      )}

      {food.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg">Eating pattern, last 7 days</h2>
          <div className="card p-4">
            <ul className="space-y-2">
              {proteinDays.map((day) => (
                <li key={day.date} className="flex items-center gap-3 text-sm">
                  <span className="w-20 shrink-0 text-xs text-muted">
                    {day.date.slice(5)}
                  </span>
                  <span className="h-2 flex-1 rounded-full bg-surface-2">
                    <span
                      className="block h-2 rounded-full bg-calm"
                      style={{ width: `${Math.min(100, (day.meals / 5) * 100)}%` }}
                    />
                  </span>
                  <span className="w-32 shrink-0 text-right text-xs text-muted">
                    {day.meals} meals · {day.protein} with protein
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {(recentGlucose.length > 0 || bpWeek.length > 0 || milestones.length > 0) && (
        <section>
          <h2 className="mb-3 text-lg">Condition monitoring</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {recentGlucose.length > 0 && (
              <>
                <Stat
                  label="Average glucose (14 days)"
                  value={
                    gStats.meanMmol ? formatGlucose(gStats.meanMmol, unit).split(" ")[0] : "—"
                  }
                  unit={unit}
                  hint={`${gStats.count} readings`}
                />
                <Stat
                  label="Time in range"
                  value={`${gStats.inRange}%`}
                  hint={gStats.hypoCount ? `${gStats.hypoCount} low` : "no lows"}
                />
              </>
            )}
            {bpWeek.length > 0 && (
              <Stat
                label="Blood pressure (7-day)"
                value={`${bStats.avgSystolic}/${bStats.avgDiastolic}`}
                unit="mmHg"
                hint={bStats.band?.label}
              />
            )}
            {milestones.length > 0 && (
              <Stat
                label="Milestones reached"
                value={milestonesReached}
                hint={`${milestones.length - milestonesReached} ahead of you`}
              />
            )}
          </div>
          <p className="mt-2 text-xs text-muted">
            <Link href="/tools/glucose" className="font-medium text-primary hover:underline">
              Blood sugar
            </Link>{" "}
            ·{" "}
            <Link
              href="/tools/blood-pressure"
              className="font-medium text-primary hover:underline"
            >
              Blood pressure
            </Link>{" "}
            ·{" "}
            <Link href="/tools/milestones" className="font-medium text-primary hover:underline">
              Milestones
            </Link>
          </p>
        </section>
      )}

      {results.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg">Questionnaire history</h2>
          <ul className="space-y-2">
            {results.slice(0, 10).map((r) => (
              <li key={r.id} className="card flex items-center gap-3 p-3 text-sm">
                <span className="w-24 shrink-0 text-xs text-muted">
                  {new Date(r.at).toLocaleDateString()}
                </span>
                <Link
                  href={`/tools/screening/${r.tool}`}
                  className="flex-1 font-medium text-primary hover:underline"
                >
                  {r.tool.toUpperCase()}
                </Link>
                <span className="text-xs">
                  {r.score} · {r.band}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="text-xs text-muted">
        Everything on this page is stored only on this device. Take a screenshot
        or print it to share with your care team.
      </p>
    </div>
  );
}
