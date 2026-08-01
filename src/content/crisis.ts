export const CRISIS_WARNING_SIGNS = {
  urgent: [
    "Thinking about ending your life, or making a plan",
    "Looking for means — hoarding medication, seeking a weapon",
    "Saying goodbye, giving away possessions, sorting affairs suddenly",
    "Feeling trapped, with no way out, or that others would be better off without you",
    "Sudden calm after a period of deep despair",
    "Thoughts of harming the person you care for",
  ],
  building: [
    "Withdrawing from everyone, including people you normally trust",
    "Sleeping far more or far less than usual for over a week",
    "Drinking or using substances noticeably more",
    "Reckless behaviour — driving, spending, physical risk",
    "Rage or agitation that is out of character",
    "Feeling nothing at all, for days",
    "Stopping treatment or medication without telling anyone",
  ],
};

export const SAFETY_PLAN_STEPS = [
  {
    title: "1. My warning signs",
    prompt:
      "Thoughts, feelings, situations or behaviours that tell me a crisis may be building.",
    placeholder: "e.g. I stop answering messages; I start planning how I'd do it",
  },
  {
    title: "2. Things I can do on my own",
    prompt:
      "Distraction and self-soothing that has worked before — not solutions, just ways through the next hour.",
    placeholder: "e.g. walk to the corner and back, shower, music, cold water on my face",
  },
  {
    title: "3. People and places that distract me",
    prompt: "Who or where can take my mind off it, even without discussing the crisis.",
    placeholder: "e.g. call my sister; sit in the café; go to the ward day room",
  },
  {
    title: "4. People I can tell",
    prompt: "The people I will actually say the words to. Names and numbers.",
    placeholder: "e.g. Anna 07…; my GP; the palliative care nurse",
  },
  {
    title: "5. Professionals and services",
    prompt: "Crisis line, GP, care team, out-of-hours number, emergency department.",
    placeholder: "e.g. local crisis team; helpline number; emergency number",
  },
  {
    title: "6. Making my environment safer",
    prompt:
      "What I will remove or hand to someone else, and who will hold it for me.",
    placeholder: "e.g. give my spare medication to David to keep for two weeks",
  },
  {
    title: "7. My reasons for living",
    prompt: "What I want to be here for. Read this first, before anything else.",
    placeholder: "e.g. my daughter; the dog; seeing the garden in spring",
  },
];

export type Helpline = {
  region: string;
  name: string;
  contact: string;
  note: string;
};

/**
 * A short, deliberately generic list. Numbers change and vary by country, so
 * the app always points people to their local emergency number first and to
 * an international directory rather than pretending to be exhaustive.
 */
export const HELPLINES: Helpline[] = [
  {
    region: "Anywhere",
    name: "Your local emergency number",
    contact: "999 / 112 / 911 / your national number",
    note: "For immediate danger to life. Use this first if someone is at risk right now.",
  },
  {
    region: "Anywhere",
    name: "Find a Helpline (international directory)",
    contact: "findahelpline.com",
    note: "Free, confidential helplines listed by country, in over 100 countries.",
  },
  {
    region: "United Kingdom & Ireland",
    name: "Samaritans",
    contact: "116 123 (free, 24/7)",
    note: "Any distress, not only suicidal thoughts. Also jo@samaritans.org.",
  },
  {
    region: "United States",
    name: "988 Suicide & Crisis Lifeline",
    contact: "Call or text 988",
    note: "24/7 crisis support, including for caregivers and grief.",
  },
  {
    region: "Canada",
    name: "9-8-8 Suicide Crisis Helpline",
    contact: "Call or text 988",
    note: "24/7, English and French.",
  },
  {
    region: "Australia",
    name: "Lifeline",
    contact: "13 11 14",
    note: "24/7 crisis support and suicide prevention.",
  },
  {
    region: "Kenya",
    name: "Befrienders Kenya",
    contact: "+254 722 178 177",
    note: "Emotional support and suicide prevention.",
  },
  {
    region: "Nigeria",
    name: "Nigeria Suicide Prevention Initiative",
    contact: "+234 806 210 6493",
    note: "Counselling and crisis support.",
  },
  {
    region: "South Africa",
    name: "SADAG",
    contact: "0800 567 567",
    note: "South African Depression and Anxiety Group helpline.",
  },
  {
    region: "India",
    name: "Tele-MANAS",
    contact: "14416",
    note: "National 24/7 mental health support line.",
  },
];

export const IMMEDIATE_GUIDANCE = [
  {
    title: "If you are in danger right now",
    steps: [
      "Call your local emergency number, or go to your nearest emergency department.",
      "Tell someone in the room with you, in plain words: 'I am not safe right now.'",
      "Ask someone to stay with you until help arrives.",
      "Hand over medication, keys or anything you might use, to another person.",
      "Do not use alcohol or drugs — they make impulsive acts far more likely.",
    ],
  },
  {
    title: "If you are worried about someone else",
    steps: [
      "Ask directly: 'Are you thinking about ending your life?' Asking does not plant the idea; it reduces risk.",
      "Listen without arguing, minimising or rushing to fix.",
      "Do not promise to keep it secret. Say you care too much to keep this to yourself.",
      "Help them remove means, and stay with them or arrange for someone to.",
      "Contact their doctor, crisis team or emergency services the same day.",
    ],
  },
  {
    title: "If a caregiver is at breaking point",
    steps: [
      "Say it out loud to a professional today — GP, care team, crisis line, social worker.",
      "Ask for emergency respite. It exists, and this is what it is for.",
      "Separate yourself from the caring task for a few hours; ask anyone available.",
      "If you have hurt or fear you may hurt the person you care for, tell the care team — they can protect both of you.",
    ],
  },
];
