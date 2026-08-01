"use client";

import Link from "next/link";
import { useLocalState, lastNDays, todayKey } from "@/lib/storage";
import { KEYS } from "@/lib/records";
import type { CheckIn, FluidEntry, GoalRecord, ScreeningResult } from "@/lib/records";
import { Stat } from "@/components/ui";

export function HomeSnapshot() {
  const [checkIns] = useLocalState<CheckIn[]>(KEYS.checkIns, []);
  const [fluid] = useLocalState<FluidEntry[]>(KEYS.fluid, []);
  const [goals] = useLocalState<GoalRecord[]>(KEYS.goals, []);
  const [results] = useLocalState<ScreeningResult[]>(KEYS.screening, []);

  const week = lastNDays(7);
  const weekEntries = checkIns.filter((c) => week.includes(c.date));
  const avgMood = weekEntries.length
    ? (weekEntries.reduce((s, c) => s + c.mood, 0) / weekEntries.length).toFixed(1)
    : "—";
  const todayFluid = fluid.find((f) => f.date === todayKey())?.ml ?? 0;
  const openGoals = goals.filter((g) => !g.done).length;
  const lastResult = [...results].sort((a, b) => (a.at < b.at ? 1 : -1))[0];

  const nothingYet =
    checkIns.length === 0 && fluid.length === 0 && goals.length === 0 && !lastResult;

  if (nothingYet) {
    return (
      <div className="card p-4 text-sm text-muted">
        Your snapshot appears here once you have used the check-in, the trackers
        or a questionnaire. Nothing you enter leaves this device.
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat
          label="Check-ins this week"
          value={weekEntries.length}
          hint={`${checkIns.length} in total`}
        />
        <Stat label="Average mood (7 days)" value={avgMood} hint="out of 5" />
        <Stat label="Fluid today" value={todayFluid} unit="ml" />
        <Stat
          label="Open goals"
          value={openGoals}
          hint={goals.length ? `${goals.length - openGoals} done` : "none yet"}
        />
      </div>
      {lastResult && (
        <p className="mt-2 text-xs text-muted">
          Last questionnaire:{" "}
          <Link
            href={`/tools/screening/${lastResult.tool}`}
            className="font-medium text-primary hover:underline"
          >
            {lastResult.tool.toUpperCase()}
          </Link>{" "}
          — {lastResult.band} ({lastResult.score}), on{" "}
          {new Date(lastResult.at).toLocaleDateString()}.
        </p>
      )}
    </section>
  );
}
