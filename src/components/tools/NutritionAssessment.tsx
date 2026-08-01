"use client";

import Link from "next/link";
import { useState } from "react";
import { Callout, Card, Stat } from "@/components/ui";
import { useLocalState } from "@/lib/storage";
import { KEYS } from "@/lib/records";
import {
  bmi,
  bmiBand,
  bmiCaveat,
  buildWeekPlan,
  CONDITION_OPTIONS,
  estimateEnergy,
  estimateFluid,
  estimateProtein,
  planFlags,
  recommendedPlans,
  shoppingList,
  weightLossPercent,
  type NutritionProfile,
} from "@/lib/nutrition";
import { THERAPEUTIC_DIETS } from "@/content/nutrition/diets";
import { NUTRITION_CONDITIONS } from "@/content/nutrition/conditions";

const DEFAULT: NutritionProfile = {
  age: 0,
  sex: "unspecified",
  heightCm: 0,
  weightKg: 0,
  activity: "light",
  goal: "maintain",
  conditions: [],
  appetite: "good",
  swallowing: "normal",
  fluidRestricted: false,
};

export function NutritionAssessment() {
  const [profile, setProfile] = useLocalState<NutritionProfile>(
    KEYS.nutritionProfile,
    DEFAULT,
  );
  const [showPlan, setShowPlan] = useState(false);

  const set = <K extends keyof NutritionProfile>(key: K, value: NutritionProfile[K]) =>
    setProfile({ ...profile, [key]: value });

  const ready = profile.age > 0 && profile.heightCm > 0 && profile.weightKg > 0;
  const b = bmi(profile.weightKg, profile.heightCm);
  const band = bmiBand(b);
  const caveat = bmiCaveat(profile);
  const loss = weightLossPercent(profile.weightKg, profile.usualWeightKg);
  const energy = estimateEnergy(profile);
  const protein = estimateProtein(profile);
  const fluid = estimateFluid(profile);
  const flags = planFlags(profile);
  const recommended = recommendedPlans(profile);
  const week = buildWeekPlan(profile);
  const shopping = shoppingList(profile);

  return (
    <div className="space-y-6">
      <div className="card space-y-4 p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <NumberField
            label="Age"
            value={profile.age}
            onChange={(v) => set("age", v)}
          />
          <NumberField
            label="Height (cm)"
            value={profile.heightCm}
            onChange={(v) => set("heightCm", v)}
          />
          <NumberField
            label="Weight now (kg)"
            value={profile.weightKg}
            onChange={(v) => set("weightKg", v)}
            step={0.1}
          />
          <NumberField
            label="Usual weight (kg)"
            value={profile.usualWeightKg ?? 0}
            onChange={(v) => set("usualWeightKg", v)}
            step={0.1}
            hint="Before you became unwell"
          />
          <SelectField
            label="Sex"
            value={profile.sex}
            onChange={(v) => set("sex", v as NutritionProfile["sex"])}
            options={[
              ["unspecified", "Prefer not to say"],
              ["female", "Female"],
              ["male", "Male"],
            ]}
          />
          <SelectField
            label="Activity"
            value={profile.activity}
            onChange={(v) => set("activity", v as NutritionProfile["activity"])}
            options={[
              ["bed", "Mostly in bed or a chair"],
              ["light", "Light — around the house"],
              ["moderate", "Moderate — out most days"],
              ["active", "Active — working or exercising"],
            ]}
          />
          <SelectField
            label="Goal"
            value={profile.goal}
            onChange={(v) => set("goal", v as NutritionProfile["goal"])}
            options={[
              ["maintain", "Keep my weight steady"],
              ["gain", "Gain weight or rebuild muscle"],
              ["lose", "Lose weight gradually"],
            ]}
          />
          <SelectField
            label="Appetite"
            value={profile.appetite}
            onChange={(v) => set("appetite", v as NutritionProfile["appetite"])}
            options={[
              ["good", "Good"],
              ["reduced", "Reduced"],
              ["poor", "Very poor"],
            ]}
          />
          <SelectField
            label="Swallowing"
            value={profile.swallowing}
            onChange={(v) => set("swallowing", v as NutritionProfile["swallowing"])}
            options={[
              ["normal", "No difficulty"],
              ["difficult", "Difficulty or coughing"],
            ]}
          />
        </div>

        <div>
          <p className="label">Conditions that affect your eating</p>
          <div className="flex flex-wrap gap-1.5">
            {CONDITION_OPTIONS.map((option) => {
              const active = profile.conditions.includes(option.key);
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() =>
                    set(
                      "conditions",
                      active
                        ? profile.conditions.filter((c) => c !== option.key)
                        : [...profile.conditions, option.key],
                    )
                  }
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "border-transparent bg-primary text-white"
                      : "border-line-strong bg-surface text-ink-soft hover:bg-surface-2"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <label className="flex items-center gap-2.5 text-sm">
          <input
            type="checkbox"
            checked={profile.fluidRestricted}
            onChange={(e) => set("fluidRestricted", e.target.checked)}
            className="h-4 w-4"
          />
          I am on a fluid restriction
        </label>

        <button
          type="button"
          className="btn btn-primary"
          disabled={!ready}
          onClick={() => setShowPlan(true)}
        >
          Build my plan
        </button>
        {!ready && (
          <p className="text-sm text-muted">
            Enter age, height and weight to continue.
          </p>
        )}
      </div>

      {ready && showPlan && (
        <>
          <section>
            <h2 className="mb-3 text-lg">Your numbers</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat label="BMI" value={b || "—"} hint={band.label} />
              <Stat
                label="Estimated energy"
                value={energy.kcal ?? "—"}
                unit={energy.kcal ? "kcal/day" : undefined}
              />
              <Stat
                label="Protein target"
                value={protein.grams ? `${protein.grams[0]}–${protein.grams[1]}` : "—"}
                unit={protein.grams ? "g/day" : undefined}
              />
              <Stat
                label="Fluid guide"
                value={fluid.ml ?? "—"}
                unit={fluid.ml ? "ml/day" : undefined}
              />
            </div>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <p>{band.note}</p>
              {caveat && <p>{caveat}</p>}
              <p>{energy.note}</p>
              <p>{protein.note}</p>
              <p>{fluid.note}</p>
              {loss !== null && loss > 0 && (
                <p>
                  You have lost about {loss}% of your usual weight.
                </p>
              )}
            </div>
          </section>

          {flags.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-lg">Things to raise with your team</h2>
              {flags.map((flag, i) => (
                <Callout key={i} tone={flag.tone}>
                  {flag.text}
                </Callout>
              ))}
            </section>
          )}

          <section>
            <h2 className="mb-3 text-lg">Plans matched to you</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {recommended.diets.map((slug) => {
                const diet = THERAPEUTIC_DIETS.find((d) => d.slug === slug);
                if (!diet) return null;
                return (
                  <Link key={slug} href={`/nutrition/diets/${slug}`} className="card p-4">
                    <p className="font-semibold">{diet.name}</p>
                    <p className="mt-1 text-sm text-muted">{diet.purpose}</p>
                  </Link>
                );
              })}
              {recommended.conditions.map((slug) => {
                const condition = NUTRITION_CONDITIONS.find((c) => c.slug === slug);
                if (!condition) return null;
                return (
                  <Link
                    key={slug}
                    href={`/nutrition/conditions/${slug}`}
                    className="card p-4"
                  >
                    <p className="font-semibold">{condition.name} — nutrition</p>
                    <p className="mt-1 text-sm text-muted">{condition.blurb}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg">A starting week</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[42rem] border-collapse text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-muted">
                    <th className="p-2">Day</th>
                    <th className="p-2">Breakfast</th>
                    <th className="p-2">Lunch</th>
                    <th className="p-2">Dinner</th>
                    <th className="p-2">Snacks</th>
                  </tr>
                </thead>
                <tbody>
                  {week.map((row) => (
                    <tr key={row.day} className="border-t border-line align-top">
                      <td className="p-2 font-semibold">{row.day}</td>
                      <td className="p-2 text-ink-soft">{row.breakfast}</td>
                      <td className="p-2 text-ink-soft">{row.lunch}</td>
                      <td className="p-2 text-ink-soft">{row.dinner}</td>
                      <td className="p-2 text-ink-soft">{row.snacks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-muted">
              A skeleton to adapt, not a prescription. Swap anything for local,
              affordable foods you actually enjoy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg">Shopping list</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {shopping.map((group) => (
                <Card key={group.group}>
                  <p className="font-semibold">{group.group}</p>
                  <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                    {group.items.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <Callout tone="info" title="Next step">
            Take these numbers to a registered dietitian — especially with
            kidney, liver or heart failure, during cancer treatment, or if you
            are losing weight.{" "}
            <Link href="/care/dietitian">Book a dietitian consultation</Link>.
          </Callout>
        </>
      )}
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  step = 1,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  hint?: string;
}) {
  const id = label.replace(/\W+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        inputMode="decimal"
        step={step}
        className="field"
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: [string, string][];
}) {
  const id = label.replace(/\W+/g, "-").replace(/^-|-$/g, "").toLowerCase();
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map(([key, text]) => (
          <option key={key} value={key}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}
