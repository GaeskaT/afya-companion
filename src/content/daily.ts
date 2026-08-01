/* Daily wellness content: affirmations, reflection prompts, breathing patterns,
   guided relaxation scripts and mindfulness practices. All offline. */

export const AFFIRMATIONS: string[] = [
  "This is hard, and I am still here.",
  "I can do the next ten minutes.",
  "Rest is part of my treatment, not a reward for finishing it.",
  "My worth is not measured by what I produced today.",
  "I am allowed to ask for help. That is what people who love me are for.",
  "I will feel differently about this in a few hours.",
  "I have survived every worst day so far.",
  "I can be frightened and still take the next step.",
  "My body is doing more work than anyone can see.",
  "I do not have to be positive to be brave.",
  "Small is not nothing. Small is what today allows.",
  "I am more than my diagnosis, my scans and my numbers.",
  "It is enough to have got through today.",
  "I can hold hope and realism in the same hand.",
  "Someone would be glad to hear from me right now.",
  "I am allowed to enjoy something today.",
  "I can let this feeling move through me without acting on it.",
  "I will speak to myself the way I would speak to a friend.",
  "Today I only have to do today.",
  "There is still something in this week worth showing up for.",
  "My pain is real, even when it is invisible to others.",
  "I can put this down for an hour and pick it up again later.",
];

export const REFLECTION_PROMPTS: string[] = [
  "What was the hardest hour today, and what got you through it?",
  "What did your body need today that you gave it — or didn't?",
  "Who did you speak to today, and how did it leave you feeling?",
  "What is one thing you are dreading this week? What is one small preparation for it?",
  "What did you manage today that would have felt impossible a month ago?",
  "What would you say to a friend in your exact situation right now?",
  "What is one thing you have been avoiding saying out loud?",
  "Where did you find a moment of ease, however brief?",
  "What is your mind repeating today? Is it solvable, or does it need company?",
  "What has this week asked you to let go of?",
  "What are you hoping for — this week, not this year?",
  "Who deserves a thank you that you have not said yet?",
  "What did you learn about your own limits today?",
  "What would make tomorrow 10% easier?",
  "What are you proud of that nobody noticed?",
];

export const GRATITUDE_PROMPTS: string[] = [
  "One person who made today lighter",
  "One thing your body still does well",
  "One small comfort you had today",
  "One thing that made you smile or laugh",
  "One kindness you received",
  "One thing outside the window",
  "One thing you are glad is over",
];

/* ------------------------------------------------------------ breathing */

export type BreathPhase = { label: string; seconds: number; scale: "in" | "out" | "hold" };

export type BreathPattern = {
  slug: string;
  name: string;
  tagline: string;
  bestFor: string;
  caution?: string;
  defaultMinutes: number;
  cycle: BreathPhase[];
};

export const BREATH_PATTERNS: BreathPattern[] = [
  {
    slug: "4-6",
    name: "4–6 calm breathing",
    tagline: "In for 4, out for 6",
    bestFor:
      "Everyday anxiety, before appointments, winding down. The safest default for most people.",
    defaultMinutes: 4,
    cycle: [
      { label: "Breathe in", seconds: 4, scale: "in" },
      { label: "Breathe out", seconds: 6, scale: "out" },
    ],
  },
  {
    slug: "box",
    name: "Box breathing",
    tagline: "4 in, 4 hold, 4 out, 4 hold",
    bestFor:
      "Focus and steadiness before a procedure, a difficult conversation or a results appointment.",
    caution: "Skip the holds if you are breathless or they make you anxious.",
    defaultMinutes: 4,
    cycle: [
      { label: "Breathe in", seconds: 4, scale: "in" },
      { label: "Hold", seconds: 4, scale: "hold" },
      { label: "Breathe out", seconds: 4, scale: "out" },
      { label: "Hold", seconds: 4, scale: "hold" },
    ],
  },
  {
    slug: "pursed-lip",
    name: "Pursed-lip breathing",
    tagline: "In through the nose, out slowly through pursed lips",
    bestFor:
      "Breathlessness, lung disease, heart failure, or panic that centres on not getting enough air.",
    defaultMinutes: 3,
    cycle: [
      { label: "In through the nose", seconds: 2, scale: "in" },
      { label: "Out through pursed lips", seconds: 4, scale: "out" },
    ],
  },
  {
    slug: "extended-out",
    name: "Long out-breath",
    tagline: "In for 4, out for 8",
    bestFor: "Falling asleep, high anxiety, after a shock.",
    caution: "If the long out-breath feels like a struggle, go back to 4–6.",
    defaultMinutes: 5,
    cycle: [
      { label: "Breathe in", seconds: 4, scale: "in" },
      { label: "Breathe out slowly", seconds: 8, scale: "out" },
    ],
  },
  {
    slug: "sigh",
    name: "Physiological sigh",
    tagline: "Two breaths in, one long breath out",
    bestFor: "Fast relief in under a minute — in a waiting room, a car, a corridor.",
    defaultMinutes: 2,
    cycle: [
      { label: "Breathe in", seconds: 2, scale: "in" },
      { label: "Top-up breath in", seconds: 1, scale: "in" },
      { label: "Long breath out", seconds: 6, scale: "out" },
    ],
  },
];

/* ------------------------------------------------- relaxation & mindfulness */

export type GuidedScript = {
  slug: string;
  name: string;
  minutes: number;
  bestFor: string;
  /** Each line is held on screen for `seconds` in the guided player. */
  lines: { text: string; seconds: number }[];
};

export const GUIDED_SCRIPTS: GuidedScript[] = [
  {
    slug: "body-scan",
    name: "Body scan",
    minutes: 6,
    bestFor:
      "Reconnecting with a body that treatment has made feel like an opponent. Also good for sleep.",
    lines: [
      { text: "Settle where you are. You do not need to sit up straight or change anything.", seconds: 20 },
      { text: "Let your eyes close, or rest them on one spot.", seconds: 15 },
      { text: "Take one slow breath out, longer than the breath in.", seconds: 15 },
      { text: "Bring your attention to your feet. Notice temperature, contact, weight.", seconds: 30 },
      { text: "Move up to your lower legs and knees. Nothing to change — only to notice.", seconds: 30 },
      { text: "Your thighs and hips. Let them be heavy against the chair or bed.", seconds: 30 },
      { text: "Your belly. Feel it rise and fall on its own.", seconds: 30 },
      { text: "Your chest. Notice the breath arriving without your help.", seconds: 30 },
      { text: "Your hands and arms. Let the fingers soften.", seconds: 30 },
      { text: "Your shoulders. Let them drop away from your ears.", seconds: 30 },
      { text: "Your jaw, your tongue, the space between your eyebrows. Let them loosen.", seconds: 30 },
      { text: "If part of your body hurts, notice it without arguing with it. It is allowed to be there.", seconds: 35 },
      { text: "Now hold the whole body at once, breathing.", seconds: 30 },
      { text: "When you are ready, open your eyes and take the calm with you.", seconds: 20 },
    ],
  },
  {
    slug: "pmr",
    name: "Progressive muscle relaxation",
    minutes: 7,
    bestFor: "Tension that has built around pain, and difficulty falling asleep.",
    lines: [
      { text: "Lie or sit comfortably. We will tense each muscle group for five seconds, then release.", seconds: 20 },
      { text: "If tensing hurts, skip that group and simply let it soften instead.", seconds: 15 },
      { text: "Curl your toes and tighten your feet… hold…", seconds: 15 },
      { text: "And release. Notice the difference between tight and loose.", seconds: 20 },
      { text: "Tighten your calves and thighs… hold…", seconds: 15 },
      { text: "And release. Let the legs go heavy.", seconds: 20 },
      { text: "Squeeze your hands into fists… hold…", seconds: 15 },
      { text: "And release. Let the fingers uncurl.", seconds: 20 },
      { text: "Pull your shoulders up towards your ears… hold…", seconds: 15 },
      { text: "And drop them. Let them fall further than you expected.", seconds: 20 },
      { text: "Screw up your face — eyes, jaw, forehead… hold…", seconds: 15 },
      { text: "And release. Let the face go completely slack.", seconds: 20 },
      { text: "Now scan for anything still holding, and let it go on the next out-breath.", seconds: 30 },
      { text: "Rest here for a few breaths before you move.", seconds: 30 },
    ],
  },
  {
    slug: "grounding",
    name: "5-4-3-2-1 grounding",
    minutes: 3,
    bestFor: "Panic, dissociation, and the 3am spiral. Works with eyes open, anywhere.",
    lines: [
      { text: "Sit down if you can. Both feet on the floor.", seconds: 15 },
      { text: "Look around and name five things you can see.", seconds: 30 },
      { text: "Now four things you can physically feel — chair, fabric, floor, air.", seconds: 30 },
      { text: "Three things you can hear, near and far.", seconds: 25 },
      { text: "Two things you can smell, or two smells you like.", seconds: 20 },
      { text: "One slow breath out, longer than the breath in.", seconds: 20 },
      { text: "You are here, in this room, in this moment. That is all you have to manage.", seconds: 20 },
    ],
  },
  {
    slug: "loving-kindness",
    name: "Kindness practice",
    minutes: 5,
    bestFor: "Self-criticism, caregiver guilt, resentment that has built up.",
    lines: [
      { text: "Sit comfortably and take one slow breath out.", seconds: 20 },
      { text: "Bring to mind someone who is easy to care about.", seconds: 20 },
      { text: "Silently wish them: may you be safe. May you be at ease. May you be free from suffering.", seconds: 35 },
      { text: "Now bring yourself to mind, as you are today.", seconds: 20 },
      { text: "Offer yourself the same words: may I be safe. May I be at ease.", seconds: 35 },
      { text: "If that feels false, try: may I be a little kinder to myself today.", seconds: 30 },
      { text: "Now bring to mind the person you are caring for, or who is caring for you.", seconds: 25 },
      { text: "May you be safe. May you be at ease. May you have enough support.", seconds: 35 },
      { text: "Let the words go and sit for a few breaths.", seconds: 25 },
    ],
  },
  {
    slug: "safe-place",
    name: "Safe place imagery",
    minutes: 5,
    bestFor: "Waiting rooms, scans, dialysis chairs, and nights in hospital.",
    lines: [
      { text: "Close your eyes if that feels safe, or lower your gaze.", seconds: 20 },
      { text: "Bring to mind a place where you have felt calm — real or imagined.", seconds: 25 },
      { text: "Look around it. What is in front of you? What is behind?", seconds: 30 },
      { text: "What can you hear there?", seconds: 25 },
      { text: "What is the temperature on your skin?", seconds: 25 },
      { text: "What can you smell?", seconds: 25 },
      { text: "Choose one word for this place. Say it silently as you breathe out.", seconds: 30 },
      { text: "You can come back here any time, in any room, by saying that word.", seconds: 25 },
      { text: "Take one more breath, then return to the room.", seconds: 20 },
    ],
  },
];

export const MINDFULNESS_TIPS: { title: string; body: string }[] = [
  {
    title: "One cup of tea",
    body: "Drink one drink a day with full attention — heat, weight, smell, taste. Two minutes of practice inside something you already do.",
  },
  {
    title: "Feet on the floor",
    body: "Whenever you sit in a waiting room, press both feet into the floor and notice the pressure for thirty seconds before you pick up your phone.",
  },
  {
    title: "Three-breath doorway",
    body: "Take three slow breaths before entering the sickroom, the clinic or your own front door. It stops the last hour spilling into the next one.",
  },
  {
    title: "Name the weather",
    body: "Ask yourself: what is the weather inside me right now? Naming it — stormy, flat, bright, foggy — creates a small, useful distance.",
  },
  {
    title: "Hands in water",
    body: "Washing up, washing hands, showering: use the temperature and sensation as an anchor. It is the most reliable free grounding tool there is.",
  },
];

/** Deterministic daily pick so the message is stable through the day. */
export function pickForDay<T>(items: T[], dateKey: string): T {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) % 100000;
  }
  return items[hash % items.length];
}
