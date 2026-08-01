export type Audience = "patient" | "caregiver" | "family";

export const AUDIENCE_LABEL: Record<Audience, string> = {
  patient: "Patient",
  caregiver: "Caregiver",
  family: "Family",
};

export type Block = {
  heading: string;
  /** Short paragraphs. Kept plain so they render identically offline. */
  body?: string[];
  list?: string[];
  steps?: string[];
};

export type Practice = {
  title: string;
  minutes?: number;
  steps: string[];
};

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  audience: Audience[];
  /** Optional one-line "read this when…" cue shown on cards. */
  cue?: string;
  blocks: Block[];
  practices?: Practice[];
  related?: { href: string; label: string }[];
};

export function findTopic(topics: Topic[], slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
