export type CounsellingService = {
  slug: string;
  name: string;
  who: string;
  what: string;
  typical: string;
  goodFor: string[];
};

export const COUNSELLING_SERVICES: CounsellingService[] = [
  {
    slug: "one-to-one",
    name: "One-to-one counselling",
    who: "Patients, caregivers or family members, individually.",
    what: "Confidential sessions with a counsellor or psychologist experienced in physical illness. Usually 50 minutes, weekly or fortnightly, in person or by video.",
    typical: "6–12 sessions, reviewed as you go",
    goodFor: [
      "Anxiety, low mood and adjustment after diagnosis",
      "Fear of recurrence or of dying",
      "Body image and identity change",
      "Making treatment decisions under pressure",
    ],
  },
  {
    slug: "family",
    name: "Family counselling",
    who: "Two or more family members together, with or without the patient.",
    what: "A facilitated conversation about roles, decisions, information sharing and conflict. The therapist works for the family as a unit rather than for one person.",
    typical: "3–6 sessions, often longer gaps between them",
    goodFor: [
      "Disagreement about treatment or care decisions",
      "Uneven caring loads and resentment",
      "Talking to children about a parent's illness",
      "Preparing for the end of life together",
    ],
  },
  {
    slug: "couple",
    name: "Couple counselling",
    who: "Partners, where one is ill or one is the main caregiver.",
    what: "Support for a relationship carrying illness — communication, intimacy, mismatched coping styles and the shift from partner to carer.",
    typical: "6–8 sessions",
    goodFor: [
      "Becoming a carer to your partner",
      "Changes in intimacy and sexual function",
      "Grieving at different speeds",
      "Making decisions about the future together",
    ],
  },
  {
    slug: "caregiver",
    name: "Caregiver counselling",
    who: "Anyone in an unpaid caring role.",
    what: "Sessions that are about you — not a review of the patient. Focused on burnout, guilt, anger, boundaries and life outside the caring role.",
    typical: "6 sessions, plus check-ins",
    goodFor: [
      "Burnout and compassion fatigue",
      "Guilt about resentment or about respite",
      "Anticipatory grief",
      "Planning life after caring ends",
    ],
  },
  {
    slug: "children",
    name: "Children's counselling",
    who: "Children and teenagers affected by a family member's illness or death.",
    what: "Age-appropriate support using play, art and talking. Parents are usually involved in planning and review.",
    typical: "6–10 sessions",
    goodFor: [
      "A parent or grandparent with serious illness",
      "Anxiety, school refusal or regression",
      "Bereavement, including complicated or sudden loss",
      "Young carers taking on adult responsibility",
    ],
  },
  {
    slug: "bereavement",
    name: "Bereavement counselling",
    who: "Anyone after a death — including before it, in anticipatory grief.",
    what: "Space to tell the story of the loss, work through guilt and anger, and rebuild a life that carries the person with you.",
    typical: "6–12 sessions; specialist therapy for prolonged grief runs longer",
    goodFor: [
      "Grief that has not shifted after many months",
      "Sudden, traumatic or stigmatised death",
      "Grieving as a couple or as a family",
      "Anniversaries and firsts",
    ],
  },
  {
    slug: "group",
    name: "Group counselling",
    who: "Small facilitated groups: patients, caregivers, or the bereaved.",
    what: "6–10 people meeting weekly with a trained facilitator. The value is largely in discovering your reactions are shared.",
    typical: "8 weekly sessions",
    goodFor: [
      "Isolation and feeling that nobody understands",
      "Condition-specific groups (cancer, dialysis, dementia carers)",
      "Bereavement groups",
      "People who find one-to-one attention uncomfortable",
    ],
  },
  {
    slug: "crisis",
    name: "Crisis support",
    who: "Anyone at immediate risk, or in acute distress.",
    what: "Urgent, short contact by phone, text or in person — focused on safety now, not on longer-term work.",
    typical: "Immediate, single or repeated contacts",
    goodFor: [
      "Thoughts of suicide or self-harm",
      "A caregiver at breaking point",
      "Acute panic or dissociation",
      "The hours after devastating news",
    ],
  },
];

export type Professional = {
  role: string;
  does: string;
  askThemAbout: string;
};

export const CARE_TEAM: Professional[] = [
  {
    role: "Doctor / consultant",
    does: "Diagnosis, treatment plan, prognosis, referrals.",
    askThemAbout: "The aim of treatment, options, what to expect, and referral to anyone below.",
  },
  {
    role: "Specialist nurse",
    does: "Day-to-day guidance, symptom management, coordination.",
    askThemAbout: "Symptoms, side effects, what is urgent, and who to call out of hours.",
  },
  {
    role: "Psychologist / counsellor",
    does: "Assessment and talking therapy for patients, caregivers and families.",
    askThemAbout: "Anxiety, low mood, adjustment, trauma, fear of dying, family conflict.",
  },
  {
    role: "Registered dietitian",
    does: "Individualised nutrition assessment, therapeutic diets and supplements.",
    askThemAbout: "Weight change, appetite loss, swallowing, renal or diabetic diets, tube feeding.",
  },
  {
    role: "Social worker",
    does: "Benefits, housing, care packages, safeguarding, family support.",
    askThemAbout: "Money, care at home, respite, and entitlements you may not know exist.",
  },
  {
    role: "Physiotherapist",
    does: "Mobility, strength, breathlessness, falls prevention.",
    askThemAbout: "Safe exercise, fatigue pacing, equipment, getting up after a fall.",
  },
  {
    role: "Occupational therapist",
    does: "Daily function, home adaptation, energy conservation.",
    askThemAbout: "Aids, bathroom and stair safety, returning to work, pacing routines.",
  },
  {
    role: "Speech and language therapist",
    does: "Communication and swallowing.",
    askThemAbout: "Aphasia, voice, coughing while eating, texture-modified diets.",
  },
  {
    role: "Pharmacist",
    does: "Medication review, interactions, timing, side effects.",
    askThemAbout: "Simplifying regimens, what to take with food, and supplement interactions.",
  },
  {
    role: "Palliative care specialist",
    does: "Symptom control and quality of life at any stage of serious illness.",
    askThemAbout: "Pain, breathlessness, nausea, fatigue, advance care planning.",
  },
  {
    role: "Chaplain / spiritual care",
    does: "Meaning, faith, doubt, ritual — for people of any faith or none.",
    askThemAbout: "Existential distress, ceremonies, and someone to sit with the unanswerable.",
  },
];

export const COMMUNITY_SPACES = [
  {
    slug: "patients",
    name: "Patient peer support",
    blurb: "For people living with a diagnosis. Shared experience, practical tips, no advice-giving.",
  },
  {
    slug: "caregivers",
    name: "Caregiver forum",
    blurb: "The one place where 'I resent them today' is an ordinary sentence.",
  },
  {
    slug: "family",
    name: "Family discussion",
    blurb: "Partners, siblings, adult children and friends supporting someone who is ill.",
  },
  {
    slug: "bereaved",
    name: "Bereavement circle",
    blurb: "After a death — including anticipatory grief before one.",
  },
  {
    slug: "stories",
    name: "Survivor & long-haul stories",
    blurb: "Longer posts from people further down the road, written to be read at 3am.",
  },
  {
    slug: "memorial",
    name: "Memorial wall",
    blurb: "A place to name someone you have lost, and to have them acknowledged.",
  },
];

export const COMMUNITY_RULES = [
  "Anonymous by default — use any name you like, never your full identity.",
  "No medical advice. Share experience, not prescriptions or dosages.",
  "No promotion of treatments, products, or fundraising.",
  "No graphic description of methods of self-harm or suicide.",
  "Assume the person reading is having their worst day. Write accordingly.",
  "Everything is read by a moderator before it appears. Posts that could cause harm are not published.",
];
