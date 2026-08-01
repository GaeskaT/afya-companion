import type { Audience } from "./types";

export type ScoreBand = {
  min: number;
  max: number;
  label: string;
  tone: "good" | "info" | "warn" | "danger";
  meaning: string;
  guidance: string[];
};

export type ScreeningTool = {
  slug: string;
  name: string;
  fullName: string;
  audience: Audience[];
  intro: string;
  timeframe: string;
  /** Where the instrument comes from, and how it may be used. */
  provenance: string;
  options: { label: string; value: number }[];
  items: string[];
  /** Indices scored in reverse (used by the Perceived Stress Scale). */
  reverse?: number[];
  /** Score is transformed before banding (WHO-5 ×4, CBI ×25). */
  multiplier?: number;
  /** True when a high score is a good thing (wellbeing scales). */
  higherIsBetter?: boolean;
  /** Item that flags immediate risk — any answer above 0 shows crisis help. */
  riskItemIndex?: number;
  bands: ScoreBand[];
  afterwards: string[];
};

const FREQ_4: { label: string; value: number }[] = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

export const SCREENING_TOOLS: ScreeningTool[] = [
  {
    slug: "phq-9",
    name: "Depression",
    fullName: "PHQ-9 — Patient Health Questionnaire",
    audience: ["patient", "caregiver", "family"],
    intro:
      "Nine questions about how you have been feeling. Widely used in medical clinics, and validated in people with physical illness.",
    timeframe: "Over the last 2 weeks, how often have you been bothered by…",
    provenance:
      "PHQ-9 developed by Drs Spitzer, Williams and Kroenke with an educational grant from Pfizer. No permission is required to reproduce, translate or display it.",
    options: FREQ_4,
    riskItemIndex: 8,
    items: [
      "Little interest or pleasure in doing things",
      "Feeling down, depressed or hopeless",
      "Trouble falling or staying asleep, or sleeping too much",
      "Feeling tired or having little energy",
      "Poor appetite or overeating",
      "Feeling bad about yourself — or that you are a failure, or have let yourself or your family down",
      "Trouble concentrating on things, such as reading or watching television",
      "Moving or speaking so slowly that other people could have noticed — or the opposite, being so fidgety or restless that you have been moving around much more than usual",
      "Thoughts that you would be better off dead, or of hurting yourself in some way",
    ],
    bands: [
      {
        min: 0,
        max: 4,
        label: "Minimal",
        tone: "good",
        meaning: "Few or no symptoms of depression in the last fortnight.",
        guidance: [
          "Keep doing the daily check-in so you notice any drift early.",
          "Repeat this in a month, or sooner if something changes.",
        ],
      },
      {
        min: 5,
        max: 9,
        label: "Mild",
        tone: "info",
        meaning: "Some symptoms, at a level many people experience during illness.",
        guidance: [
          "Try the depression support module and behavioural activation.",
          "Protect sleep, movement and contact with people.",
          "Repeat in two weeks. If it rises, tell your care team.",
        ],
      },
      {
        min: 10,
        max: 14,
        label: "Moderate",
        tone: "warn",
        meaning: "A level at which treatment usually helps.",
        guidance: [
          "Show this score to your doctor or nurse and ask about talking therapy.",
          "Ask them to check physical contributors: pain, anaemia, thyroid, medication, sleep.",
          "Start one small scheduled activity daily — do not wait for motivation.",
        ],
      },
      {
        min: 15,
        max: 19,
        label: "Moderately severe",
        tone: "warn",
        meaning: "Symptoms are likely to be affecting most areas of daily life.",
        guidance: [
          "Book an appointment this week, not next month.",
          "Ask specifically about both therapy and medication.",
          "Tell one person close to you what this score was.",
        ],
      },
      {
        min: 20,
        max: 27,
        label: "Severe",
        tone: "danger",
        meaning: "A high level of symptoms. Please do not carry this alone.",
        guidance: [
          "Contact your doctor or care team today.",
          "If you have any thoughts of harming yourself, use the crisis page now.",
          "Ask someone to stay with you or check in on you daily this week.",
        ],
      },
    ],
    afterwards: [
      "Scores of 10 or more usually warrant a conversation with a clinician.",
      "Physical illness inflates the sleep, energy and appetite items — the mood, hopelessness and self-worth items matter most.",
    ],
  },
  {
    slug: "gad-7",
    name: "Anxiety",
    fullName: "GAD-7 — Generalised Anxiety Disorder scale",
    audience: ["patient", "caregiver", "family"],
    intro:
      "Seven questions about worry and tension. A score of 10 or more suggests anxiety worth treating.",
    timeframe: "Over the last 2 weeks, how often have you been bothered by…",
    provenance:
      "GAD-7 developed by Drs Spitzer, Kroenke, Williams and Löwe with an educational grant from Pfizer. No permission required to reproduce.",
    options: FREQ_4,
    items: [
      "Feeling nervous, anxious or on edge",
      "Not being able to stop or control worrying",
      "Worrying too much about different things",
      "Trouble relaxing",
      "Being so restless that it is hard to sit still",
      "Becoming easily annoyed or irritable",
      "Feeling afraid, as if something awful might happen",
    ],
    bands: [
      {
        min: 0,
        max: 4,
        label: "Minimal",
        tone: "good",
        meaning: "Little anxiety in the last two weeks.",
        guidance: ["Keep the breathing practice going before appointments and scans."],
      },
      {
        min: 5,
        max: 9,
        label: "Mild",
        tone: "info",
        meaning: "Noticeable anxiety, common around diagnosis and treatment.",
        guidance: [
          "Work through the anxiety management module.",
          "Try worry postponement and daily paced breathing.",
          "Plan for known triggers such as scans and results days.",
        ],
      },
      {
        min: 10,
        max: 14,
        label: "Moderate",
        tone: "warn",
        meaning: "Anxiety is probably interfering with daily life.",
        guidance: [
          "Raise it with your care team; ask about talking therapy.",
          "Check caffeine, steroids, and other medications that can worsen anxiety.",
          "Use grounding when the fear is not solvable, rather than more analysis.",
        ],
      },
      {
        min: 15,
        max: 21,
        label: "Severe",
        tone: "danger",
        meaning: "A high level of anxiety. Treatment usually helps considerably.",
        guidance: [
          "Contact your doctor this week.",
          "Ask about both psychological therapy and medication options.",
          "If you are having panic attacks, learn the ride-it-out approach in the anxiety module.",
        ],
      },
    ],
    afterwards: [
      "Anxiety and depression frequently travel together — consider taking the PHQ-9 as well.",
      "Breathlessness, palpitations and thyroid or steroid effects can mimic anxiety. Mention this score to your clinician.",
    ],
  },
  {
    slug: "stress",
    name: "Stress",
    fullName: "PSS-4 — Perceived Stress Scale (short form)",
    audience: ["patient", "caregiver", "family"],
    intro:
      "Four questions about how unpredictable and overwhelming life has felt. Quick enough to repeat weekly.",
    timeframe: "In the last month, how often have you…",
    provenance:
      "Perceived Stress Scale, Cohen et al. Free to use for non-commercial educational and research purposes.",
    options: [
      { label: "Never", value: 0 },
      { label: "Almost never", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Fairly often", value: 3 },
      { label: "Very often", value: 4 },
    ],
    reverse: [1, 2],
    items: [
      "Felt that you were unable to control the important things in your life",
      "Felt confident about your ability to handle your personal problems",
      "Felt that things were going your way",
      "Felt difficulties were piling up so high that you could not overcome them",
    ],
    bands: [
      {
        min: 0,
        max: 5,
        label: "Lower stress",
        tone: "good",
        meaning: "You have felt reasonably able to manage recently.",
        guidance: ["Keep your recovery habits in place — they are working."],
      },
      {
        min: 6,
        max: 9,
        label: "Moderate stress",
        tone: "info",
        meaning: "A typical level during active treatment or caring.",
        guidance: [
          "Sort your stressors into can change / can influence / cannot change.",
          "Protect one recovery activity every day.",
        ],
      },
      {
        min: 10,
        max: 16,
        label: "High stress",
        tone: "warn",
        meaning: "You are carrying more than the current supports can absorb.",
        guidance: [
          "Look at the load, not just your reaction to it — what can be delegated or dropped?",
          "Ask for practical help this week, specifically.",
          "If you are a caregiver, take the caregiver strain questionnaire too.",
        ],
      },
    ],
    afterwards: [
      "Stress scores move quickly with circumstances. Repeating weekly shows you what actually helps.",
    ],
  },
  {
    slug: "caregiver-burden",
    name: "Caregiver strain",
    fullName: "Modified Caregiver Strain Index",
    audience: ["caregiver", "family"],
    intro:
      "Thirteen yes/no questions about the practical and emotional strain of caring. Seven or more suggests significant strain.",
    timeframe: "Thinking about caring for this person, is any of the following true?",
    provenance:
      "Caregiver Strain Index (Robinson, 1983; modified by Thornton & Travis, 2003). Freely available for clinical and educational use.",
    options: [
      { label: "No", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Yes, regularly", value: 2 },
    ],
    items: [
      "My sleep is disturbed",
      "Caring is inconvenient — it takes a lot of time, or the travel is difficult",
      "Caring is a physical strain — lifting, transfers, being on my feet",
      "Caring is confining — it limits my free time and my ability to leave the house",
      "There have been family adjustments — the household has changed around the caring",
      "There have been changes to my personal plans — I have turned down work, study or trips",
      "There have been other demands on my time from other family members",
      "There have been emotional adjustments — arguments, tension, feeling on edge",
      "Some of their behaviour is upsetting — confusion, anger, repeated questions",
      "It is upsetting to see how much they have changed from the person they were",
      "There have been work adjustments — time off, reduced hours, lost income",
      "Caring is a financial strain",
      "I feel completely overwhelmed",
    ],
    bands: [
      {
        min: 0,
        max: 6,
        label: "Lower strain",
        tone: "good",
        meaning: "The load is currently manageable — keep it that way deliberately.",
        guidance: [
          "Keep one protected break each week before you need it.",
          "Repeat this monthly; strain rises quietly.",
        ],
      },
      {
        min: 7,
        max: 13,
        label: "Moderate strain",
        tone: "warn",
        meaning: "You are carrying a significant load and it is showing.",
        guidance: [
          "List every caring task and mark what could be shared, paid for or dropped.",
          "Ask for a carer's assessment or the local equivalent.",
          "Tell your own doctor that you are a caregiver.",
        ],
      },
      {
        min: 14,
        max: 26,
        label: "High strain",
        tone: "danger",
        meaning: "This level of strain is not sustainable and puts both of you at risk.",
        guidance: [
          "Ask for respite care — this week, not eventually.",
          "Take the burnout questionnaire as well.",
          "If you have felt you might harm them or yourself, use the crisis page now.",
        ],
      },
    ],
    afterwards: [
      "Strain is usually structural. Reducing the number of tasks helps more than trying to cope better.",
    ],
  },
  {
    slug: "burnout",
    name: "Burnout",
    fullName: "Personal burnout (Copenhagen Burnout Inventory)",
    audience: ["caregiver", "family"],
    intro:
      "Six questions about exhaustion. Scored out of 100 — 50 or above suggests burnout.",
    timeframe: "Over the last few weeks…",
    provenance:
      "Copenhagen Burnout Inventory, Kristensen et al. Free for non-commercial use.",
    options: [
      { label: "Never / almost never", value: 0 },
      { label: "Seldom", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Often", value: 3 },
      { label: "Always", value: 4 },
    ],
    multiplier: 25 / 6,
    items: [
      "How often do you feel tired?",
      "How often are you physically exhausted?",
      "How often are you emotionally exhausted?",
      "How often do you think: 'I can't take it any more'?",
      "How often do you feel worn out?",
      "How often do you feel weak and susceptible to illness?",
    ],
    bands: [
      {
        min: 0,
        max: 49,
        label: "Below the burnout threshold",
        tone: "good",
        meaning: "Tiredness is present but has not tipped into burnout.",
        guidance: [
          "Keep recovery in the week deliberately — it is what is protecting you.",
        ],
      },
      {
        min: 50,
        max: 74,
        label: "Moderate burnout",
        tone: "warn",
        meaning: "Exhaustion has become the baseline rather than the exception.",
        guidance: [
          "Hand over three tasks permanently, not temporarily.",
          "Arrange one full night of protected sleep.",
          "Book your own health appointment and say the word 'caregiver'.",
        ],
      },
      {
        min: 75,
        max: 100,
        label: "High burnout",
        tone: "danger",
        meaning: "You are running on empty. This is a safety issue for both of you.",
        guidance: [
          "Ask for emergency respite now.",
          "Speak to your doctor this week about your own health.",
          "If you have thoughts of harming yourself or the person you care for, use the crisis page.",
        ],
      },
    ],
    afterwards: [
      "Burnout is reversible, but not by willpower — it needs a change in load and recovery.",
    ],
  },
  {
    slug: "sleep",
    name: "Sleep quality",
    fullName: "Athens Insomnia Scale",
    audience: ["patient", "caregiver", "family"],
    intro:
      "Eight questions about sleep and next-day function. Six or above suggests insomnia worth addressing.",
    timeframe:
      "For the last month, if you have had a problem at least three times a week…",
    provenance:
      "Athens Insomnia Scale (Soldatos et al., 2000), based on ICD-10 criteria. Freely reproduced in clinical use.",
    options: [
      { label: "No problem", value: 0 },
      { label: "Slight problem", value: 1 },
      { label: "Marked problem", value: 2 },
      { label: "Very serious problem", value: 3 },
    ],
    items: [
      "Falling asleep at bedtime",
      "Waking during the night",
      "Waking earlier in the morning than you wanted",
      "Total sleep duration",
      "Overall quality of sleep",
      "Sense of wellbeing during the day",
      "Functioning during the day — physical and mental",
      "Sleepiness during the day",
    ],
    bands: [
      {
        min: 0,
        max: 5,
        label: "Within normal range",
        tone: "good",
        meaning: "Sleep is broadly holding up.",
        guidance: ["Keep a fixed wake time — it is the single strongest habit."],
      },
      {
        min: 6,
        max: 11,
        label: "Likely insomnia",
        tone: "warn",
        meaning: "Sleep problems at a level that affects daytime function.",
        guidance: [
          "Work through the sleep section: fixed wake time, capped naps, daylight, get out of bed if awake.",
          "Ask whether medication timing (steroids, diuretics) can be moved earlier.",
          "If pain wakes you, tell your team the time of night it happens.",
        ],
      },
      {
        min: 12,
        max: 24,
        label: "Severe sleep disturbance",
        tone: "danger",
        meaning: "Sleep is badly disrupted and is likely worsening pain and mood.",
        guidance: [
          "Ask your doctor about CBT for insomnia — more effective long-term than sleeping tablets.",
          "Ask for a review of pain control overnight.",
          "Consider screening for depression as well; the two are closely linked.",
        ],
      },
    ],
    afterwards: [
      "Sleeping tablets help short-term but lose effect; behavioural approaches hold up better over months.",
    ],
  },
  {
    slug: "wellbeing",
    name: "Quality of life",
    fullName: "WHO-5 Wellbeing Index",
    audience: ["patient", "caregiver", "family"],
    intro:
      "Five positive statements. Scored out of 100 — here, higher is better. Below 50 suggests poor wellbeing; below 29 warrants a depression screen.",
    timeframe: "Over the last two weeks…",
    provenance:
      "WHO-5 Wellbeing Index, World Health Organization. Free to use with acknowledgement.",
    options: [
      { label: "At no time", value: 0 },
      { label: "Some of the time", value: 1 },
      { label: "Less than half the time", value: 2 },
      { label: "More than half the time", value: 3 },
      { label: "Most of the time", value: 4 },
      { label: "All of the time", value: 5 },
    ],
    multiplier: 4,
    higherIsBetter: true,
    items: [
      "I have felt cheerful and in good spirits",
      "I have felt calm and relaxed",
      "I have felt active and vigorous",
      "I woke up feeling fresh and rested",
      "My daily life has been filled with things that interest me",
    ],
    bands: [
      {
        min: 0,
        max: 28,
        label: "Low wellbeing",
        tone: "danger",
        meaning: "A score in this range is a recognised trigger for a depression assessment.",
        guidance: [
          "Take the PHQ-9 as well and share both with your clinician.",
          "Start with one scheduled pleasant activity a day.",
        ],
      },
      {
        min: 29,
        max: 50,
        label: "Reduced wellbeing",
        tone: "warn",
        meaning: "Quality of life has dropped below the level associated with good functioning.",
        guidance: [
          "Look at sleep, pain and isolation first — they are the usual culprits.",
          "Add one thing to the week that is purely for pleasure.",
        ],
      },
      {
        min: 51,
        max: 100,
        label: "Reasonable wellbeing",
        tone: "good",
        meaning: "Wellbeing is holding up, even if the situation is hard.",
        guidance: ["Note what is working, and protect it when the next difficult phase comes."],
      },
    ],
    afterwards: [
      "This is the one questionnaire here where a higher score is better. Track it monthly to see the trend rather than the day.",
    ],
  },
  {
    slug: "grief",
    name: "Grief intensity",
    fullName: "Brief Grief Questionnaire",
    audience: ["family", "caregiver", "patient"],
    intro:
      "Five questions about how grief is affecting you. Designed for use some months after a death, not in the first weeks.",
    timeframe: "Since the death…",
    provenance:
      "Brief Grief Questionnaire (Shear et al.), used as a screen for complicated / prolonged grief.",
    options: [
      { label: "Not at all", value: 0 },
      { label: "Somewhat", value: 1 },
      { label: "A lot", value: 2 },
    ],
    items: [
      "How much are you having trouble accepting the death?",
      "How much does grief still interfere with your life?",
      "How much are you having images or thoughts of the death, or of the person when they died, that really bother you?",
      "Are there things you used to do that you now avoid because they remind you of them?",
      "How much are you feeling cut off or distant from other people since the death?",
    ],
    bands: [
      {
        min: 0,
        max: 4,
        label: "Grief within the expected range",
        tone: "good",
        meaning:
          "Painful, but moving in the way grief usually does. This is not a measure of how much you loved them.",
        guidance: [
          "Keep support around anniversaries and firsts.",
          "Peer groups help more than most people expect.",
        ],
      },
      {
        min: 5,
        max: 7,
        label: "Possible complicated grief",
        tone: "warn",
        meaning:
          "Some features associated with grief that stays acute rather than easing.",
        guidance: [
          "If it has been more than a year, ask your doctor about grief-specific therapy.",
          "Read 'When grief becomes complicated' in the bereavement section.",
        ],
      },
      {
        min: 8,
        max: 10,
        label: "Likely complicated grief",
        tone: "danger",
        meaning:
          "Grief at this intensity, months after the death, usually needs specific treatment — and responds to it.",
        guidance: [
          "Ask for referral to a bereavement service or a therapist trained in prolonged grief.",
          "If you have thoughts of ending your life to be with them, use the crisis page now.",
        ],
      },
    ],
    afterwards: [
      "In the first months after a death, high scores are expected. This screen is most useful from about six months onward.",
    ],
  },
];

export function findTool(slug: string) {
  return SCREENING_TOOLS.find((t) => t.slug === slug);
}

export function scoreTool(tool: ScreeningTool, answers: number[]): number {
  const raw = answers.reduce((sum, value, index) => {
    const max = Math.max(...tool.options.map((o) => o.value));
    const scored = tool.reverse?.includes(index) ? max - value : value;
    return sum + scored;
  }, 0);
  return Math.round(raw * (tool.multiplier ?? 1));
}

export function bandFor(tool: ScreeningTool, score: number): ScoreBand {
  return (
    tool.bands.find((b) => score >= b.min && score <= b.max) ??
    tool.bands[tool.bands.length - 1]
  );
}

export function maxScore(tool: ScreeningTool): number {
  const max = Math.max(...tool.options.map((o) => o.value));
  return Math.round(max * tool.items.length * (tool.multiplier ?? 1));
}
