/**
 * Glucose and blood pressure logic for the self-monitoring charts.
 *
 * These are logs, not diagnostics. Everything here classifies a reading
 * against widely published ranges so someone can see a pattern and describe it
 * to their team — it never suggests a medication change, and the thresholds
 * that matter clinically (a hypo, a hypertensive crisis) route to action
 * rather than to a colour on a chart.
 */

/* ------------------------------------------------------------------ glucose */

export type GlucoseUnit = "mmol/L" | "mg/dL";

export type GlucoseContext =
  | "fasting"
  | "before-meal"
  | "after-meal"
  | "bedtime"
  | "random"
  | "hypo-symptoms"
  | "exercise";

export const GLUCOSE_CONTEXTS: { key: GlucoseContext; label: string }[] = [
  { key: "fasting", label: "Fasting / on waking" },
  { key: "before-meal", label: "Before a meal" },
  { key: "after-meal", label: "2 hours after a meal" },
  { key: "bedtime", label: "Bedtime" },
  { key: "random", label: "Random" },
  { key: "hypo-symptoms", label: "Feeling hypo" },
  { key: "exercise", label: "Around exercise" },
];

export const MMOL_TO_MGDL = 18.0182;

export const toMmol = (value: number, unit: GlucoseUnit) =>
  unit === "mmol/L" ? value : value / MMOL_TO_MGDL;

export const fromMmol = (mmol: number, unit: GlucoseUnit) =>
  unit === "mmol/L" ? mmol : mmol * MMOL_TO_MGDL;

export function formatGlucose(mmol: number, unit: GlucoseUnit): string {
  return unit === "mmol/L"
    ? `${mmol.toFixed(1)} mmol/L`
    : `${Math.round(mmol * MMOL_TO_MGDL)} mg/dL`;
}

/**
 * Default adult targets, in mmol/L. Deliberately editable — targets are
 * individual, and are looser in frailty, in advanced illness, and where
 * hypoglycaemia is dangerous.
 */
export type GlucoseTargets = {
  preLow: number;
  preHigh: number;
  postHigh: number;
};

export const DEFAULT_GLUCOSE_TARGETS: GlucoseTargets = {
  preLow: 4.0,
  preHigh: 7.0,
  postHigh: 8.5,
};

export type GlucoseBand = {
  key: "severe-low" | "low" | "in-range" | "above" | "high" | "very-high";
  label: string;
  tone: "danger" | "warn" | "good" | "info";
  action?: string;
};

export function classifyGlucose(
  mmol: number,
  context: GlucoseContext,
  targets: GlucoseTargets = DEFAULT_GLUCOSE_TARGETS,
): GlucoseBand {
  if (mmol < 3.0) {
    return {
      key: "severe-low",
      label: "Severe low",
      tone: "danger",
      action:
        "Treat now with 15–20 g of fast-acting carbohydrate, then retest in 15 minutes. If you cannot swallow, are confused, or someone has collapsed, this is an emergency — call your emergency number.",
    };
  }
  if (mmol < targets.preLow) {
    return {
      key: "low",
      label: "Low (hypo)",
      tone: "danger",
      action:
        "Treat with 15 g of fast-acting carbohydrate, retest after 15 minutes, and repeat if still low. Follow with a snack containing starch. Do not drive until you are back in range and have waited 45 minutes.",
    };
  }
  // Bedtime and random readings are judged against the looser post-meal
  // ceiling — most guidance puts bedtime around 5–9 mmol/L, and calling a
  // normal 7.4 at bedtime "above target" would be wrong and discouraging.
  const looser =
    context === "after-meal" || context === "bedtime" || context === "random";
  const upper = looser ? targets.postHigh : targets.preHigh;
  if (mmol <= upper) return { key: "in-range", label: "In range", tone: "good" };
  if (mmol < 15) {
    return { key: "above", label: "Above target", tone: "warn" };
  }
  if (mmol < 20) {
    return {
      key: "high",
      label: "High",
      tone: "warn",
      action:
        "If you have type 1 diabetes, check for ketones. Drink water, and follow your sick-day rules. Never stop insulin because you are eating less.",
    };
  }
  return {
    key: "very-high",
    label: "Very high",
    tone: "danger",
    action:
      "Check ketones if you can. Contact your diabetes team or an urgent care service today — sooner if you are vomiting, breathless, drowsy or have abdominal pain.",
  };
}

export type GlucoseStats = {
  count: number;
  meanMmol: number | null;
  lowest: number | null;
  highest: number | null;
  inRange: number;
  below: number;
  above: number;
  hypoCount: number;
  /** Glucose Management Indicator — an estimate, not a lab HbA1c. */
  gmi: number | null;
};

export function glucoseStats(
  readings: { mmol: number; context: GlucoseContext }[],
  targets: GlucoseTargets = DEFAULT_GLUCOSE_TARGETS,
  daysCovered = 0,
): GlucoseStats {
  if (!readings.length) {
    return {
      count: 0,
      meanMmol: null,
      lowest: null,
      highest: null,
      inRange: 0,
      below: 0,
      above: 0,
      hypoCount: 0,
      gmi: null,
    };
  }
  let below = 0;
  let above = 0;
  let inRange = 0;
  let hypoCount = 0;
  for (const reading of readings) {
    const band = classifyGlucose(reading.mmol, reading.context, targets);
    if (band.key === "low" || band.key === "severe-low") {
      below++;
      hypoCount++;
    } else if (band.key === "in-range") inRange++;
    else above++;
  }
  const values = readings.map((r) => r.mmol);
  const mean = values.reduce((s, v) => s + v, 0) / values.length;

  // GMI needs a decent spread of data to mean anything at all.
  const gmi =
    readings.length >= 20 && daysCovered >= 14
      ? Math.round((3.31 + 0.02392 * (mean * MMOL_TO_MGDL)) * 10) / 10
      : null;

  return {
    count: readings.length,
    meanMmol: mean,
    lowest: Math.min(...values),
    highest: Math.max(...values),
    inRange: Math.round((inRange / readings.length) * 100),
    below: Math.round((below / readings.length) * 100),
    above: Math.round((above / readings.length) * 100),
    hypoCount,
    gmi,
  };
}

/* ----------------------------------------------------------- blood pressure */

export type BPContext = "morning" | "evening" | "other";

export type BPBand = {
  key: "low" | "normal" | "raised" | "high" | "crisis";
  label: string;
  tone: "danger" | "warn" | "good" | "info";
  action?: string;
};

/**
 * Classified against *home* monitoring thresholds, which run roughly 5 mmHg
 * below clinic readings. A home average under 135/85 is the usual target for
 * treated hypertension; your own target may differ.
 */
export function classifyBP(systolic: number, diastolic: number): BPBand {
  if (systolic >= 180 || diastolic >= 120) {
    return {
      key: "crisis",
      label: "Severely high",
      tone: "danger",
      action:
        "Rest for 5 minutes and repeat once. If it is still this high, seek medical help the same day. If you also have chest pain, breathlessness, weakness or numbness on one side, difficulty speaking, vision change or a severe sudden headache, call your emergency number now.",
    };
  }
  if (systolic < 90 || diastolic < 60) {
    return {
      key: "low",
      label: "Low",
      tone: "warn",
      action:
        "Low readings matter if you feel dizzy, faint or unsteady on standing — that is a fall risk. Tell your team, especially if you take blood pressure or heart failure medication.",
    };
  }
  if (systolic >= 150 || diastolic >= 95) {
    return {
      key: "high",
      label: "High",
      tone: "warn",
      action:
        "A single high reading means little. If your 7-day average stays at this level, book a review — do not change any medication yourself.",
    };
  }
  if (systolic >= 135 || diastolic >= 85) {
    return { key: "raised", label: "Slightly raised", tone: "info" };
  }
  return { key: "normal", label: "Within home target", tone: "good" };
}

export type BPStats = {
  count: number;
  avgSystolic: number | null;
  avgDiastolic: number | null;
  avgPulse: number | null;
  band: BPBand | null;
  morningAvg: string | null;
  eveningAvg: string | null;
  /** True once there is enough data for the standard 7-day home protocol. */
  protocolMet: boolean;
};

export function bpStats(
  readings: { systolic: number; diastolic: number; pulse?: number; context: BPContext; date: string }[],
): BPStats {
  if (!readings.length) {
    return {
      count: 0,
      avgSystolic: null,
      avgDiastolic: null,
      avgPulse: null,
      band: null,
      morningAvg: null,
      eveningAvg: null,
      protocolMet: false,
    };
  }
  const mean = (values: number[]) =>
    values.length ? Math.round(values.reduce((s, v) => s + v, 0) / values.length) : null;

  const avgSystolic = mean(readings.map((r) => r.systolic))!;
  const avgDiastolic = mean(readings.map((r) => r.diastolic))!;
  const pulses = readings.map((r) => r.pulse).filter((p): p is number => Boolean(p));

  const slot = (context: BPContext) => {
    const subset = readings.filter((r) => r.context === context);
    if (!subset.length) return null;
    return `${mean(subset.map((r) => r.systolic))}/${mean(subset.map((r) => r.diastolic))}`;
  };

  return {
    count: readings.length,
    avgSystolic,
    avgDiastolic,
    avgPulse: mean(pulses),
    band: classifyBP(avgSystolic, avgDiastolic),
    morningAvg: slot("morning"),
    eveningAvg: slot("evening"),
    protocolMet: new Set(readings.map((r) => r.date)).size >= 4 && readings.length >= 8,
  };
}

export const BP_TECHNIQUE = [
  "Sit still for 5 minutes first, feet flat on the floor, back supported.",
  "Rest your arm on a table so the cuff is level with your heart.",
  "Use the correct cuff size — too small a cuff reads falsely high.",
  "No caffeine, smoking or exercise for 30 minutes beforehand; empty your bladder first.",
  "Do not talk during the measurement.",
  "Take two readings a minute apart and record the second one.",
  "Measure at the same times each day — morning before medication, and evening.",
];

export const GLUCOSE_TECHNIQUE = [
  "Wash and dry your hands — fruit or sugar on a finger gives a falsely high reading.",
  "Use the side of the fingertip, not the pad, and rotate fingers.",
  "Check the strips are in date and stored in their pot with the lid closed.",
  "Record what was happening: before or after food, illness, steroids, exercise, alcohol.",
  "If a reading does not match how you feel, wash your hands and repeat it.",
];
