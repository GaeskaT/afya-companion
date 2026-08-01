"use client";

import { useState } from "react";
import { Callout, Stat } from "@/components/ui";
import { lastNDays, todayKey, uid, useLocalState } from "@/lib/storage";
import { KEYS, type FluidEntry, type FoodEntry, type WeightEntry } from "@/lib/records";
import { estimateFluid, type NutritionProfile } from "@/lib/nutrition";

const MEALS: FoodEntry["meal"][] = ["breakfast", "lunch", "dinner", "snack"];

export function NutritionTracker() {
  const today = todayKey();
  const [food, setFood] = useLocalState<FoodEntry[]>(KEYS.foodDiary, []);
  const [fluid, setFluid] = useLocalState<FluidEntry[]>(KEYS.fluid, []);
  const [weights, setWeights] = useLocalState<WeightEntry[]>(KEYS.weights, []);
  const [profile] = useLocalState<NutritionProfile | null>(KEYS.nutritionProfile, null);

  const [meal, setMeal] = useState<FoodEntry["meal"]>("breakfast");
  const [what, setWhat] = useState("");
  const [portion, setPortion] = useState<FoodEntry["portion"]>("medium");
  const [protein, setProtein] = useState(true);
  const [vegFruit, setVegFruit] = useState(1);
  const [weightInput, setWeightInput] = useState("");

  const todayFood = food.filter((f) => f.date === today);
  const todayFluid = fluid.find((f) => f.date === today)?.ml ?? 0;
  const proteinCount = todayFood.filter((f) => f.protein).length;
  const vegCount = todayFood.reduce((s, f) => s + f.vegFruit, 0);
  const fluidTarget = profile ? estimateFluid(profile).ml : 2000;

  function addFood() {
    if (!what.trim()) return;
    setFood([
      { id: uid(), date: today, meal, what: what.trim(), portion, protein, vegFruit },
      ...food,
    ]);
    setWhat("");
  }

  function addFluid(ml: number) {
    const current = fluid.find((f) => f.date === today)?.ml ?? 0;
    const next = Math.max(0, current + ml);
    setFluid([...fluid.filter((f) => f.date !== today), { date: today, ml: next }]);
  }

  function saveWeight() {
    const kg = Number(weightInput);
    if (!kg) return;
    setWeights([...weights.filter((w) => w.date !== today), { date: today, kg }]);
    setWeightInput("");
  }

  const week = lastNDays(7);

  return (
    <div className="space-y-8">
      <section>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Eating occasions today" value={todayFood.length} hint="aim for 3–6" />
          <Stat label="With protein" value={proteinCount} hint="aim for one at each" />
          <Stat label="Veg & fruit portions" value={vegCount} hint="aim for 5" />
          <Stat
            label="Fluid today"
            value={todayFluid}
            unit="ml"
            hint={fluidTarget ? `guide ${fluidTarget} ml` : "follow your restriction"}
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Food diary</h2>
        <div className="card space-y-3 p-4">
          <div className="flex flex-wrap gap-1.5">
            {MEALS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMeal(m)}
                className={`rounded-full border px-3 py-1.5 text-sm font-medium capitalize ${
                  meal === m
                    ? "border-transparent bg-primary text-white"
                    : "border-line-strong bg-surface text-ink-soft"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <input
            className="field"
            value={what}
            placeholder="What did you eat or drink?"
            onChange={(e) => setWhat(e.target.value)}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label className="label" htmlFor="portion">
                Portion
              </label>
              <select
                id="portion"
                className="field"
                value={portion}
                onChange={(e) => setPortion(e.target.value as FoodEntry["portion"])}
              >
                <option value="small">Small — a few mouthfuls</option>
                <option value="medium">Medium — usual portion</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="label" htmlFor="veg">
                Veg / fruit portions
              </label>
              <select
                id="veg"
                className="field"
                value={vegFruit}
                onChange={(e) => setVegFruit(Number(e.target.value))}
              >
                {[0, 1, 2, 3].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <label className="flex items-end gap-2 pb-2.5 text-sm">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={protein}
                onChange={(e) => setProtein(e.target.checked)}
              />
              Included a protein food
            </label>
          </div>
          <button type="button" className="btn btn-primary" onClick={addFood}>
            Add to diary
          </button>
        </div>

        {todayFood.length > 0 && (
          <ul className="space-y-2">
            {todayFood.map((entry) => (
              <li key={entry.id} className="card flex items-center gap-3 p-3 text-sm">
                <span className="chip capitalize">{entry.meal}</span>
                <span className="min-w-0 flex-1">{entry.what}</span>
                <span className="text-xs text-muted">
                  {entry.portion}
                  {entry.protein ? " · protein" : ""}
                  {entry.vegFruit ? ` · ${entry.vegFruit} veg` : ""}
                </span>
                <button
                  type="button"
                  className="text-xs text-muted hover:text-danger"
                  onClick={() => setFood(food.filter((f) => f.id !== entry.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Fluid</h2>
        <div className="card p-4">
          <div className="flex flex-wrap gap-2">
            {[150, 200, 250, 330, 500].map((ml) => (
              <button
                key={ml}
                type="button"
                className="btn btn-soft text-sm"
                onClick={() => addFluid(ml)}
              >
                +{ml} ml
              </button>
            ))}
            <button
              type="button"
              className="btn btn-ghost text-sm"
              onClick={() => addFluid(-200)}
            >
              −200 ml
            </button>
          </div>
          <div className="mt-4 h-3 w-full rounded-full bg-surface-2">
            <div
              className="h-3 rounded-full bg-primary transition-all"
              style={{
                width: `${Math.min(100, fluidTarget ? (todayFluid / fluidTarget) * 100 : 0)}%`,
              }}
            />
          </div>
          <p className="mt-2 text-sm text-muted">
            {todayFluid} ml today
            {fluidTarget ? ` of a rough ${fluidTarget} ml guide.` : "."}
          </p>
          {profile?.fluidRestricted && (
            <Callout tone="warn">
              You have a fluid restriction. Use the exact allowance your team
              gave you — and remember soup, ice, jelly and the milk in tea all
              count towards it.
            </Callout>
          )}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Weight</h2>
        <div className="card p-4">
          <div className="flex flex-wrap items-end gap-3">
            <div>
              <label className="label" htmlFor="weight">
                Today&apos;s weight (kg)
              </label>
              <input
                id="weight"
                type="number"
                inputMode="decimal"
                step={0.1}
                className="field w-40"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={saveWeight}>
              Save
            </button>
          </div>

          {weights.length > 0 && (
            <div className="mt-4">
              <div className="flex items-end gap-1.5">
                {week.map((date) => {
                  const entry = weights.find((w) => w.date === date);
                  const all = weights.map((w) => w.kg);
                  const min = Math.min(...all) - 1;
                  const max = Math.max(...all) + 1;
                  const height = entry
                    ? ((entry.kg - min) / Math.max(1, max - min)) * 100
                    : 0;
                  return (
                    <div key={date} className="flex flex-1 flex-col items-center gap-1">
                      <div className="flex h-20 w-full items-end rounded-md bg-surface-2">
                        <div
                          className="w-full rounded-md bg-calm"
                          style={{ height: `${height}%` }}
                          title={entry ? `${date}: ${entry.kg} kg` : date}
                        />
                      </div>
                      <span className="text-[0.6rem] text-muted">{date.slice(8)}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-muted">
                Weigh at the same time each day, after passing urine, before
                breakfast. In heart failure, a rise of 2 kg over two to three
                days usually means fluid — follow your action plan.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
