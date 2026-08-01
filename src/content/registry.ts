import { CAREGIVER_TOPICS, FAMILY_TOPICS, PATIENT_TOPICS } from "./support";
import { MODULES } from "./modules";
import { ANTICIPATORY_TOPICS, BEREAVEMENT_TOPICS } from "./grief";
import type { Topic } from "./types";

export type SupportSection = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  topics: Topic[];
};

/** Every Topic-shaped section under /support, keyed by its URL segment. */
export const SUPPORT_SECTIONS: Record<string, SupportSection> = {
  patient: {
    slug: "patient",
    eyebrow: "Patient support",
    title: "For the patient",
    intro:
      "Your emotional care, alongside the medical care. Start with whichever section matches today — nothing here has to be read in order.",
    topics: PATIENT_TOPICS,
  },
  caregiver: {
    slug: "caregiver",
    eyebrow: "Caregiver support",
    title: "For the caregiver",
    intro:
      "Caring for someone who is ill is real work with real costs. This section is about you: your strain, your limits, and your life outside the role.",
    topics: CAREGIVER_TOPICS,
  },
  family: {
    slug: "family",
    eyebrow: "Family support",
    title: "For family & loved ones",
    intro:
      "Understanding the diagnosis, talking without dread, protecting children, handling conflict and money, and building support that lasts.",
    topics: FAMILY_TOPICS,
  },
  modules: {
    slug: "modules",
    eyebrow: "Psychological support",
    title: "Psychological modules",
    intro:
      "Twelve short, self-guided courses drawn from CBT, ACT, problem-solving therapy and meaning-centred approaches — adapted for people living with physical illness.",
    topics: MODULES,
  },
  "anticipatory-grief": {
    slug: "anticipatory-grief",
    eyebrow: "Anticipatory grief",
    title: "Grieving before the loss",
    intro:
      "Many people begin grieving long before a death. It is common, it is not disloyal, and naming it usually brings relief.",
    topics: ANTICIPATORY_TOPICS,
  },
  bereavement: {
    slug: "bereavement",
    eyebrow: "Loss & bereavement",
    title: "After a death",
    intro:
      "Understanding grief, surviving anniversaries, supporting children, and finding a way forward that carries the person with you.",
    topics: BEREAVEMENT_TOPICS,
  },
};

export const SUPPORT_SECTION_KEYS = Object.keys(SUPPORT_SECTIONS);
