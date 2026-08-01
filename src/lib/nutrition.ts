/**
 * Nutrition calculations used by the assessment, the plan generator and the
 * progress dashboard.
 *
 * Everything here produces *estimates for education*, never prescriptions.
 * Requirements in illness vary enormously and several conditions (kidney,
 * liver, heart failure) invert the usual rules — so every output carries a
 * "confirm with a dietitian" flag, and restricted conditions suppress the
 * numbers entirely rather than showing a misleading target.
 */

export type Sex = "female" | "male" | "unspecified";
export type Activity = "bed" | "light" | "moderate" | "active";
export type Goal = "gain" | "maintain" | "lose";

export type NutritionProfile = {
  age: number;
  sex: Sex;
  heightCm: number;
  weightKg: number;
  usualWeightKg?: number;
  activity: Activity;
  goal: Goal;
  conditions: string[];
  appetite: "good" | "reduced" | "poor";
  swallowing: "normal" | "difficult";
  fluidRestricted: boolean;
};

export const CONDITION_OPTIONS = [
  { key: "diabetes", label: "Diabetes" },
  { key: "hypertension", label: "High blood pressure" },
  { key: "heart-disease", label: "Heart disease / heart failure" },
  { key: "kidney-disease", label: "Kidney disease or dialysis" },
  { key: "liver-disease", label: "Liver disease" },
  { key: "cancer", label: "Cancer (in treatment)" },
  { key: "hiv", label: "HIV" },
  { key: "stroke-recovery", label: "Stroke recovery" },
  { key: "gastrointestinal", label: "Gut condition (IBS, IBD, coeliac)" },
  { key: "obesity", label: "Weight management" },
  { key: "malnutrition", label: "Losing weight unintentionally" },
  { key: "thyroid", label: "Thyroid disorder" },
  { key: "pregnancy", label: "Pregnant" },
];

const ACTIVITY_FACTOR: Record<Activity, number> = {
  bed: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
};

export function bmi(weightKg: number, heightCm: number): number {
  if (!weightKg || !heightCm) return 0;
  const m = heightCm / 100;
  return Math.round((weightKg / (m * m)) * 10) / 10;
}

export function bmiBand(value: number): {
  label: string;
  tone: "good" | "info" | "warn" | "danger";
  note: string;
} {
  if (!value) return { label: "—", tone: "info", note: "Enter height and weight." };
  if (value < 18.5)
    return {
      label: "Underweight",
      tone: "danger",
      note: "Below 18.5 is a malnutrition risk flag. Ask for a dietitian referral.",
    };
  if (value < 25)
    return { label: "Healthy range", tone: "good", note: "Within the usual healthy range." };
  if (value < 30)
    return {
      label: "Overweight",
      tone: "info",
      note: "Modest weight loss may help blood pressure, glucose and joints — but not during active treatment.",
    };
  if (value < 35)
    return {
      label: "Obesity class I",
      tone: "warn",
      note: "Losing 5–10% of body weight produces measurable health gains.",
    };
  return {
    label: "Obesity class II–III",
    tone: "warn",
    note: "Worth discussing structured support, medication or surgery with your doctor.",
  };
}

/** BMI is unreliable in fluid overload, amputation, pregnancy and very high muscle mass. */
export function bmiCaveat(profile: Partial<NutritionProfile>): string | null {
  const c = profile.conditions ?? [];
  if (c.includes("pregnancy")) return "BMI is not used during pregnancy.";
  if (c.includes("kidney-disease") || c.includes("heart-disease") || c.includes("liver-disease"))
    return "Fluid retention makes BMI unreliable in kidney, liver and heart failure — your team will use dry weight instead.";
  return null;
}

export function weightLossPercent(current: number, usual?: number): number | null {
  if (!usual || !current || usual <= 0) return null;
  const pct = ((usual - current) / usual) * 100;
  return Math.round(pct * 10) / 10;
}

export function estimateEnergy(profile: NutritionProfile): {
  kcal: number | null;
  range: [number, number] | null;
  note: string;
} {
  const { age, sex, heightCm, weightKg, activity, goal, conditions } = profile;
  if (!age || !heightCm || !weightKg) {
    return { kcal: null, range: null, note: "Fill in age, height and weight." };
  }

  if (conditions.includes("kidney-disease") || conditions.includes("liver-disease")) {
    return {
      kcal: null,
      range: null,
      note: "Energy and protein targets in kidney and liver disease are set individually from your blood results. CareCircle will not estimate them — ask your renal or hepatology dietitian.",
    };
  }

  // Mifflin-St Jeor. Unspecified sex uses the mean of the two constants.
  const sexConstant = sex === "male" ? 5 : sex === "female" ? -161 : -78;
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + sexConstant;
  let kcal = bmr * ACTIVITY_FACTOR[activity];

  if (goal === "lose") kcal -= 500;
  if (goal === "gain") kcal += 500;
  if (conditions.includes("cancer") || conditions.includes("malnutrition")) kcal += 300;
  if (conditions.includes("pregnancy")) kcal += 250;

  const rounded = Math.round(kcal / 10) * 10;
  return {
    kcal: rounded,
    range: [Math.round((rounded - 150) / 10) * 10, Math.round((rounded + 150) / 10) * 10],
    note: "An estimate only. Illness, fever, treatment and healing all change requirements substantially.",
  };
}

export function estimateProtein(profile: NutritionProfile): {
  grams: [number, number] | null;
  note: string;
} {
  const { weightKg, conditions, age } = profile;
  if (!weightKg) return { grams: null, note: "Enter your weight." };

  if (conditions.includes("kidney-disease") || conditions.includes("liver-disease")) {
    return {
      grams: null,
      note: "Protein targets in kidney and liver disease are individual and change with your stage and blood results. Use the number your dietitian gives you.",
    };
  }

  let low = 0.8;
  let high = 1.0;
  if (age >= 65) {
    low = 1.0;
    high = 1.2;
  }
  if (
    conditions.includes("cancer") ||
    conditions.includes("malnutrition") ||
    conditions.includes("stroke-recovery")
  ) {
    low = 1.2;
    high = 1.5;
  }
  if (conditions.includes("obesity")) {
    low = 1.2;
    high = 1.5;
  }
  if (conditions.includes("pregnancy")) {
    low = 1.1;
    high = 1.3;
  }

  return {
    grams: [Math.round(low * weightKg), Math.round(high * weightKg)],
    note: "Spread this across the day — roughly a quarter at each main meal — rather than all at dinner.",
  };
}

export function estimateFluid(profile: NutritionProfile): {
  ml: number | null;
  note: string;
} {
  if (profile.fluidRestricted) {
    return {
      ml: null,
      note: "You have told us you are on a fluid restriction. Follow the exact allowance from your team — remember soup, ice, jelly and the milk in tea all count.",
    };
  }
  if (!profile.weightKg) return { ml: null, note: "Enter your weight." };
  const ml = Math.round((profile.weightKg * 30) / 50) * 50;
  return {
    ml,
    note: "A rough guide of about 30 ml per kg. Increase in fever, hot weather, vomiting or diarrhoea.",
  };
}

export type PlanFlag = { tone: "warn" | "danger" | "info"; text: string };

export function planFlags(profile: NutritionProfile): PlanFlag[] {
  const flags: PlanFlag[] = [];
  const loss = weightLossPercent(profile.weightKg, profile.usualWeightKg);
  const b = bmi(profile.weightKg, profile.heightCm);

  if (loss !== null && loss >= 5) {
    flags.push({
      tone: "danger",
      text: `You have lost about ${loss}% of your usual body weight. A loss of 5% or more is a malnutrition risk flag — ask your care team for a dietitian referral.`,
    });
  }
  if (b && b < 18.5) {
    flags.push({
      tone: "danger",
      text: "Your BMI is below 18.5, which is a malnutrition risk flag. Please raise this with your care team.",
    });
  }
  if (profile.appetite === "poor") {
    flags.push({
      tone: "warn",
      text: "Poor appetite for more than five days needs review — there is often a treatable cause such as pain, nausea, constipation, mouth thrush or low mood.",
    });
  }
  if (profile.swallowing === "difficult") {
    flags.push({
      tone: "danger",
      text: "Difficulty swallowing needs a speech and language therapy assessment before changing food textures. Coughing while eating is a warning sign.",
    });
  }
  if (profile.conditions.includes("kidney-disease")) {
    flags.push({
      tone: "warn",
      text: "Kidney nutrition must be individualised by a renal dietitian. Treat everything here as background reading only.",
    });
  }
  if (profile.conditions.includes("diabetes") && profile.goal === "gain") {
    flags.push({
      tone: "info",
      text: "Gaining weight with diabetes works best by fortifying with fat and protein rather than sugar, and needs closer glucose monitoring.",
    });
  }
  if (profile.conditions.includes("cancer") && profile.goal === "lose") {
    flags.push({
      tone: "warn",
      text: "Deliberate weight loss during cancer treatment is usually not advised — muscle loss worsens treatment tolerance. Please discuss this with your oncology team first.",
    });
  }
  if (profile.fluidRestricted) {
    flags.push({
      tone: "warn",
      text: "With a fluid restriction, count everything: soup, ice, jelly, ice cream and the milk in tea.",
    });
  }
  return flags;
}

/** Which condition pages and diet plans to surface for this profile. */
export function recommendedPlans(profile: NutritionProfile): {
  diets: string[];
  conditions: string[];
} {
  const diets = new Set<string>();
  const c = profile.conditions;

  if (c.includes("diabetes") || c.includes("pregnancy")) diets.add("diabetic");
  if (c.includes("kidney-disease")) diets.add("renal");
  if (c.includes("hypertension") || c.includes("heart-disease")) diets.add("low-sodium");
  if (c.includes("heart-disease")) diets.add("cardiac");
  if (c.includes("malnutrition") || c.includes("cancer") || profile.goal === "gain")
    diets.add("high-protein");
  if (c.includes("obesity") || profile.goal === "lose") diets.add("weight-management");
  if (profile.swallowing === "difficult" || c.includes("stroke-recovery"))
    diets.add("soft-texture");
  if (c.includes("cancer")) diets.add("cancer-nutrition");
  if (c.includes("pregnancy")) diets.add("pregnancy-nutrition");
  if (profile.age >= 70) diets.add("elderly-nutrition");
  if (diets.size === 0) diets.add("cardiac");

  return { diets: [...diets], conditions: c };
}

/** A simple 7-day skeleton built from the profile — a starting point to edit. */
export function buildWeekPlan(profile: NutritionProfile): {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
}[] {
  const fortify =
    profile.goal === "gain" ||
    profile.appetite !== "good" ||
    profile.conditions.includes("malnutrition") ||
    profile.conditions.includes("cancer");
  const soft =
    profile.swallowing === "difficult" || profile.conditions.includes("stroke-recovery");
  const lowSalt =
    profile.conditions.includes("hypertension") ||
    profile.conditions.includes("heart-disease") ||
    profile.conditions.includes("kidney-disease");
  const lowerCarb = profile.conditions.includes("diabetes");
  const renal = profile.conditions.includes("kidney-disease");

  const breakfasts = [
    fortify ? "Fortified porridge with milk powder and nut butter" : "Porridge with milk and fruit",
    soft ? "Smooth semolina with milk and honey" : "Eggs on wholegrain toast",
    lowerCarb ? "Greek yoghurt with seeds and a few berries" : "Overnight oats with fruit",
    fortify ? "Full-fat yoghurt with banana and ground nuts" : "Wholegrain cereal with milk",
    soft ? "Scrambled eggs, soft and moist" : "Eggs with greens on toast",
    "Porridge with cinnamon" + (fortify ? " and cream" : ""),
    renal ? "White toast with egg and a small apple" : "Fruit and yoghurt with oats",
  ];
  const lunches = [
    renal ? "Chicken with white rice and boiled cabbage" : "Bean and tomato stew with rice",
    soft ? "Smooth fortified vegetable soup" : "Lentil soup with bread",
    lowSalt ? "Home-made vegetable soup, no stock cube, with bread" : "Sardines on toast with salad",
    "Chicken or chickpea salad with a small grain portion",
    soft ? "Minced chicken in gravy with mash" : "Vegetable and chickpea curry with rice",
    fortify ? "Creamy soup with cheese and buttered bread" : "Big salad with eggs and bread",
    "Leftovers from last night, reheated thoroughly",
  ];
  const dinners = [
    soft ? "Soft fish pie with mashed potato" : "Chicken and vegetable traybake",
    renal ? "Fish with pasta and green beans" : "Grilled fish with greens and sweet potato",
    lowerCarb ? "Stir-fried tofu or chicken with plenty of vegetables" : "Bean stew with rice",
    lowSalt ? "Herb-baked chicken with potatoes and salad" : "Vegetable curry with rice",
    soft ? "Blended stew with soft vegetables" : "Fish with potatoes and greens",
    "Eggs with vegetables and bread",
    "Family curry or stew — adjust your own portion",
  ];
  const snacks = fortify
    ? "Milkshake, custard, cheese and crackers, or ice cream"
    : lowerCarb
      ? "Yoghurt, nuts, boiled egg, vegetable sticks"
      : "Fruit, yoghurt, nuts or a small sandwich";

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return days.map((day, i) => ({
    day,
    breakfast: breakfasts[i],
    lunch: lunches[i],
    dinner: dinners[i],
    snacks,
  }));
}

export function shoppingList(profile: NutritionProfile): { group: string; items: string[] }[] {
  const renal = profile.conditions.includes("kidney-disease");
  const fortify =
    profile.goal === "gain" ||
    profile.appetite !== "good" ||
    profile.conditions.includes("malnutrition");
  const lowSalt =
    profile.conditions.includes("hypertension") || profile.conditions.includes("heart-disease");

  return [
    {
      group: "Protein",
      items: [
        "Eggs",
        "Tinned fish (sardines, mackerel, tuna)",
        "Chicken or another meat you like",
        renal ? "Egg whites, chicken, fish (portions as advised)" : "Dried or tinned beans and lentils",
        "Milk, yoghurt or fortified plant alternatives",
      ],
    },
    {
      group: "Starchy foods",
      items: [
        renal ? "White rice, pasta, bread" : "Oats, brown rice, wholegrain bread",
        "Potatoes or sweet potatoes",
        "Maize meal, millet or your local staple",
      ],
    },
    {
      group: "Vegetables & fruit",
      items: renal
        ? ["Cabbage, green beans, cauliflower, peppers", "Apples, berries, grapes, pineapple"]
        : ["Seasonal vegetables and salad", "Frozen mixed vegetables", "Whatever fruit is cheapest this week"],
    },
    {
      group: "Store cupboard",
      items: [
        "Cooking oil (olive, rapeseed or groundnut)",
        lowSalt ? "Herbs, spices, garlic, lemon — no stock cubes" : "Herbs, spices, garlic, stock",
        "Tinned tomatoes",
        fortify ? "Skimmed milk powder, nut butter, honey, cream" : "Nuts and seeds",
      ],
    },
  ];
}
