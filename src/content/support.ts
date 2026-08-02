import type { Topic } from "./types";

/* ===========================================================================
   PATIENT SUPPORT
   =========================================================================== */

export const PATIENT_TOPICS: Topic[] = [
  {
    slug: "emotional-check-ins",
    title: "Emotional check-ins",
    summary:
      "A daily minute of honest noticing. Naming how you feel is not self-indulgent — it is clinical information about your own recovery.",
    audience: ["patient"],
    cue: "Start here each morning",
    blocks: [
      {
        heading: "Why a daily check-in helps",
        body: [
          "Illness compresses life into appointments, results and side effects. Feelings get postponed until they arrive all at once, usually at 3am.",
          "A short daily check-in does three things: it catches a downward drift early, it gives your care team something concrete to work with, and it reminds you that a bad hour is not a bad life.",
        ],
      },
      {
        heading: "What to notice",
        list: [
          "Mood — where you sit today on a 1 to 5 scale, without justifying the number.",
          "Body — pain, fatigue, nausea, breathlessness, appetite.",
          "Mind — what thought keeps returning today.",
          "Fuel — did you eat, drink and rest at all.",
          "Contact — did you speak to another human being today.",
        ],
      },
      {
        heading: "Reading your own pattern",
        body: [
          "One low day means very little. A run of low days, or a slow slide across two weeks, means something — that is when to raise it with your doctor or counsellor, or take a screening questionnaire.",
          "Watch also for the opposite: days that lift. Note what was different. Those details are the raw material of your coping plan.",
        ],
      },
    ],
    practices: [
      {
        title: "The 60-second check-in",
        minutes: 1,
        steps: [
          "Sit down. Feet flat. One slow breath out.",
          "Answer out loud or in the app: how am I, really, on a scale of 1 to 5?",
          "Name one feeling in one word — no explanation required.",
          "Name one thing you need in the next hour: rest, water, company, pain relief, quiet.",
          "Do that one thing, or ask someone for it.",
        ],
      },
    ],
    related: [
      { href: "/tools/check-in", label: "Do today's check-in" },
      { href: "/tools/screening", label: "Screening questionnaires" },
    ],
  },
  {
    slug: "anxiety-and-stress",
    title: "Anxiety and stress management",
    summary:
      "Illness produces genuine uncertainty, and anxiety is the mind's response to uncertainty. The goal is not zero anxiety — it is anxiety that no longer runs the day.",
    audience: ["patient", "caregiver", "family"],
    cue: "When your mind won't stop racing",
    blocks: [
      {
        heading: "What anxiety feels like in illness",
        list: [
          "Scanning your body constantly for the next symptom.",
          "Dread building for days before a scan, test or clinic visit ('scanxiety').",
          "Racing thoughts at night; waking at 3am with the worst-case version.",
          "Physical signs — tight chest, fast heart, shaky hands, churning stomach — that can be mistaken for the illness itself.",
          "Avoiding appointments, phone calls or results because opening them feels unbearable.",
        ],
      },
      {
        heading: "The two questions that sort worry",
        body: [
          "Ask: is this a problem I can act on today, or a fear I can only tolerate? Both are legitimate, but they need opposite responses.",
          "Actionable problems get a plan: one next step, written down, with a time. Unactionable fears get grounding, breathing and company — not more analysis. Trying to solve an unsolvable fear is what keeps you awake.",
        ],
      },
      {
        heading: "Worry time",
        body: [
          "Rather than fighting worry all day, book it. Fifteen minutes, same time each day, sitting up, notebook open. When worry arrives outside that window, write one line and tell yourself: not now, at 6pm.",
          "Most people find that by 6pm, half the list has dissolved. The half that remains is usually the part worth taking to your care team.",
        ],
      },
      {
        heading: "Before a scan or results appointment",
        list: [
          "Book the appointment as early in the day as possible so you are not waiting all day.",
          "Take someone with you — a second pair of ears remembers what you will not.",
          "Write your three questions down beforehand; anxiety erases them in the room.",
          "Plan the hour afterwards deliberately: a walk, a call, a meal. Do not go straight back to work or straight home alone.",
        ],
      },
    ],
    practices: [
      {
        title: "5-4-3-2-1 grounding",
        minutes: 3,
        steps: [
          "Name five things you can see right now.",
          "Four things you can physically feel — chair, blanket, floor, fabric.",
          "Three things you can hear.",
          "Two things you can smell, or two smells you like.",
          "One slow breath out, longer than the breath in.",
        ],
      },
      {
        title: "Longer out-breath",
        minutes: 4,
        steps: [
          "Breathe in through the nose for a count of four.",
          "Breathe out through the mouth for a count of six or seven.",
          "Keep the shoulders still; let the belly do the moving.",
          "Repeat for two to four minutes — the out-breath is what calms the nervous system.",
        ],
      },
    ],
    related: [
      { href: "/tools/breathing", label: "Guided breathing" },
      { href: "/tools/screening/gad-7", label: "Anxiety questionnaire (GAD-7)" },
      { href: "/support/modules/anxiety-management", label: "Anxiety module" },
    ],
  },
  {
    slug: "low-mood-and-depression",
    title: "Low mood and depression",
    summary:
      "Sadness about serious illness is normal. Depression is different — it flattens everything, including the things that used to help — and it is treatable.",
    audience: ["patient", "caregiver", "family"],
    cue: "When nothing feels worth doing",
    blocks: [
      {
        heading: "Sadness or depression?",
        body: [
          "Grief and sadness come in waves; between the waves you can still be moved, amused, comforted. Depression is flatter and more constant — the waves stop, and so does pleasure.",
          "In physical illness the picture is muddier, because fatigue, poor appetite and disturbed sleep can come from treatment as well as from mood. That is exactly why the emotional questions matter: loss of interest, hopelessness, worthlessness and guilt point to depression more reliably than tiredness does.",
        ],
      },
      {
        heading: "Signs worth acting on",
        list: [
          "Two weeks or more of low mood or loss of interest in nearly everything.",
          "Believing you are a burden, or that your family would be better off without you.",
          "Withdrawing from people who matter to you.",
          "Stopping treatment, or not caring whether treatment works.",
          "Any thought of ending your life — this needs same-day help, not a wait-and-see.",
        ],
      },
      {
        heading: "What actually helps",
        body: [
          "Depression tells you to wait until you feel like doing something. That order is backwards: in depression, action comes first and motivation follows. This is called behavioural activation and it is one of the best-evidenced treatments there is.",
          "Start absurdly small and schedule it: sit outside for five minutes at 10am; phone one person on Tuesday; wash and dress before noon. Rate mood before and after. You are gathering evidence against the belief that nothing helps.",
        ],
      },
      {
        heading: "Treatment options to ask about",
        list: [
          "Talking therapy — CBT, ACT, or counselling adapted for physical illness.",
          "Antidepressant medication, checked against your current drugs for interactions.",
          "Treating the physical drivers: pain, anaemia, thyroid problems, poor sleep, low vitamin D.",
          "Palliative or supportive care teams, who are experts in symptom and mood management at any stage — not only at the end of life.",
        ],
      },
    ],
    practices: [
      {
        title: "One small thing",
        minutes: 10,
        steps: [
          "Choose one activity that used to give you pleasure or a sense of achievement.",
          "Shrink it until it is almost too easy — five minutes, not an afternoon.",
          "Put it in the day at a specific time.",
          "Rate your mood 1–5 before and after. Write both numbers down.",
          "Repeat daily for a week before you judge whether it works.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening/phq-9", label: "Depression questionnaire (PHQ-9)" },
      { href: "/support/modules/depression-support", label: "Depression module" },
      { href: "/care/crisis", label: "Crisis support" },
    ],
  },
  {
    slug: "pain-and-distress-journal",
    title: "Pain and emotional distress journal",
    summary:
      "Pain is never only physical. A journal that tracks both the sensation and the feeling around it gives your team something far more useful than 'it's been bad'.",
    audience: ["patient"],
    blocks: [
      {
        heading: "Why write it down",
        body: [
          "Memory for pain is unreliable — it is dominated by the worst moment and the most recent one. A written record shows the actual pattern: when pain peaks, what precedes it, what helps.",
          "Distress amplifies pain and pain amplifies distress. Recording both lets you and your clinicians see which one is driving on any given day.",
        ],
      },
      {
        heading: "What to record",
        list: [
          "Intensity now (0–10) and at its worst today.",
          "Where it is, and what it feels like — burning, aching, stabbing, cramping.",
          "What you were doing when it started or worsened.",
          "Medication taken, dose and time, and how much it helped.",
          "Mood and stress level alongside it.",
          "What made it easier, even slightly.",
        ],
      },
      {
        heading: "Taking it to your appointment",
        body: [
          "Bring the last two weeks. Highlight the three worst episodes and the pattern you noticed. Say plainly what you want: better background control, something for breakthrough pain, or help with the fear that comes with it.",
          "If pain is not controlled after two changes of plan, ask for referral to a pain or palliative care service. That is a normal, appropriate request — not a last resort.",
        ],
      },
    ],
    related: [
      { href: "/tools/journal", label: "Open the journal" },
      { href: "/support/conditions/chronic-pain", label: "Chronic pain support" },
    ],
  },
  {
    slug: "relaxation-and-breathing",
    title: "Guided relaxation and breathing",
    summary:
      "Slow breathing is the one lever you can pull on your own nervous system at any moment, in any ward, without equipment or permission.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "How it works",
        body: [
          "Fear speeds the breath and shortens the out-breath. Deliberately lengthening the out-breath signals safety through the vagus nerve, slowing the heart and loosening the muscles that pain has tightened.",
          "It will not remove the illness. It reliably takes the edge off the panic that sits on top of it, and it is free.",
        ],
      },
      {
        heading: "Choosing a technique",
        list: [
          "4–6 breathing — in for 4, out for 6. The everyday default; safe for almost everyone.",
          "Box breathing — 4 in, 4 hold, 4 out, 4 hold. Good for focus before a procedure.",
          "Pursed-lip breathing — in through the nose, out slowly through pursed lips. Best if you are breathless, or have lung disease.",
          "Progressive muscle relaxation — tense and release each muscle group. Best for pain-related tension and for sleep.",
          "Body scan — attention moves slowly through the body without trying to change anything. Best for reconnecting with a body that treatment has made feel like an enemy.",
        ],
      },
      {
        heading: "If breathwork makes you anxious",
        body: [
          "For some people — especially with breathlessness, trauma, or panic — focusing on the breath increases fear. That is common and it is not failure.",
          "Use an external anchor instead: cold water on the wrists, feet pressed into the floor, naming objects in the room, holding something textured. Grounding through the senses does the same job.",
        ],
      },
    ],
    related: [
      { href: "/tools/breathing", label: "Start a guided session" },
      { href: "/support/patient/sleep", label: "Sleep" },
    ],
  },
  {
    slug: "hope-and-resilience",
    title: "Hope and resilience",
    summary:
      "Hope is not optimism about outcomes. It is the ability to keep wanting things, and to keep finding routes to them, when the map has changed.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Hope can be rebuilt, not just felt",
        body: [
          "Hope therapy describes hope as three parts: goals worth having, pathways to reach them, and the belief that you can walk one. Illness usually damages the pathways rather than the wanting.",
          "So the work is practical: keep the goal, find a different route, or resize the goal until a route exists. That is not giving up — it is what keeps hope from breaking.",
        ],
      },
      {
        heading: "Hope that survives bad news",
        list: [
          "Hold more than one hope at a time — for cure, and for a good week; for more years, and for a peaceful afternoon.",
          "Attach hope to things partly in your control: comfort, connection, dignity, saying what needs saying.",
          "Let hope be specific and near. 'I hope to sit in the garden on Sunday' survives a bad scan; 'I hope everything goes back to normal' does not.",
          "Realism and hope can coexist. Preparing for the worst does not cancel hoping for the best — many people do both, and it is protective.",
        ],
      },
      {
        heading: "Resilience is a supply, not a trait",
        body: [
          "People are not born resilient or fragile. Resilience runs on supplies: sleep, food, pain control, money, information, and above all relationships. When someone 'stops coping', a supply has usually run out.",
          "Ask which supply is lowest this week and refill that one. It is far more effective than trying to be stronger.",
        ],
      },
    ],
    practices: [
      {
        title: "Three routes",
        minutes: 10,
        steps: [
          "Name one thing you still want this month — small and concrete.",
          "Write three possible routes to it, including modified and assisted versions.",
          "Circle the one that is possible on a bad day, not just a good one.",
          "Name the first step and when you will take it.",
          "Name who could help with it, and ask them.",
        ],
      },
    ],
    related: [
      { href: "/support/modules/hope-therapy", label: "Hope therapy module" },
      { href: "/tools/goals", label: "Set a goal" },
    ],
  },
  {
    slug: "self-esteem",
    title: "Self-esteem and identity",
    summary:
      "Illness changes bodies, roles and independence. Rebuilding self-worth means separating what you can do from who you are.",
    audience: ["patient"],
    blocks: [
      {
        heading: "The blows to self-worth",
        list: [
          "Body changes — scars, weight change, hair loss, stomas, amputation, swelling.",
          "Loss of role — earner, cook, driver, parent who does the school run.",
          "Dependence on others for intimate care.",
          "Feeling looked at, or feeling invisible.",
          "The belief that you are now a burden.",
        ],
      },
      {
        heading: "Untangling worth from function",
        body: [
          "Most of us quietly measure our worth by output. Illness cuts output, so worth appears to fall. But the people you love are not valuable to you because of their productivity, and the same rule applies to you.",
          "Try listing what people actually rely on you for. It is rarely the tasks. It is your judgement, humour, memory of the family, the way you listen.",
        ],
      },
      {
        heading: "Body image after treatment",
        list: [
          "Look at the changed part deliberately and briefly, with support, rather than avoiding mirrors for months.",
          "Ask your team about practical options — prosthetics, scar care, lymphoedema garments, dental and skin support, reconstruction.",
          "Decide in advance what you will say when someone comments; a prepared one-liner removes the dread.",
          "Talk about intimacy — with your partner and with your clinician. Sexual side effects of treatment are common, rarely raised, and often manageable.",
        ],
      },
    ],
    practices: [
      {
        title: "Evidence log",
        minutes: 5,
        steps: [
          "Write the harsh belief in your own words — for example, 'I am useless now.'",
          "List evidence for it. Be honest.",
          "List evidence against it from the last week, including small things.",
          "Write a fairer statement that accounts for both.",
          "Read it back tomorrow and add one new piece of evidence.",
        ],
      },
    ],
    related: [
      { href: "/support/modules/cognitive-restructuring", label: "Cognitive restructuring" },
      { href: "/care/counselling", label: "Talk to a counsellor" },
    ],
  },
  {
    slug: "sleep",
    title: "Sleep when you are unwell",
    summary:
      "Pain, steroids, worry and hospital noise all break sleep — and broken sleep worsens pain, mood and appetite. Small structural changes work better than trying harder.",
    audience: ["patient", "caregiver"],
    blocks: [
      {
        heading: "What is breaking your sleep",
        list: [
          "Physical: pain, breathlessness, itching, needing to pass urine, hot flushes, cramps.",
          "Medication: steroids taken late, diuretics, some antidepressants, opioid withdrawal at night.",
          "Mental: worry that only surfaces when the house goes quiet.",
          "Habit: napping long into the afternoon, then lying awake at 2am.",
          "Environment: hospital lights, monitors, a partner's disturbed sleep.",
        ],
      },
      {
        heading: "The changes that actually move the needle",
        steps: [
          "Fix the wake time, not the bedtime. Get up at the same hour every day, including weekends.",
          "Cap naps at 30 minutes and take them before 3pm.",
          "Ask for steroids and diuretics to be scheduled earlier in the day where clinically possible.",
          "Get daylight on your face within an hour of waking — even through a window.",
          "If you are awake more than 20 minutes, get out of bed, sit in low light and do something dull. Return when sleepy.",
          "Keep the bed for sleep and intimacy. Scrolling in bed teaches the brain that bed is for alertness.",
        ],
      },
      {
        heading: "Worry at 3am",
        body: [
          "Keep a notepad by the bed. Write the thought in a single line and put the pen down — you are not solving it now, you are parking it for the morning.",
          "If pain wakes you regularly, that is a treatment problem, not a sleep problem. Tell your team the time of night it happens; background pain relief may need adjusting.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening/sleep", label: "Sleep quality questionnaire" },
      { href: "/tools/breathing", label: "Wind-down relaxation" },
    ],
  },
  {
    slug: "spiritual-care",
    title: "Spiritual care (optional)",
    summary:
      "For many people illness raises questions that are not medical: why this, what now, what is my life for. Engage with this section only if it is meaningful to you.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Spiritual distress is real distress",
        body: [
          "Anger at God, loss of faith, feeling abandoned or punished, or a sudden hunger for meaning — these are common, and they affect wellbeing as much as anxiety does.",
          "Spiritual care is not only for religious people. It covers anything that gives life meaning: nature, music, family, service, land, ancestors, work.",
        ],
      },
      {
        heading: "Questions people find useful",
        list: [
          "What has carried me through hard things before?",
          "What do I want to be remembered for?",
          "Is there anything I need to say, forgive, or be forgiven for?",
          "What still gives me a sense of awe or peace, even now?",
          "What do I want at the end, in terms of ritual, prayer or presence?",
        ],
      },
      {
        heading: "Who can help",
        list: [
          "Hospital chaplains and spiritual care teams — usually available to people of any faith or none, free, and used to sitting with doubt.",
          "Your own faith leader, imam, pastor, priest or elder.",
          "A counsellor comfortable with existential and meaning-focused work.",
          "Community and cultural elders, where that is your tradition.",
        ],
      },
    ],
    related: [
      { href: "/support/modules/meaning-making", label: "Meaning-making module" },
      { href: "/care/team", label: "Your care team" },
    ],
  },
  {
    slug: "affirmations",
    title: "Positive affirmations that are not hollow",
    summary:
      "Affirmations only work when you can believe them. The trick is to aim slightly ahead of where you are, not at a fantasy.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Why 'everything is fine' backfires",
        body: [
          "Research on self-statements is consistent: for people with low self-esteem, grand positive statements they do not believe make them feel worse, because the mind immediately produces counter-evidence.",
          "Believable, process-focused statements work better — they describe effort and values rather than guaranteed outcomes.",
        ],
      },
      {
        heading: "Better shapes to use",
        list: [
          "'This is hard, and I am still here.'",
          "'I can do the next ten minutes.'",
          "'I am allowed to rest without earning it.'",
          "'My worth is not measured by what I produced today.'",
          "'I can ask for help; that is what people who love me are for.'",
          "'I will feel differently about this in three hours.'",
        ],
      },
      {
        heading: "Making them stick",
        body: [
          "Attach one to an existing habit — the kettle boiling, the first tablet of the day, the walk to the car. Say it out loud once. Repetition in context beats intensity.",
        ],
      },
    ],
    related: [{ href: "/tools/gratitude", label: "Daily reflection" }],
  },
  {
    slug: "goals-with-illness",
    title: "Setting goals despite illness",
    summary:
      "Goals keep a life pointed forward. With illness they need to be smaller, more flexible, and immune to a bad week.",
    audience: ["patient", "caregiver"],
    blocks: [
      {
        heading: "Why goals matter more, not less",
        body: [
          "Without goals, days become a sequence of appointments and symptoms. A goal — however modest — restores the sense that you are living a life rather than managing a disease.",
        ],
      },
      {
        heading: "How to set one that survives",
        steps: [
          "Choose something you actually want, not something you think you should want.",
          "Make it specific and small enough to do in a fortnight.",
          "Write a good-day version and a bad-day version of the same goal.",
          "Name the first step and put it in the calendar.",
          "Name one person who will know about it.",
          "Plan the setback: 'if I am admitted or too unwell, I will pause, not cancel.'",
        ],
      },
      {
        heading: "Examples that work",
        list: [
          "Walk to the end of the road three times this week (bad-day version: stand outside for two minutes).",
          "Record one family story a week for my grandchildren.",
          "Cook one meal a week myself (bad-day version: choose the meal and sit with whoever cooks).",
          "Reply to one message a day rather than none.",
          "Sort the paperwork one folder at a time, ten minutes at a time.",
        ],
      },
    ],
    related: [
      { href: "/tools/goals", label: "Create a goal" },
      { href: "/support/modules/problem-solving", label: "Problem-solving skills" },
    ],
  },
];

/* ===========================================================================
   CAREGIVER SUPPORT
   =========================================================================== */

export const CAREGIVER_TOPICS: Topic[] = [
  {
    slug: "caregiver-stress",
    title: "Caregiver stress",
    summary:
      "Caregiving is unpaid, unscheduled, and often invisible. Stress here is not weakness — it is a predictable response to an unreasonable load.",
    audience: ["caregiver"],
    cue: "If you are running on empty",
    blocks: [
      {
        heading: "What caregiver stress looks like",
        list: [
          "Permanent alertness — sleeping with one ear open, jumping at every sound.",
          "Irritability with the person you are caring for, followed by guilt.",
          "Neglecting your own appointments, medication and meals.",
          "Losing interest in anything outside the caring role.",
          "Physical symptoms: headaches, back pain, infections, high blood pressure.",
          "The private thought — 'I can't do this much longer' — that you tell no one.",
        ],
      },
      {
        heading: "The load is usually structural",
        body: [
          "Most caregiver stress is not about attitude. It is about the number of tasks, the absence of relief, and money. When you can, tackle the structure: fewer tasks, more hands, more information.",
          "Make a list of every caring task in a week. Mark each one: must be me / could be anyone / could be paid or provided. Almost everyone finds items in the second and third columns that they have never delegated.",
        ],
      },
      {
        heading: "Small levers that help",
        list: [
          "Fix one predictable break a week and defend it like a medical appointment.",
          "Ask for a carer's assessment or the equivalent local entitlement — many caregivers never claim what exists.",
          "Set up a shared calendar so offers of help become specific slots, not vague sympathy.",
          "Batch the admin: one hour, once a week, for calls, forms and prescriptions.",
          "Keep your own doctor informed that you are a caregiver. It changes what they offer you.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening/caregiver-burden", label: "Caregiver burden questionnaire" },
      { href: "/support/caregiver/asking-for-help", label: "Asking for help" },
    ],
  },
  {
    slug: "burnout",
    title: "Burnout",
    summary:
      "Burnout is exhaustion plus detachment plus a sense of ineffectiveness. It is the end point of chronic strain without recovery — and it is reversible.",
    audience: ["caregiver", "family"],
    blocks: [
      {
        heading: "The three components",
        list: [
          "Exhaustion — emptied out, physically and emotionally, and sleep does not fix it.",
          "Detachment — going through the motions, feeling numb or cynical about caring tasks or the person.",
          "Ineffectiveness — 'nothing I do makes any difference', even when it plainly does.",
        ],
      },
      {
        heading: "Red flags that need action this week",
        list: [
          "You have shouted at, roughly handled, or wanted to hurt the person you care for.",
          "You are drinking more, or using medication to get through the day.",
          "You have thoughts of harming yourself, or of not waking up.",
          "You are making medication or safety errors you would not normally make.",
          "You have not left the house in more than a week.",
        ],
      },
      {
        heading: "Recovery is structural, then personal",
        steps: [
          "Get one full night of protected sleep — arrange cover, even once.",
          "Hand over three tasks permanently, not temporarily.",
          "Book your own health appointment, and say the word 'caregiver' out loud in it.",
          "Re-establish one thing that is yours: an hour a week, non-negotiable.",
          "Get support that is about you, not about the patient — a caregiver group or counsellor.",
        ],
      },
      {
        heading: "If you have thought about hurting them or yourself",
        body: [
          "This happens to ordinary, loving people under extreme strain, and it is a signal that the situation is unsafe rather than that you are a bad person. Tell someone today — your doctor, the care team, a crisis line. Respite and support exist for exactly this.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening/burnout", label: "Burnout questionnaire" },
      { href: "/care/crisis", label: "Crisis support" },
    ],
  },
  {
    slug: "compassion-fatigue",
    title: "Compassion fatigue",
    summary:
      "The cost of caring: when repeated exposure to someone else's suffering wears down your capacity to feel it without shutting down.",
    audience: ["caregiver", "family"],
    blocks: [
      {
        heading: "How it differs from burnout",
        body: [
          "Burnout builds slowly from workload and lack of control. Compassion fatigue can arrive suddenly, and comes specifically from absorbing another person's pain and fear.",
          "It shows up as emotional numbness, intrusive images of the person's worst moments, avoidance of the sickroom, and a sense that you have lost your warmth.",
        ],
      },
      {
        heading: "What protects you",
        list: [
          "Boundaries around the caring role: hours, tasks, and one room in the house that is not a hospital.",
          "Debriefing — saying the hard parts out loud to someone who is not the patient.",
          "Contact with people who need nothing from you.",
          "Rituals that mark the end of caring hours: a shower, a walk, changing clothes.",
          "Noticing satisfaction where it exists. Compassion satisfaction is the counterweight and it is measurable.",
        ],
      },
      {
        heading: "Numbness is not failure",
        body: [
          "Going flat is a protective reflex, not a character defect. Treat it as a signal to reduce exposure and increase recovery, the same way you would treat a strained muscle.",
        ],
      },
    ],
    related: [
      { href: "/care/community", label: "Caregiver forum" },
      { href: "/care/counselling", label: "Caregiver counselling" },
    ],
  },
  {
    slug: "self-care",
    title: "Self-care that fits a caring day",
    summary:
      "Not spa days. Ten-minute, low-cost, interruptible things that keep the machine running.",
    audience: ["caregiver"],
    blocks: [
      {
        heading: "The non-negotiable five",
        list: [
          "Eat something with protein before noon.",
          "Drink water at every medication round you do for someone else.",
          "Step outside once a day, even for three minutes.",
          "Keep your own medical appointments and prescriptions.",
          "Speak to one adult a day about something that is not the illness.",
        ],
      },
      {
        heading: "Anchoring habits to what you already do",
        body: [
          "Attach the new habit to an existing one: stretch while the kettle boils, breathe slowly while waiting for the pharmacy, walk one lap of the car park before driving home. Caregivers do not have empty time, so borrow the time you already spend waiting.",
        ],
      },
      {
        heading: "Rest is a treatment, not a treat",
        body: [
          "You will hear 'you must look after yourself' constantly and it will start to sound like another task. Reframe it: your rest is part of the patient's care plan, because their care depends on you being functional next month.",
        ],
      },
    ],
    related: [
      { href: "/nutrition/caregivers", label: "Nutrition for caregivers" },
      { href: "/tools/check-in", label: "Your own check-in" },
    ],
  },
  {
    slug: "emotional-support",
    title: "Your own emotions as a caregiver",
    summary:
      "Grief, anger, resentment, relief and love, often in the same hour. All of it is normal; none of it makes you a bad person.",
    audience: ["caregiver", "family"],
    blocks: [
      {
        heading: "The feelings nobody admits to",
        list: [
          "Resentment towards the person who is ill.",
          "Wishing it were over — for them, or for you.",
          "Relief when they are admitted to hospital.",
          "Jealousy of friends whose lives continue normally.",
          "Anger at other relatives who visit once and are praised.",
          "Grief that started long before any death.",
        ],
      },
      {
        heading: "Why they are normal",
        body: [
          "Ambivalence is the signature of love under pressure. You can be devoted and exhausted, loving and furious, at the same time. Feelings are not intentions, and having them changes nothing about the care you give.",
          "What harms people is not the feeling but the silence around it. Said out loud to a safe person, most of these lose their charge within minutes.",
        ],
      },
      {
        heading: "Where to say it",
        list: [
          "A caregiver support group — the one place these sentences are unremarkable.",
          "A counsellor of your own, separate from the patient's team.",
          "An anonymous space, if naming it aloud feels impossible yet.",
          "A journal, if you are not ready to say it to anyone.",
        ],
      },
    ],
    related: [
      { href: "/care/community", label: "Caregiver community" },
      { href: "/support/anticipatory-grief", label: "Anticipatory grief" },
    ],
  },
  {
    slug: "time-management",
    title: "Time and task management",
    summary:
      "Caring expands to fill all available time. Structure is what gives some of it back.",
    audience: ["caregiver"],
    blocks: [
      {
        heading: "Sort the week once",
        steps: [
          "Write every recurring task: medication, personal care, meals, transport, appointments, calls, forms, housework, work, children.",
          "Mark each: must be me / could be shared / could be paid or provided.",
          "Batch similar tasks — all calls in one block, all admin in one block.",
          "Put fixed anchors in first: your sleep, your break, your work hours.",
          "Leave 20% empty. Caring weeks always overrun.",
        ],
      },
      {
        heading: "The help list",
        body: [
          "When people say 'let me know if you need anything', they mean it but cannot generate ideas. Keep a standing list on the fridge or in your phone: Tuesday pharmacy run, Thursday school pickup, a cooked meal that freezes, an hour of sitting with them so I can shower and sleep.",
          "Send the list, not a plea. Specific requests get said yes to far more often.",
        ],
      },
      {
        heading: "Paperwork survival",
        list: [
          "One folder or one photo album on your phone for everything: letters, results, receipts, benefits.",
          "Take a photo of every medication box and every discharge sheet.",
          "Keep one page at the front: diagnoses, medicines and doses, allergies, key phone numbers. It saves hours in every emergency.",
        ],
      },
    ],
    related: [{ href: "/care/team", label: "Care team contacts" }],
  },
  {
    slug: "emergency-coping",
    title: "Emergency coping strategies",
    summary:
      "For the moments when it tips: a fall, a crisis, a shouting match, a panic attack at 2am.",
    audience: ["caregiver", "family"],
    blocks: [
      {
        heading: "In the first sixty seconds",
        steps: [
          "Check immediate physical safety — theirs and yours.",
          "Slow your own breathing before you speak; a longer out-breath, three times.",
          "Lower your voice rather than raising it. Escalation is contagious in both directions.",
          "Say one short sentence: 'I am here. We will sort this.'",
          "If you might lose control, leave the room for two minutes. Stepping out is safer than staying.",
        ],
      },
      {
        heading: "When to call for urgent help",
        list: [
          "Chest pain, sudden weakness or facial droop, difficulty breathing, uncontrolled bleeding, seizure, unresponsiveness.",
          "A fall with a head injury, or with any suspicion of a broken hip.",
          "Sudden confusion — often infection, low sodium, or medication, and it needs same-day assessment.",
          "Pain that your current plan cannot control.",
          "Any threat of suicide or of harm to another person.",
        ],
      },
      {
        heading: "Afterwards",
        body: [
          "Write down what happened while it is fresh — time, what you saw, what you did, what was said by whom. It helps the clinicians and it stops the event replaying uncontrolled in your head.",
          "Then tell one person. Debriefing within 24 hours reduces how deeply the event embeds itself.",
        ],
      },
    ],
    related: [{ href: "/care/crisis", label: "Crisis support" }],
  },
  {
    slug: "asking-for-help",
    title: "Asking for help without guilt",
    summary:
      "Most people want to help and have no idea how. Your job is not to deserve help — it is to make helping easy.",
    audience: ["caregiver", "family"],
    blocks: [
      {
        heading: "Why asking feels wrong",
        list: [
          "'I should be able to manage' — a standard nobody applies to anyone else.",
          "Fear of being a burden, mirroring the patient's own fear.",
          "Past experience of being let down, or of help arriving with strings.",
          "Not wanting to admit publicly how bad it has become.",
        ],
      },
      {
        heading: "How to make the ask",
        steps: [
          "Pick a specific task, day and time: 'Could you sit with Dad Thursday 2–4pm?'",
          "Offer an easy exit: 'If that doesn't work, no problem at all.'",
          "Ask several people small things rather than one person everything.",
          "Accept imperfect help. Done differently is still done.",
          "Say thank you and say what it made possible. People help again when they can see the effect.",
        ],
      },
      {
        heading: "When family will not help",
        body: [
          "Sometimes the honest answer is that a sibling will not step up. Grieving that expectation is part of the work — repeatedly asking someone incapable of it costs you more than it gains.",
          "Redirect the request outward: neighbours, faith communities, volunteer services, paid care, social work. And where money is available in the family, ask for money instead of time.",
        ],
      },
    ],
    related: [
      { href: "/support/family/family-meetings", label: "Family meetings guide" },
      { href: "/care/community", label: "Find peer support" },
    ],
  },
  {
    slug: "balance",
    title: "Balancing caregiving with the rest of your life",
    summary:
      "Work, children, your own health and your relationship do not pause because someone is ill. Balance here means deliberate trade-offs, not equal time.",
    audience: ["caregiver"],
    blocks: [
      {
        heading: "Decide what gets dropped",
        body: [
          "You cannot run every part of life at full capacity through a serious illness. Choose consciously what runs at 60% for now, rather than letting everything fray at once and feeling like a failure at all of it.",
          "Tell the people affected which setting you have chosen and roughly for how long. Most resentment comes from unexplained absence, not from reduced availability.",
        ],
      },
      {
        heading: "Work",
        list: [
          "Tell your employer earlier than feels comfortable; protections and flexibility usually need a formal conversation.",
          "Ask about carer's leave, flexible hours, remote work and phased return — entitlements vary by country and employer, and most people never ask.",
          "Identify one colleague who can cover you at short notice, and make it reciprocal.",
        ],
      },
      {
        heading: "Your relationship and children",
        list: [
          "Book time with your partner that has a rule: no illness talk for the first thirty minutes.",
          "Give children specific, age-appropriate information and a specific job — uncertainty frightens them more than facts.",
          "Protect one family ritual completely: a Friday meal, bedtime stories, Sunday call.",
        ],
      },
    ],
    related: [
      { href: "/support/family/supporting-children", label: "Supporting children" },
      { href: "/support/family/financial-stress", label: "Financial stress" },
    ],
  },
  {
    slug: "caregiver-grief",
    title: "Grief while you are still caring",
    summary:
      "You are losing them in instalments, and there is no time set aside to feel it. This is grief, even though nobody has died.",
    audience: ["caregiver", "family"],
    cue: "When you are mourning someone who is still here",
    blocks: [
      {
        heading: "The losses nobody counts",
        body: [
          "Caregivers grieve long before a death, and often for things that never get named out loud: the conversations you used to have, being a partner rather than a nurse, the plans you had for these years, the version of them that knew who you were.",
          "Because none of it appears in an obituary, there are no cards and no time off. This is disenfranchised grief — real loss that carries no social permission to mourn.",
        ],
      },
      {
        heading: "What it looks like in a caring day",
        list: [
          "Crying at their handwriting on an old shopping list, then carrying on with the medication round.",
          "Feeling numb during a good moment, because letting yourself enjoy it costs too much afterwards.",
          "Rehearsing the funeral while pushing the wheelchair.",
          "Snapping at them, then grieving the person who would have laughed it off.",
          "Wishing it were over — and then grieving that you thought it.",
          "Withdrawing slightly, on purpose, to make the ending survivable, and feeling like a traitor for it.",
        ],
      },
      {
        heading: "Grieving in instalments is not disloyalty",
        body: [
          "Pulling back a little is a protective reflex, not a betrayal. So is imagining life afterwards. Neither shortens their life, and neither means you love them less.",
          "The people who fare worst afterwards are rarely the ones who felt these things. They are the ones who felt them alone and concluded they were monstrous.",
        ],
      },
      {
        heading: "What helps while it is still happening",
        list: [
          "Name it as grief. It reframes the exhaustion and the irritability as mourning rather than failure.",
          "Say the unsayable sentence to one person outside the household, or write it where nobody will read it.",
          "Keep one thing that is still the relationship rather than the illness — a programme you watch, a hand held in silence.",
          "Mark losses as they happen. The week they stop being able to walk to the garden deserves a private minute.",
          "Do the legacy work now, while they can take part. It is grief work that helps both of you.",
          "Find bereavement support before the death. Most services accept early referrals, and having the number already saves you in the first week afterwards.",
        ],
      },
      {
        heading: "In dementia, and in long illness",
        body: [
          "When someone is present but changed, grief has nothing to settle on. This is ambiguous loss: no ending, no ritual, and a person who is both here and gone.",
          "The task is not resolution — it is holding both truths at once. They are still here, and much of what you had is already gone. Both belong in the same sentence.",
        ],
      },
    ],
    practices: [
      {
        title: "Naming the losses",
        minutes: 10,
        steps: [
          "Write a list headed 'what I have already lost'. Do not edit it.",
          "Beside each one, write whether anybody else knows about it.",
          "Circle the one that hurts most this week.",
          "Tell one person about that specific loss — not about the situation in general.",
          "Keep the list. Added to over months, it is a record of what you have been carrying.",
        ],
      },
    ],
    related: [
      { href: "/support/anticipatory-grief", label: "Anticipatory grief in full" },
      { href: "/support/caregiver/when-caring-ends", label: "When caring ends" },
      { href: "/care/counselling", label: "Bereavement counselling" },
    ],
  },
  {
    slug: "when-caring-ends",
    title: "When caring ends",
    summary:
      "The death is one loss. The role, the routine, the purpose and the person you became are another — and almost nobody warns you about the second one.",
    audience: ["caregiver", "family"],
    cue: "After a death, or after a move into a home",
    blocks: [
      {
        heading: "Two losses at once",
        body: [
          "Caregivers grieve the person and the role together. The alarm still goes off at the medication time. The phone does not ring. The skills you spent years learning are suddenly of no use to anyone.",
          "Bereaved carers often describe the first weeks as free-falling — not only sadness, but the collapse of structure, identity and usefulness at the same time.",
        ],
      },
      {
        heading: "The feelings that arrive uninvited",
        list: [
          "Relief — the most common, and the most guilt-inducing. It is a response to the end of suffering and strain, not a verdict on your love.",
          "Emptiness where the tasks used to be, and panic at unstructured days.",
          "Anger — at services, at relatives, at yourself, at them.",
          "Regret about the last weeks: what you said, what you did not say, whether you should have called someone sooner.",
          "Losing the people who came with caring — the nurses, the other carers, the rhythm of the ward.",
          "Fear of being forgotten now that you are no longer the one to phone.",
        ],
      },
      {
        heading: "If they moved into a hospice or a care home",
        body: [
          "Caring does not end at the door; it changes shape, and the guilt is often sharper. You remain the expert on them, and you should still be treated as part of the team.",
          "Ask to be involved in the care plan, keep doing the personal things that are yours to do, and let the staff take the tasks that were breaking you.",
        ],
      },
      {
        heading: "Rebuilding, at the right speed",
        steps: [
          "Keep one fixed commitment a week for the first month — anything, as long as it is in the diary.",
          "Avoid big irreversible decisions in the first year if you can.",
          "Expect month three to be harder than month one, when everyone else's attention has moved on.",
          "Take the caring skills somewhere when you want to — volunteering, peer support, training — but not as a way of avoiding the grieving.",
          "Get your own health checked. Carers routinely arrive at their own doctor for the first time in years.",
          "If grief has not shifted at all after a year, ask about grief-specific therapy. It works, and it differs from general counselling.",
        ],
      },
    ],
    related: [
      { href: "/support/bereavement", label: "Loss & bereavement" },
      { href: "/support/bereavement/complicated-grief", label: "When grief becomes complicated" },
      { href: "/tools/screening/grief", label: "Grief intensity questionnaire" },
    ],
  },
  {
    slug: "professional-carer-grief",
    title: "Grief in professional and hospice care",
    summary:
      "For paid and volunteer carers: cumulative loss, grief you are not supposed to have, and what teams can do so it does not become burnout.",
    audience: ["caregiver"],
    cue: "For care workers, nurses, hospice staff and volunteers",
    blocks: [
      {
        heading: "Cumulative loss is an occupational reality",
        body: [
          "In hospice, home care and nursing homes, people you knew well die regularly. Each death may be routine on a rota and it is not routine in you. They accumulate.",
          "Because it is 'part of the job', the grief usually goes unacknowledged — by employers, by families, and by carers themselves. Unacknowledged grief is what becomes compassion fatigue, and then becomes people leaving the profession.",
        ],
      },
      {
        heading: "Signs it is accumulating",
        list: [
          "Flatness at a death that would once have moved you.",
          "Avoiding the room, the family, or the funeral.",
          "Crying days later at something small and unrelated.",
          "Dreading particular shifts, or patients who resemble someone you lost.",
          "Taking the deaths home and rehearsing them at night.",
          "Believing you have no right to grieve because you are not the family.",
        ],
      },
      {
        heading: "What actually helps at work",
        list: [
          "A ritual after a death: a moment at the bedside, a name in a book, a candle, a pause before the next admission.",
          "Debriefing that is scheduled rather than optional — and separate from any clinical incident review.",
          "Clinical supervision or reflective practice, monthly and protected.",
          "Naming losses at handover, so grief is spoken rather than assumed.",
          "Peer support: the colleague who was there needs no explanation.",
          "Rotating the heaviest allocations, so the same carer is not with every dying patient.",
          "Attending funerals where appropriate, with management support to do it.",
        ],
      },
      {
        heading: "For managers and hospice leads",
        list: [
          "Build memorial practice into the year — an annual service for staff as well as families.",
          "Give new staff explicit permission to grieve, and tell them on day one what support exists.",
          "Read sickness absence and turnover as grief indicators, not only as staffing problems.",
          "Fund supervision properly. It costs less than replacing an experienced carer.",
          "Provide a route to counselling that does not run through the person's line manager.",
        ],
      },
      {
        heading: "Where your grief differs from the family's",
        body: [
          "You knew them for weeks rather than decades, and you saw a version of them the family never did. That does not make it less of a loss — it makes it a different one, with fewer people who understand it.",
          "You are also holding the family's grief in the room. Putting your own down for a while is a professional skill, not coldness. It does have to be picked up again somewhere, with someone.",
        ],
      },
    ],
    related: [
      { href: "/support/caregiver/compassion-fatigue", label: "Compassion fatigue" },
      { href: "/support/caregiver/burnout", label: "Burnout" },
      { href: "/care/community", label: "Talk to other carers" },
    ],
  },
];

/* ===========================================================================
   FAMILY SUPPORT
   =========================================================================== */

export const FAMILY_TOPICS: Topic[] = [
  {
    slug: "understanding-the-diagnosis",
    title: "Understanding the diagnosis",
    summary:
      "Families cope better when they understand what is actually happening — including what is not yet known.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Get the facts straight, once",
        steps: [
          "Agree one person to be the main point of contact with the medical team.",
          "Ask, with the patient's permission, for a family meeting with the team.",
          "Write down: the diagnosis in plain words, the stage or severity, the plan, the aim of treatment (cure, control or comfort), and what to watch for.",
          "Ask what the next decision point is and when.",
          "Share one written summary with the family so five versions do not circulate.",
        ],
      },
      {
        heading: "Questions worth asking",
        list: [
          "What is the goal of this treatment — to cure, to control, or to keep them comfortable?",
          "What does a good outcome look like, and a bad one?",
          "What will daily life look like over the next three months?",
          "What symptoms mean we should call you, and on which number?",
          "What support exists for us as a family?",
        ],
      },
      {
        heading: "The internet",
        body: [
          "Statistics online are averages from populations, often years out of date, and they say nothing definitive about one person. Use reputable sources for understanding mechanisms and treatments; take prognosis questions to the treating team.",
          "Agree a family rule about researching and sharing — unfiltered forwarding of worst-case articles is one of the fastest ways to damage trust.",
        ],
      },
    ],
    related: [
      { href: "/support/conditions", label: "Condition-specific support" },
      { href: "/support/family/communicating", label: "Communicating with the patient" },
    ],
  },
  {
    slug: "communicating",
    title: "Communicating with the person who is ill",
    summary:
      "Most families fear saying the wrong thing so much that they say nothing. Silence hurts more than clumsy words.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Principles that hold up",
        list: [
          "Follow their lead on how much is discussed, and check in again — the answer changes week to week.",
          "Ask before advising: 'Do you want ideas, or do you want me to listen?'",
          "Tolerate silence. Sitting with someone is a form of speech.",
          "Talk about ordinary life too. People who are ill get exhausted by being nothing but patients.",
          "Do not correct their feelings. 'Stay positive' usually means 'please stop making me uncomfortable'.",
        ],
      },
      {
        heading: "Phrases that help",
        list: [
          "'I don't know what to say, but I'm not going anywhere.'",
          "'Do you want to talk about it, or think about something else?'",
          "'What would make today easier?'",
          "'I'd like to help with X on Tuesday — does that work?'",
          "'That sounds really hard.' — and then stop talking.",
        ],
      },
      {
        heading: "Phrases to retire",
        list: [
          "'Everything happens for a reason.'",
          "'You're so brave' — used as a way to close the conversation.",
          "'My aunt had that and she…' — other people's outcomes are not reassurance.",
          "'You just have to think positive.'",
          "'Let me know if you need anything' — replace it with a specific offer.",
        ],
      },
      {
        heading: "When they do not want to talk",
        body: [
          "Respect it and stay present. Offer a low-pressure channel — a message, a walk, doing a task side by side. Many hard conversations happen in cars and kitchens, not in formal sit-downs.",
        ],
      },
    ],
    related: [
      { href: "/support/anticipatory-grief/difficult-conversations", label: "Difficult conversations" },
    ],
  },
  {
    slug: "supporting-children",
    title: "Supporting children in the family",
    summary:
      "Children always know something is wrong. What they cannot do is fill in the gaps accurately — and what they invent is usually worse, and usually their fault.",
    audience: ["family", "caregiver", "patient"],
    blocks: [
      {
        heading: "Tell them, in the right words",
        body: [
          "Use the real name of the illness. Euphemisms like 'poorly' or 'sleeping' create confusion and fear — a child told that granny is 'sleeping' may become terrified of bedtime.",
          "Give the three reassurances children need: it is not your fault, you cannot catch it, and someone will always look after you.",
        ],
      },
      {
        heading: "By age",
        list: [
          "Under 5: very simple, concrete, repeated. Expect regression — bedwetting, clinginess. Keep routines identical.",
          "5–8: understands illness and death as permanent but may believe thoughts cause events. Correct magical thinking explicitly.",
          "9–12: wants facts and details. Answer honestly, in installments, and allow questions later.",
          "Teenagers: may withdraw, act out, or take on adult roles. Give real information and real choices, and watch for a teenager quietly becoming the carer.",
        ],
      },
      {
        heading: "Practical things that help",
        list: [
          "Keep school informed — one email to a named teacher.",
          "Protect routine: same bedtime, same school, same football on Saturday.",
          "Give them a specific job in the caring, if they want one — small, safe and optional.",
          "Let them visit if they want to, prepared in advance: 'There will be a tube in his arm, and the room beeps.'",
          "Let them see adults cry, and then see adults recover. That teaches feelings are survivable.",
        ],
      },
      {
        heading: "When to get help for a child",
        list: [
          "Sustained change in school performance or friendships.",
          "New aggression, self-harm, or talk of not wanting to be here.",
          "Physical symptoms with no medical cause — stomach aches, headaches.",
          "A child taking on adult responsibility for a parent's wellbeing.",
        ],
      },
    ],
    related: [
      { href: "/support/bereavement/childrens-grief", label: "Children's grief" },
      { href: "/care/counselling", label: "Children's counselling" },
    ],
  },
  {
    slug: "family-conflict",
    title: "Managing family conflict",
    summary:
      "Illness does not create family dynamics; it magnifies them. Old scores, unequal loads and different beliefs about treatment collide under stress.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "The usual flashpoints",
        list: [
          "One person doing 90% of the care while others visit and comment.",
          "Disagreement about treatment — pushing on versus comfort care.",
          "Money: costs, wills, property, who pays for what.",
          "Information control — who gets told what, and when.",
          "The distant relative who arrives late with strong opinions.",
          "Old sibling roles snapping back into place at the bedside.",
        ],
      },
      {
        heading: "Ground rules that reduce heat",
        steps: [
          "Separate the decision from the history. Deal with this week's problem, not 1998.",
          "Return to the patient's own wishes as the deciding standard, wherever they can express them.",
          "Use facts from the care team rather than each person's interpretation.",
          "Divide responsibilities in writing so contribution stops being a matter of opinion.",
          "Agree a channel — one group message for updates — and keep arguments out of it.",
          "Bring in a neutral third party if two attempts have failed: social worker, chaplain, family therapist, mediator.",
        ],
      },
      {
        heading: "When someone is abusive",
        body: [
          "Conflict is normal; abuse is not. If a family member is threatening, financially exploiting, or physically harming the patient or a caregiver, contact the care team, social services or safeguarding. Protecting a vulnerable adult overrides keeping the peace.",
        ],
      },
    ],
    related: [
      { href: "/support/family/family-meetings", label: "Family meetings guide" },
      { href: "/care/counselling", label: "Family counselling" },
    ],
  },
  {
    slug: "financial-stress",
    title: "Financial stress and its emotional weight",
    summary:
      "Money worry is one of the strongest predictors of distress in serious illness — and one of the least discussed in the clinic room.",
    audience: ["family", "caregiver", "patient"],
    blocks: [
      {
        heading: "Where the money goes",
        list: [
          "Lost income — the patient's and the caregiver's.",
          "Travel, parking and accommodation for appointments.",
          "Medicines, dressings, equipment, special foods.",
          "Home adaptations and heating for someone at home all day.",
          "Paid care, childcare, and eating out because nobody has time to cook.",
        ],
      },
      {
        heading: "Act early, not at crisis point",
        steps: [
          "Ask the hospital for a social worker or financial counsellor referral — free, and they know entitlements you do not.",
          "Check benefits, disability allowances, travel schemes, prescription exemptions and charity grants for your condition.",
          "Tell lenders and utilities early; many have hardship and bereavement teams with real options.",
          "Get one person to own the paperwork, and keep a single folder.",
          "Talk about the will, power of attorney and account access while the patient can take part. It is a kindness, not an omen.",
        ],
      },
      {
        heading: "The emotional side",
        body: [
          "Financial fear often gets expressed as anger about small things. Naming it directly — 'I think we are both frightened about money' — usually defuses more than another argument about the thermostat.",
          "Patients frequently carry guilt about the cost of their own care. Say plainly that you would spend it on them again, and mean it.",
        ],
      },
    ],
    related: [{ href: "/care/team", label: "Ask about a social worker" }],
  },
  {
    slug: "family-meetings",
    title: "The family meeting guide",
    summary:
      "One structured hour prevents weeks of misfiring group messages. Here is a format that works.",
    audience: ["family", "caregiver"],
    blocks: [
      {
        heading: "Before",
        list: [
          "Agree the purpose in one sentence and send it out in advance.",
          "Ask the patient what they want said, and whether they want to be there.",
          "Pick a time that suits the fewest excuses, and cap it at one hour.",
          "Include people who are far away by phone or video — exclusion breeds conflict.",
          "Ask everyone to bring one concern and one offer of help.",
        ],
      },
      {
        heading: "The agenda",
        steps: [
          "Five minutes: where things stand medically, from the agreed point of contact.",
          "Ten minutes: the patient's own wishes, in their words if possible.",
          "Fifteen minutes: what needs doing — the task list, read out loud.",
          "Fifteen minutes: who does what, by when. Write names against tasks.",
          "Ten minutes: money, paperwork and legal items.",
          "Five minutes: what we will each do to look after ourselves, and when we meet next.",
        ],
      },
      {
        heading: "Rules for the room",
        list: [
          "One person speaks at a time; everyone gets a turn before anyone gets a second.",
          "No re-litigating the past.",
          "Disagreement is allowed; contempt is not.",
          "Decisions get written down and circulated the same day.",
          "If it becomes heated, break for ten minutes rather than pushing through.",
        ],
      },
    ],
    related: [{ href: "/support/family/family-conflict", label: "Managing conflict" }],
  },
  {
    slug: "support-system",
    title: "Building a healthy support system",
    summary:
      "No family should carry a serious illness alone. The strongest systems have three rings, and most families only build one.",
    audience: ["family", "caregiver", "patient"],
    blocks: [
      {
        heading: "The three rings",
        list: [
          "Inner ring — the two or three people doing daily care. They need relief above all.",
          "Middle ring — relatives, friends, neighbours, colleagues who can take defined tasks.",
          "Outer ring — professionals and organisations: care team, social work, charities, faith community, support groups, employer.",
        ],
      },
      {
        heading: "Ring theory: comfort in, dump out",
        body: [
          "Picture rings with the patient at the centre and each ring further out being less directly affected. The rule is simple: you offer comfort to anyone closer to the centre than you, and you take your own distress outward to someone further out.",
          "It prevents the common injury of a distant relative sobbing at the bedside and being consoled by the person who is dying.",
        ],
      },
      {
        heading: "Building it deliberately",
        steps: [
          "Write the three rings down with actual names.",
          "For each middle-ring person, write one task they could realistically own.",
          "Ask them, individually and specifically.",
          "Set up a shared calendar or group so cover is visible rather than negotiated daily.",
          "Review it monthly — people's capacity changes, and so does the need.",
        ],
      },
    ],
    related: [
      { href: "/care/community", label: "Peer support" },
      { href: "/support/caregiver/asking-for-help", label: "Asking for help" },
    ],
  },
];

export const SUPPORT_GROUPS = {
  patient: {
    slug: "patient",
    title: "For the patient",
    intro:
      "Your own emotional care, alongside the medical care. Start with the check-in, and take whichever section matches today.",
    topics: PATIENT_TOPICS,
  },
  caregiver: {
    slug: "caregiver",
    title: "For the caregiver",
    intro:
      "Caring for someone who is ill is real work with real costs. This section is about you — your stress, your limits, your life outside the role.",
    topics: CAREGIVER_TOPICS,
  },
  family: {
    slug: "family",
    title: "For family & loved ones",
    intro:
      "Understanding the journey, talking well, protecting children, handling conflict and money, and building support that lasts.",
    topics: FAMILY_TOPICS,
  },
} as const;

export type SupportGroupKey = keyof typeof SUPPORT_GROUPS;
