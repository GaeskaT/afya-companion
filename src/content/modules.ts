import type { Topic } from "./types";

/**
 * The twelve psychological support modules. Each is a short, self-guided
 * course drawn from CBT, ACT, problem-solving therapy, emotion-regulation and
 * meaning-centred approaches, adapted for people living with physical illness.
 */
export const MODULES: Topic[] = [
  {
    slug: "psychoeducation",
    title: "1. Psychoeducation: what illness does to the mind",
    summary:
      "Before any technique, a map. Understanding why your mind is behaving like this removes a whole layer of fear.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The stress response is doing its job",
        body: [
          "A diagnosis registers as a threat, so the body does what it does with threats: adrenaline, faster heart, tight muscles, hyper-alert attention, poor sleep and poor digestion. That is not you falling apart — it is an ancient system responding to danger it cannot run away from.",
          "The problem is that this system was built for short emergencies. Illness is a long one, so the system stays switched on and starts producing exhaustion, irritability and blunted feeling.",
        ],
      },
      {
        heading: "Thoughts, feelings, body, behaviour",
        body: [
          "These four feed each other in a loop. A thought ('the pain means it's spreading') triggers fear, which tightens muscles, which increases pain, which strengthens the thought.",
          "You cannot order a feeling to stop. But you can enter the loop at the thought, the body or the behaviour — which is exactly what the rest of these modules do.",
        ],
      },
      {
        heading: "What is normal after a diagnosis",
        list: [
          "Two to four weeks of shock, disbelief and difficulty taking information in.",
          "Vivid recall of the moment you were told, replaying uninvited.",
          "Mood swinging between denial, terror and periods of feeling completely fine.",
          "Trouble concentrating and remembering — 'I read the same page five times'.",
          "Searching for a cause: what did I do, what did I miss.",
        ],
      },
      {
        heading: "When normal distress becomes something more",
        list: [
          "It has been more than a month and the intensity has not started to fluctuate.",
          "You cannot function — not eating, not sleeping, not going to appointments.",
          "You feel hopeless most of the day, most days.",
          "You are using alcohol or medication to get through.",
          "You are having thoughts of ending your life.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening", label: "Take a screening questionnaire" },
      { href: "/support/modules/stress-management", label: "Next: stress management" },
    ],
  },
  {
    slug: "stress-management",
    title: "2. Stress management",
    summary:
      "Reduce the load where you can, raise recovery where you cannot, and stop the stress response from running continuously.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Load and recovery",
        body: [
          "Stress damage comes from load without recovery, not load alone. In illness the load is often fixed, so most of the gains come from deliberately engineering recovery.",
          "Recovery means anything that switches the system out of alert: sleep, slow breathing, gentle movement, warmth, laughter, being with people who ask nothing of you, and doing something absorbing.",
        ],
      },
      {
        heading: "Sort your stressors",
        steps: [
          "List this week's stressors on paper.",
          "Mark each: can change / can influence / cannot change.",
          "For 'can change', write one concrete action and a time.",
          "For 'can influence', write who you would need to speak to.",
          "For 'cannot change', the task is acceptance and support — not problem solving. Choose a coping activity for each instead.",
        ],
      },
      {
        heading: "Daily minimum practice",
        list: [
          "Three minutes of slow breathing, twice a day, at fixed times.",
          "Ten minutes outdoors or by a window in daylight.",
          "One movement session appropriate to your condition — even seated.",
          "One planned pause with no screen, no talk, no task.",
          "A consistent wake time.",
        ],
      },
    ],
    practices: [
      {
        title: "The stress thermometer",
        minutes: 2,
        steps: [
          "Rate your stress 0–10 right now.",
          "Name the single biggest contributor in one word.",
          "Choose one action from your 'can change' list, or one recovery activity.",
          "Do it for ten minutes.",
          "Re-rate. Record both numbers so you learn what works for you.",
        ],
      },
    ],
    related: [{ href: "/tools/screening/stress", label: "Stress questionnaire" }],
  },
  {
    slug: "anxiety-management",
    title: "3. Anxiety management",
    summary:
      "Anxiety in illness is fed by uncertainty, body-scanning and avoidance. Each of those has a specific counter-move.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The three fuels",
        list: [
          "Uncertainty — the mind fills gaps with catastrophe because that once kept us alive.",
          "Body-scanning — constant checking makes normal sensations feel like symptoms.",
          "Avoidance — not opening letters, not asking questions, not going to appointments. Relief now, more fear later.",
        ],
      },
      {
        heading: "Counter-moves",
        steps: [
          "Set worry time — 15 minutes daily, written, seated, then closed.",
          "Cap checking. If you scan your body or search symptoms, allow yourself set times and record the urge rather than acting on it.",
          "Approach in small steps. Open the letter with someone present. Ask the question you have been avoiding.",
          "Use grounding when the fear is not solvable — senses, cold water, feet on the floor.",
          "Prepare for known triggers: scans, results, anniversaries of diagnosis.",
        ],
      },
      {
        heading: "Panic attacks",
        body: [
          "A panic attack peaks within about ten minutes and cannot physically harm you, even though it feels exactly like it can. The aim is not to stop it but to stop fighting it.",
          "Sit down. Breathe out longer than in. Say to yourself: this is panic, it peaks and passes, I have felt it before. Let it move through rather than bracing against it.",
          "If chest pain is new, different, or comes with sweating and arm or jaw pain, treat it as cardiac until a clinician says otherwise.",
        ],
      },
    ],
    practices: [
      {
        title: "Worry postponement",
        minutes: 15,
        steps: [
          "Choose a fixed 15-minute slot, not close to bedtime.",
          "During the day, write worries in one line each and return to what you were doing.",
          "At the slot, read the list.",
          "For each: is this solvable today? If yes, write the next step. If no, mark it 'to be tolerated'.",
          "Close the notebook. When worry returns, remind yourself it has already had its appointment.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening/gad-7", label: "GAD-7 questionnaire" },
      { href: "/tools/breathing", label: "Breathing exercises" },
    ],
  },
  {
    slug: "depression-support",
    title: "4. Depression support",
    summary:
      "Depression removes motivation first and hope second. Behavioural activation puts action before motivation — and it works.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The downward spiral",
        body: [
          "Feeling low leads to doing less, doing less removes sources of pleasure and achievement, and that deepens the low mood. Illness accelerates this because fatigue and pain genuinely limit activity.",
          "The way out runs backwards along the same path: schedule small activity first, and let mood follow.",
        ],
      },
      {
        heading: "Building your activity plan",
        steps: [
          "List activities in two columns: pleasure (enjoyable) and achievement (satisfying).",
          "Rate each for difficulty right now, 1–10.",
          "Pick two rated 3 or below. Not the ones you think you should manage.",
          "Schedule them at specific times this week.",
          "Rate mood before and after each, 1–10.",
          "Review at the end of the week. Add one slightly harder activity.",
        ],
      },
      {
        heading: "Handling the arguments your mind makes",
        list: [
          "'There's no point' — do it anyway and rate the result. Prediction versus evidence.",
          "'I'll do it when I feel better' — in depression, that order never arrives.",
          "'I used to do so much more' — compare to yesterday, not to your pre-illness self.",
          "'I'm a burden' — ask the person directly. The answer is almost never the one depression predicts.",
        ],
      },
      {
        heading: "Get medical input too",
        body: [
          "Self-help works best alongside treatment. Ask about talking therapy and, where appropriate, medication — and ask for your physical drivers to be checked: pain, anaemia, thyroid function, vitamin D, sleep apnoea, and the mood effects of steroids and other drugs.",
        ],
      },
    ],
    related: [
      { href: "/tools/screening/phq-9", label: "PHQ-9 questionnaire" },
      { href: "/care/counselling", label: "Talk to someone" },
    ],
  },
  {
    slug: "acceptance-and-adjustment",
    title: "5. Acceptance and adjustment",
    summary:
      "Acceptance is not approval, resignation or giving up. It is stopping the fight against what is already true, so your energy can go somewhere useful.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "What acceptance is not",
        list: [
          "It is not liking it.",
          "It is not abandoning treatment or hope.",
          "It is not 'being positive'.",
          "It is not a one-off event — it comes and goes, often daily.",
        ],
      },
      {
        heading: "Clean pain and dirty pain",
        body: [
          "Clean pain is the unavoidable suffering of the situation: the illness, the losses, the fear. Dirty pain is what we add — self-blame, comparison, rumination, fighting reality, shame about struggling.",
          "You cannot remove clean pain. Almost all of the relief available comes from reducing the second layer.",
        ],
      },
      {
        heading: "Adjustment happens in stages, non-linearly",
        list: [
          "Shock and disbelief.",
          "Searching for causes and control.",
          "Anger and bargaining.",
          "Low mood as reality lands.",
          "Reorganising life around the new facts.",
          "Finding meaning, sometimes — and cycling back through earlier stages when things change.",
        ],
      },
      {
        heading: "Values as the compass",
        body: [
          "When goals become impossible, values remain available. You may not be able to work, but you can still act with generosity, humour or courage today.",
          "Ask: what kind of person do I want to be in the middle of this? Then find the smallest action consistent with that, and do it now.",
        ],
      },
    ],
    practices: [
      {
        title: "Willingness exercise",
        minutes: 8,
        steps: [
          "Name the thing you are fighting — a symptom, a limitation, a fear.",
          "Notice where you feel the fight in your body.",
          "Say: 'This is here right now, and I do not have to like it.'",
          "Loosen the physical bracing — jaw, shoulders, hands.",
          "Ask: given this is here, what do I want to do with the next hour?",
        ],
      },
    ],
    related: [{ href: "/support/modules/meaning-making", label: "Meaning-making" }],
  },
  {
    slug: "coping-skills",
    title: "6. Coping skills",
    summary:
      "There is no universally best coping style. There is only matching the strategy to whether the situation can be changed.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Three families of coping",
        list: [
          "Problem-focused — change the situation. Best when you have influence: symptom control, information, logistics, money.",
          "Emotion-focused — change your relationship to the feeling. Best when the situation is fixed: prognosis, other people's behaviour, the past.",
          "Meaning-focused — reframe purpose and value. Best in long or terminal illness, where neither of the above resolves it.",
        ],
      },
      {
        heading: "The mismatch problem",
        body: [
          "Distress often comes from using the wrong family. Endlessly problem-solving something unchangeable produces rumination; only soothing feelings about something fixable produces helplessness.",
          "Ask first: can this be changed? Then choose accordingly.",
        ],
      },
      {
        heading: "Coping that costs more than it gives",
        list: [
          "Alcohol and non-prescribed drugs.",
          "Total avoidance — of appointments, letters, people.",
          "Compulsive symptom searching online.",
          "Cutting off everyone in order to 'not be a burden'.",
          "Overworking to outrun the feelings.",
        ],
      },
      {
        heading: "Build a personal coping card",
        steps: [
          "List five things that reliably help you, however small.",
          "List two people you can contact, with numbers.",
          "List one thing to avoid when you are struggling.",
          "Add one sentence you want to read on a bad day.",
          "Keep it in your wallet or as your phone's lock screen.",
        ],
      },
    ],
    related: [{ href: "/support/modules/emotional-regulation", label: "Emotional regulation" }],
  },
  {
    slug: "emotional-regulation",
    title: "7. Emotional regulation",
    summary:
      "Feelings are information, not instructions. Regulation means feeling them fully without being driven by them.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Name it to tame it",
        body: [
          "Putting a precise word to an emotion measurably lowers its intensity. 'Bad' is too vague to act on; 'frightened and humiliated' tells you what you need.",
          "Widen your vocabulary: resentful, ashamed, lonely, trapped, relieved, tender, envious, numb. Precision is the first regulation skill.",
        ],
      },
      {
        heading: "The wave",
        body: [
          "Emotions rise, peak and fall — usually within minutes if we do not feed them. What extends them is fighting them, or telling a story about them on repeat.",
          "Practise riding one: notice where it lives in your body, breathe, and watch it change without acting.",
        ],
      },
      {
        heading: "Fast tools when intensity is very high",
        list: [
          "Cold water on the face or wrists — slows the heart within seconds.",
          "Intense brief movement, where safe — thirty seconds of anything.",
          "Paced breathing with a long out-breath.",
          "Grounding through the senses: five things you can see, four you can touch.",
          "Delay: 'I will decide in ten minutes.' Almost nothing genuinely needs a decision inside that window.",
        ],
      },
      {
        heading: "Anger deserves its own note",
        body: [
          "Anger in illness is usually fear or grief wearing armour, and it lands on the people closest — including nurses and family who did nothing wrong.",
          "Say the underlying line out loud where you can: 'I'm not angry with you, I'm terrified.' It repairs relationships faster than any apology afterwards.",
        ],
      },
    ],
    related: [{ href: "/tools/journal", label: "Write it down" }],
  },
  {
    slug: "cognitive-restructuring",
    title: "8. Cognitive restructuring",
    summary:
      "Not positive thinking — accurate thinking. Most distressing thoughts in illness are plausible but overstated, and they can be tested.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Common thinking traps in illness",
        list: [
          "Catastrophising — every ache is progression.",
          "Fortune telling — 'I know how this ends.'",
          "All-or-nothing — 'If I can't work, I'm useless.'",
          "Mind reading — 'They're only visiting out of pity.'",
          "Emotional reasoning — 'I feel hopeless, so it is hopeless.'",
          "Should statements — 'I should be handling this better.'",
        ],
      },
      {
        heading: "The seven-column method",
        steps: [
          "Situation: what happened, factually.",
          "Thought: the exact sentence that went through your mind.",
          "Feeling and intensity, 0–100.",
          "Evidence for the thought.",
          "Evidence against it — including things you would say to a friend.",
          "A balanced alternative that fits all the evidence.",
          "Re-rate the feeling. A drop of 10–20 points is a good result; you are not aiming for zero.",
        ],
      },
      {
        heading: "When the thought is true",
        body: [
          "Sometimes the frightening thought is accurate — the illness is progressing, the treatment has stopped working. Restructuring is the wrong tool there.",
          "Switch to acceptance, meaning and support: what matters now, who should know, what would make the coming weeks better. Do not let anyone talk you out of a true thought; do let them help you carry it.",
        ],
      },
    ],
    practices: [
      {
        title: "The friend test",
        minutes: 5,
        steps: [
          "Write the harsh thought exactly as it appears in your head.",
          "Imagine a close friend in your exact situation saying it to you.",
          "Write what you would honestly say back.",
          "Read it aloud, addressed to yourself by name.",
          "Keep the fairest sentence and use it as your reply next time.",
        ],
      },
    ],
    related: [{ href: "/tools/journal", label: "Thought record in the journal" }],
  },
  {
    slug: "building-resilience",
    title: "9. Building resilience",
    summary:
      "Resilience is not bouncing back unchanged. It is bending, recovering, and being changed in a way you can live with.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The pillars",
        list: [
          "Connection — the single strongest protective factor across all the research.",
          "Physical foundations — sleep, food, movement, pain control.",
          "Purpose — something that still matters and still asks something of you.",
          "Flexibility — willingness to change the plan rather than break with it.",
          "Self-compassion — treating yourself as you would a friend in the same position.",
          "Competence — the accumulated evidence that you have survived hard things before.",
        ],
      },
      {
        heading: "Your own history of coping",
        steps: [
          "Think of the hardest thing you got through before this illness.",
          "Write what you actually did — the practical and emotional steps.",
          "Write who helped, and how.",
          "Write what you learned about yourself.",
          "Ask which of those still apply now, in modified form.",
        ],
      },
      {
        heading: "Self-compassion, practically",
        body: [
          "Three moves when things are bad: acknowledge this is genuinely hard; remember others have felt this too and you are not uniquely failing; ask what you need right now and give yourself some of it.",
          "It sounds soft. It reliably outperforms self-criticism at getting people to keep going.",
        ],
      },
    ],
    related: [{ href: "/support/patient/hope-and-resilience", label: "Hope and resilience" }],
  },
  {
    slug: "problem-solving",
    title: "10. Problem-solving skills",
    summary:
      "Illness generates an unrelenting stream of practical problems. A repeatable method stops each one becoming a crisis.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The seven steps",
        steps: [
          "Write the problem in one specific sentence — 'I can't get to Thursday appointments', not 'everything is impossible'.",
          "Set a realistic goal for it.",
          "Brainstorm every option, including bad ones. Do not judge yet.",
          "For the best three, list pros, cons, cost and effort.",
          "Choose one and write the exact first step, with a day and time.",
          "Do it.",
          "Review: did it work? If not, return to the list rather than to despair.",
        ],
      },
      {
        heading: "Break big problems into their parts",
        body: [
          "'How will we manage?' cannot be solved. Its components can: transport, money, medication timing, who is home at 4pm, what happens if there is a hospital admission.",
          "Split until each part has an owner and a next action.",
        ],
      },
      {
        heading: "Decide who owns which problem",
        list: [
          "Medical problems belong to the care team — call them rather than researching for six hours.",
          "Money and entitlements belong to a social worker or financial adviser.",
          "Logistics can usually be delegated to the middle ring of your support system.",
          "Emotional problems are not solved by logistics — they need talking, not spreadsheets.",
        ],
      },
    ],
    related: [{ href: "/tools/goals", label: "Turn it into a goal" }],
  },
  {
    slug: "hope-therapy",
    title: "11. Hope therapy",
    summary:
      "Hope can be trained. It has three trainable parts: goals, pathways, and agency.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The model",
        list: [
          "Goals — something worth moving towards. Without one, hope has no object.",
          "Pathways — the routes. Illness blocks routes, so hopeful people practise generating alternatives.",
          "Agency — the belief you can travel one of them, and permission to be helped along it.",
        ],
      },
      {
        heading: "Training pathways",
        steps: [
          "Take one blocked goal.",
          "Write five alternative routes, including ones requiring help, money or adaptation.",
          "Cross out none of them yet — quantity first.",
          "Pick the most feasible for a bad week, not a good one.",
          "Identify the obstacle most likely to stop it, and plan for that obstacle specifically.",
        ],
      },
      {
        heading: "Hope in advanced illness",
        body: [
          "When cure is no longer the goal, hope moves rather than ends: comfort, presence, unfinished conversations, a grandchild's wedding, dying at home, being remembered a particular way.",
          "Clinicians who ask 'what are you hoping for?' rather than 'do you understand the prognosis?' usually get a truer and more useful answer. You can ask yourself the same question.",
        ],
      },
    ],
    related: [{ href: "/support/anticipatory-grief", label: "Anticipatory grief" }],
  },
  {
    slug: "meaning-making",
    title: "12. Meaning-making after diagnosis",
    summary:
      "Not 'everything happens for a reason'. Meaning here is what you decide this time will be used for.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Four sources of meaning",
        list: [
          "Creative — what you make, do or contribute, at any scale.",
          "Experiential — what you receive: love, beauty, music, nature, faith.",
          "Attitudinal — the stance you take towards unavoidable suffering. Available even when everything else is gone.",
          "Legacy — what continues after you: relationships, stories, values, things you built or taught.",
        ],
      },
      {
        heading: "Questions to sit with",
        list: [
          "What has my life been about so far?",
          "What am I most proud of, and who knows that story?",
          "What do I want the next months to be used for?",
          "What would I regret leaving unsaid?",
          "Who do I want to be in this, regardless of the outcome?",
        ],
      },
      {
        heading: "A warning about forced positivity",
        body: [
          "Some people find growth after illness; many do not, and demanding it of yourself adds a second burden — failing at suffering correctly.",
          "You are allowed to conclude that this is simply bad and unfair, and still choose what to do with the time.",
        ],
      },
    ],
    practices: [
      {
        title: "Legacy letter",
        minutes: 30,
        steps: [
          "Choose one person.",
          "Write what you want them to know about who they are to you.",
          "Include one story only you remember.",
          "Include one thing you hope for them.",
          "Decide whether to give it now or leave it. Both are valid.",
        ],
      },
    ],
    related: [
      { href: "/support/anticipatory-grief/legacy-building", label: "Legacy building" },
      { href: "/support/patient/spiritual-care", label: "Spiritual care" },
    ],
  },
];
