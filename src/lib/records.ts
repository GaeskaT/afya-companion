/** Shapes of everything CareCircle stores on the device, plus their keys. */

export const KEYS = {
  profile: "profile",
  checkIns: "check-ins",
  journal: "journal",
  gratitude: "gratitude",
  goals: "goals",
  screening: "screening",
  safetyPlan: "safety-plan",
  nutritionProfile: "nutrition-profile",
  foodDiary: "food-diary",
  fluid: "fluid",
  weights: "weights",
  assistant: "assistant-thread",
  bookings: "bookings",
  applications: "applications",
  glucose: "glucose",
  glucoseTargets: "glucose-targets",
  glucoseUnit: "glucose-unit",
  bloodPressure: "blood-pressure",
  milestones: "milestones",
} as const;

/** Draft registrations are kept per role, so a half-finished one survives a reload. */
export const draftKey = (role: string) => `application-draft:${role}`;

export type Profile = {
  name: string;
  role: "patient" | "caregiver" | "family";
  condition: string;
};

export type CheckIn = {
  date: string; // YYYY-MM-DD
  mood: number; // 1–5
  energy: number; // 1–5
  pain: number; // 0–10
  sleepHours?: number;
  note?: string;
  at: string;
};

export type JournalEntry = {
  id: string;
  at: string;
  kind: "pain" | "thought" | "free";
  painScore?: number;
  painWorst?: number;
  location?: string;
  medication?: string;
  mood?: number;
  situation?: string;
  thought?: string;
  evidenceFor?: string;
  evidenceAgainst?: string;
  balanced?: string;
  body?: string;
  helped?: string;
};

export type GratitudeEntry = {
  id: string;
  date: string;
  items: string[];
  reflection?: string;
};

export type GoalRecord = {
  id: string;
  title: string;
  why: string;
  firstStep: string;
  badDayVersion: string;
  helper: string;
  by: string;
  done: boolean;
  createdAt: string;
};

export type ScreeningResult = {
  id: string;
  tool: string;
  at: string;
  score: number;
  band: string;
  answers: number[];
};

export type FoodEntry = {
  id: string;
  date: string;
  meal: "breakfast" | "lunch" | "dinner" | "snack";
  what: string;
  portion: "small" | "medium" | "large";
  protein: boolean;
  vegFruit: number;
  notes?: string;
};

export type FluidEntry = { date: string; ml: number };

export type WeightEntry = { date: string; kg: number };

export type BookingRecord = {
  id: string;
  service: string;
  kind: "counselling" | "dietitian";
  preferred: string;
  at: string;
  status: "requested";
};

export type AssistantMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  at: string;
  engine?: string;
};

export type GlucoseReading = {
  id: string;
  /** Always stored in mmol/L; the display unit is a separate preference. */
  mmol: number;
  context: import("./vitals").GlucoseContext;
  at: string;
  date: string;
  note?: string;
};

export type BPReading = {
  id: string;
  systolic: number;
  diastolic: number;
  pulse?: number;
  context: import("./vitals").BPContext;
  arm?: "left" | "right";
  at: string;
  date: string;
  note?: string;
};

export type Milestone = {
  id: string;
  title: string;
  category: MilestoneCategory;
  targetDate?: string;
  why?: string;
  howToMark?: string;
  status: "planned" | "achieved" | "paused";
  achievedDate?: string;
  reflection?: string;
  createdAt: string;
};

export type MilestoneCategory =
  | "treatment"
  | "physical"
  | "personal"
  | "family"
  | "wellbeing";

export const MILESTONE_CATEGORY_LABEL: Record<MilestoneCategory, string> = {
  treatment: "Treatment",
  physical: "Body & strength",
  personal: "Personal",
  family: "People",
  wellbeing: "Wellbeing",
};

export const MOOD_LABELS = ["Very low", "Low", "Okay", "Good", "Very good"];
export const MOOD_EMOJI = ["😞", "😕", "😐", "🙂", "😊"];
export const ENERGY_LABELS = ["Empty", "Low", "Moderate", "Good", "Strong"];
