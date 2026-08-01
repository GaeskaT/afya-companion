export type Condition = {
  slug: string;
  name: string;
  blurb: string;
  emotional: string[];
  family: string[];
  caregiver: string[];
  coping: string[];
  resources: string[];
  /** Matching entry in the nutrition module, where one exists. */
  nutritionSlug?: string;
};

export const CONDITIONS: Condition[] = [
  {
    slug: "cancer",
    name: "Cancer",
    blurb:
      "Long treatment, uncertain outcomes and a public narrative about 'fighting' that many patients find exhausting.",
    nutritionSlug: "cancer",
    emotional: [
      "Scanxiety — days of dread before every scan and results appointment.",
      "Fear of recurrence, which often intensifies after treatment finishes rather than during it.",
      "Body image change from surgery, hair loss, weight change, stomas and lymphoedema.",
      "Fatigue and chemo-brain, which are frequently mistaken for depression or laziness.",
      "Pressure to be positive and 'battle' the disease, leaving no room to say it is unbearable.",
      "Loss of fertility, sexual function and future plans.",
    ],
    family: [
      "Everyone focusing on the patient while siblings, partners and children go unsupported.",
      "Disagreement about treatment decisions and second opinions.",
      "Not knowing what to say, and therefore visiting less.",
      "Children sensing secrecy and inventing worse explanations.",
      "The end of active treatment being treated as the end of the problem.",
    ],
    caregiver: [
      "Managing complex regimens, side effects and emergency temperature checks.",
      "Long days in chemotherapy suites and hospital car parks.",
      "Hypervigilance about infection risk during neutropenia.",
      "Anticipatory grief running alongside hope for cure.",
      "Their own health and screening put off for years.",
    ],
    coping: [
      "Take someone to results appointments and write the answers down.",
      "Ask specifically about a cancer nurse specialist and psycho-oncology services.",
      "Plan the post-treatment gap in advance — arrange support before the last cycle.",
      "Use pacing rather than pushing through fatigue; plan rest before activity, not after.",
      "Ask about fertility preservation before treatment starts if it may be relevant.",
      "Treat nutrition and mouth care as part of treatment, not extras.",
    ],
    resources: [
      "Cancer nurse specialist attached to your team",
      "Psycho-oncology or hospital psychology service",
      "National cancer charity helplines and local support centres",
      "Palliative and supportive care (available alongside curative treatment)",
      "Financial grants for cancer patients through national charities",
    ],
  },
  {
    slug: "diabetes",
    name: "Diabetes",
    blurb:
      "A condition managed by the patient, every hour, forever — which is why diabetes distress is so common and so under-recognised.",
    nutritionSlug: "diabetes",
    emotional: [
      "Diabetes distress — burnout from constant self-management, distinct from depression but just as disabling.",
      "Guilt and shame after high readings, often reinforced by clinicians' language.",
      "Fear of hypoglycaemia, especially at night or while driving.",
      "Fear of complications: eyes, kidneys, feet, heart.",
      "Blame from others who think the condition was self-inflicted.",
      "Disordered eating, including deliberately omitting insulin to lose weight.",
    ],
    family: [
      "Food policing at the table, which reliably increases conflict and secrecy.",
      "Parents of children with type 1 living in constant alarm about overnight lows.",
      "Partners uncertain what to do during a hypo.",
      "Confusion between type 1 and type 2 leading to hurtful assumptions.",
    ],
    caregiver: [
      "Night-time monitoring and disrupted sleep.",
      "Managing sick-day rules and insulin adjustments.",
      "Fear of missing a hypo in someone with reduced awareness.",
      "Foot checks and wound care in longstanding diabetes.",
    ],
    coping: [
      "Replace 'good' and 'bad' readings with 'in range' and 'information'.",
      "Agree with family that food comments are off the table; substitute practical help.",
      "Ask about continuous glucose monitoring and structured education programmes.",
      "Set one small target at a time rather than overhauling everything.",
      "Tell your team about hypo fear — treatment plans can be adjusted for it.",
      "Screen yearly for depression and distress; both are far more common with diabetes.",
    ],
    resources: [
      "Diabetes specialist nurse and structured education courses",
      "Registered dietitian with diabetes expertise",
      "Podiatry and retinal screening services",
      "Peer groups for type 1, type 2 and parents of children with diabetes",
    ],
  },
  {
    slug: "kidney-disease",
    name: "Kidney disease and dialysis",
    blurb:
      "Time, fluid and diet are all restricted. Depression rates in dialysis populations are among the highest in medicine.",
    nutritionSlug: "kidney-disease",
    emotional: [
      "Loss of freedom to three dialysis sessions a week and hours in a chair.",
      "Thirst and fluid restriction as a constant, grinding deprivation.",
      "Dependence on a machine to stay alive, and fear of it failing.",
      "The transplant wait — hope, disappointment, and guilt about a donor's death.",
      "Fatigue, itching and cramps that erode mood.",
      "Loss of work, driving and holidays.",
    ],
    family: [
      "Life scheduled around dialysis for everyone in the household.",
      "Living donation decisions within families — pressure, guilt and secrecy.",
      "The diet affecting all family meals.",
      "Partners taking on transport and fluid monitoring, becoming the enforcer.",
    ],
    caregiver: [
      "Home dialysis training and responsibility for a technical procedure.",
      "Watching fluid limits and being cast as the police.",
      "Transport to and from sessions three times a week.",
      "Managing multiple appointments across renal, vascular and dietetic teams.",
    ],
    coping: [
      "Ask about home or nocturnal dialysis, which restores far more control for some people.",
      "Use ice chips, frozen grapes, sour sweets and mouth rinses for thirst.",
      "Ask the renal dietitian for foods you can have, not only foods you cannot.",
      "Use dialysis time deliberately — audiobooks, study, letters, sleep.",
      "Ask about renal counselling and social work; most units have them.",
      "Track mood monthly. Depression is treatable and commonly missed in renal care.",
    ],
    resources: [
      "Renal social worker and unit counsellor",
      "Renal dietitian",
      "Kidney patient associations and transplant peer groups",
      "Transport and benefits support for dialysis patients",
    ],
  },
  {
    slug: "stroke",
    name: "Stroke",
    blurb:
      "A sudden loss of function and, often, of the ability to say what has been lost. Emotional consequences are the rule, not the exception.",
    nutritionSlug: "stroke",
    emotional: [
      "Post-stroke depression affects roughly a third of survivors and is under-treated.",
      "Emotional lability — crying or laughing that does not match how you feel.",
      "Frustration and grief at losing speech, mobility, driving or work.",
      "Fear of another stroke with every headache.",
      "Personality and impulse changes that the person may not recognise in themselves.",
      "Isolation when communication is impaired.",
    ],
    family: [
      "Grieving the person as they were while they are still here.",
      "Communicating with someone with aphasia without infantilising them.",
      "Sudden role reversal — a spouse becomes a carer overnight.",
      "Children frightened by facial droop, speech changes or irritability.",
      "Disagreements about how hard to push rehabilitation.",
    ],
    caregiver: [
      "Personal care, transfers and falls risk with no warning or training period.",
      "Managing swallowing safety and modified diets.",
      "Chasing rehabilitation and continuing therapy after discharge.",
      "Loss of the relationship's conversation, humour and partnership.",
    ],
    coping: [
      "Ask for a formal mood assessment — post-stroke depression responds to treatment.",
      "For aphasia: short sentences, one question at a time, pen and paper, and time. Speak to the adult, not about them.",
      "Set functional goals with the therapy team and celebrate small increments.",
      "Learn about emotional lability and explain it to visitors; it reduces distress hugely.",
      "Keep rehabilitation going past the plateau — improvement continues for years.",
      "Ask about driving assessment, work rehabilitation and equipment funding.",
    ],
    resources: [
      "Stroke association support coordinators",
      "Speech and language therapy, physiotherapy, occupational therapy",
      "Aphasia and communication groups",
      "Community stroke rehabilitation teams",
    ],
  },
  {
    slug: "heart-disease",
    name: "Heart disease and heart failure",
    blurb:
      "Fear centres on the organ itself: every palpitation feels like a verdict.",
    nutritionSlug: "heart-disease",
    emotional: [
      "Cardiac anxiety — checking pulse, avoiding exertion, fearing every chest sensation.",
      "Depression after heart attack or bypass, which independently worsens outcomes.",
      "Fear of sex, exercise and being alone.",
      "ICD shocks and the dread of the next one.",
      "Breathlessness in heart failure producing panic, which worsens breathlessness.",
      "Identity loss for people whose fitness or work was physical.",
    ],
    family: [
      "Overprotection — stopping the person doing things they safely can.",
      "Partners listening for breathing at night.",
      "Family-wide changes to diet, salt and smoking.",
      "Fear of being alone with them if something happens.",
    ],
    caregiver: [
      "Daily weights, fluid limits and diuretic adjustment.",
      "Recognising decompensation early.",
      "Repeated emergency admissions and the alertness between them.",
      "Learning CPR and living with the possibility of needing it.",
    ],
    coping: [
      "Do cardiac rehabilitation. It reduces anxiety and mortality, and most people who are offered it decline.",
      "Ask exactly what level of exertion is safe, in specific terms, and write it down.",
      "Learn to distinguish panic symptoms from cardiac ones — and the rule for when to call regardless.",
      "Weigh daily at the same time and take the action plan you were given seriously.",
      "Ask about sexual activity directly; the answer is usually reassuring.",
      "Ask about palliative care in advanced heart failure — it improves symptoms and mood.",
    ],
    resources: [
      "Cardiac rehabilitation programme",
      "Heart failure specialist nurse",
      "Cardiac psychology or health psychology services",
      "ICD support groups",
    ],
  },
  {
    slug: "dementia",
    name: "Dementia",
    blurb:
      "A long, stepwise loss — for the person and for everyone who loves them. Caregiver strain here is the highest of any condition.",
    emotional: [
      "Insight in the early stages: knowing what is coming, and fearing it.",
      "Frustration and shame at word-finding failures and getting lost.",
      "Loss of independence, driving and finances.",
      "Agitation and distress that are usually communication, not aggression.",
      "Depression and apathy, often mistaken for the dementia itself.",
    ],
    family: [
      "Grieving someone who is still present — ambiguous loss in its purest form.",
      "Disagreement about care homes, driving and money.",
      "Being forgotten, or being mistaken for someone else.",
      "Managing visits when the person becomes distressed by them.",
      "Guilt when relief follows a placement decision.",
    ],
    caregiver: [
      "24-hour supervision, wandering, and disturbed nights.",
      "Repetition, resistance to personal care, and occasional aggression.",
      "Social isolation as friends drift away.",
      "The highest rates of depression and burnout of any caregiver group.",
      "Guilt on both sides of the care home decision.",
    ],
    coping: [
      "Enter their reality rather than correcting it; orientation arguments cause distress and change nothing.",
      "Look for the need behind the behaviour: pain, thirst, toilet, boredom, fear, infection.",
      "Simplify: one instruction at a time, short sentences, calm face, no quizzing.",
      "Keep routine, familiar objects, music and photographs; music reaches people very late.",
      "Get legal and financial affairs arranged while capacity remains.",
      "Book respite early and repeatedly — waiting until crisis point removes your choices.",
    ],
    resources: [
      "Memory clinic and admiral or dementia specialist nurses",
      "Dementia charities' helplines and carer courses",
      "Day centres, sitting services and respite care",
      "Carers' assessment and benefits advice",
    ],
  },
  {
    slug: "parkinsons",
    name: "Parkinson's disease",
    blurb:
      "A movement disorder whose non-motor symptoms — mood, sleep, cognition — often trouble people more than the tremor.",
    emotional: [
      "Depression and anxiety are part of the disease process, not only a reaction to it.",
      "Apathy that looks like laziness or rejection to the people around you.",
      "Embarrassment about tremor, drooling, freezing and falls in public.",
      "'Off' periods when medication wanes, and the anxiety of watching the clock.",
      "Impulse control problems — gambling, spending, hypersexuality — from dopamine agonists.",
      "Facial masking causing others to misread you as unfriendly or depressed.",
    ],
    family: [
      "Misreading masking and slowness as disinterest.",
      "Distress and confusion around hallucinations in later disease.",
      "Financial damage from undiagnosed impulse control disorder.",
      "Adapting the home for falls and freezing.",
    ],
    caregiver: [
      "Medication timing is critical — doses late by even 30 minutes matter.",
      "Managing falls, freezing and transfers.",
      "Communication slowed by soft speech and reduced expression.",
      "Overnight care as sleep disorders progress.",
    ],
    coping: [
      "Protect medication timing rigidly, including in hospital — ask about self-administration.",
      "Report impulse control changes immediately; they are drug-related and reversible.",
      "Use cues for freezing: counting, stepping over a line, a metronome, marching rhythm.",
      "Exercise is treatment — boxing, dance, tai chi and cycling programmes have real evidence.",
      "See speech therapy early for voice, and ask about swallowing.",
      "Ask about the non-motor symptom questionnaire; it surfaces what appointments miss.",
    ],
    resources: [
      "Parkinson's specialist nurse",
      "Neurophysiotherapy and speech therapy",
      "Parkinson's charity local groups and exercise classes",
      "Occupational therapy for home adaptation",
    ],
  },
  {
    slug: "hiv",
    name: "HIV",
    blurb:
      "Medically a manageable long-term condition; socially still shadowed by stigma, which is now the main driver of distress.",
    nutritionSlug: "hiv",
    emotional: [
      "Fear of disclosure at work, in families and in relationships.",
      "Internalised stigma and shame long after the medical facts have moved on.",
      "Anxiety about transmission, even at an undetectable viral load.",
      "Grief carried by long-term survivors who lost entire communities.",
      "Depression rates several times higher than the general population.",
      "Adherence fatigue after decades of daily medication.",
    ],
    family: [
      "Deciding who to tell, and living with the consequences either way.",
      "Partners navigating serodifferent relationships and conception.",
      "Rejection by relatives on religious or cultural grounds.",
      "Explaining to children in an age-appropriate way.",
    ],
    caregiver: [
      "Confidentiality obligations that isolate the caregiver too.",
      "Supporting adherence without policing.",
      "Managing comorbidities and ageing with HIV.",
    ],
    coping: [
      "Learn and use U=U: an undetectable viral load means HIV cannot be sexually transmitted. It changes conversations.",
      "Disclose selectively and deliberately — you owe nobody your medical history.",
      "Find peer support; the single most protective factor against internalised stigma.",
      "Treat adherence problems as practical problems: reminders, pill boxes, simpler regimens.",
      "Ask your clinic for psychology; most HIV services have integrated mental health support.",
    ],
    resources: [
      "HIV clinic health advisers and psychology services",
      "Peer support organisations and long-term survivor groups",
      "Legal advice on discrimination and disclosure",
      "PrEP and partner services for serodifferent couples",
    ],
  },
  {
    slug: "chronic-pain",
    name: "Chronic pain",
    blurb:
      "Invisible, doubted, and exhausting to keep explaining. The psychological load comes as much from disbelief as from the pain.",
    emotional: [
      "Not being believed — by clinicians, employers, family.",
      "Depression and pain amplifying each other in a loop.",
      "Fear-avoidance: stopping movement, which increases deconditioning and pain.",
      "Grief for the working, sporting or parenting life you had.",
      "Anger at being labelled drug-seeking when asking for adequate relief.",
      "Boom and bust cycles — overdoing it on good days and paying for a week.",
    ],
    family: [
      "Scepticism, or exhaustion with cancelled plans.",
      "Partners taking on more, and the resentment neither will voice.",
      "Children learning to be quiet and self-sufficient.",
      "Wanting to help by doing everything, which reinforces disability.",
    ],
    caregiver: [
      "Watching someone suffer with nothing to fix.",
      "Being the buffer between them and dismissive services.",
      "Household income loss.",
    ],
    coping: [
      "Pace by time, not by pain — set activity quotas and stop before the flare.",
      "Keep moving within limits; graded activity reduces pain over months.",
      "Ask for referral to a pain management programme, which is psychological as well as physical.",
      "Track pain, mood, sleep and activity together to find your real patterns.",
      "Set function-based goals — 'walk to the shop' — rather than pain-score goals.",
      "Address sleep directly; it is one of the strongest levers on next-day pain.",
    ],
    resources: [
      "Pain clinic and pain management programmes",
      "Physiotherapy with a graded activity approach",
      "Pain-specific CBT or ACT",
      "Patient-led pain support groups",
    ],
  },
  {
    slug: "multiple-sclerosis",
    name: "Multiple sclerosis",
    blurb:
      "Unpredictability is the defining stressor — not knowing what next month's body will do.",
    emotional: [
      "Uncertainty about relapses, progression and the future.",
      "Fatigue that is neurological, not laziness, and is frequently disbelieved.",
      "Cognitive changes — processing speed, memory — that are frightening and often unmentioned.",
      "Depression, which is more common in MS than in comparably disabling conditions.",
      "Emotional lability and, less commonly, pseudobulbar affect.",
      "Bladder, bowel and sexual symptoms that people are embarrassed to raise.",
    ],
    family: [
      "Planning a life around an unpredictable condition.",
      "Invisible symptoms causing others to underestimate the burden.",
      "Decisions about children, work and housing under uncertainty.",
      "Partners becoming carers young.",
    ],
    caregiver: [
      "Fluctuating need — full independence one month, high dependence the next.",
      "Managing continence care and mobility equipment.",
      "Long-horizon caring, often starting in the caregiver's thirties or forties.",
    ],
    coping: [
      "Manage fatigue as a budget: plan the day's spend, rest before activity, use cooling in heat.",
      "Raise bladder, bowel and sexual symptoms explicitly — all are treatable and rarely volunteered.",
      "Ask for neuropsychology assessment if cognition changes; strategies help.",
      "Plan flexibly: have a bad-day version of every plan so life does not stop.",
      "Use the MS nurse as first contact for relapses rather than waiting for clinic.",
      "Exercise within tolerance; it improves fatigue, mood and function.",
    ],
    resources: [
      "MS specialist nurse",
      "Neurophysiotherapy and fatigue management courses",
      "MS society local branches and peer groups",
      "Continence and neuro-urology services",
    ],
  },
  {
    slug: "terminal-illness",
    name: "Terminal and advanced illness",
    blurb:
      "When treatment shifts from cure to comfort. The tasks change; the need for support increases sharply.",
    emotional: [
      "Fear of the dying process itself — pain, breathlessness, choking, being alone.",
      "Grief for one's own life, plans and people.",
      "Loss of dignity and independence, especially around personal care.",
      "Being treated as already gone by people who cannot cope.",
      "Wanting to protect the family from your fear, and being isolated by that.",
      "For some, relief and readiness — which family may find hard to hear.",
    ],
    family: [
      "Anticipatory grief and exhaustion running together.",
      "Disagreement about telling the patient, or about stopping treatment.",
      "Not knowing what to say, and therefore avoiding the room.",
      "Wanting one more intervention when the person wants none.",
      "Children who are excluded and later regret it.",
    ],
    caregiver: [
      "Round-the-clock care in the final weeks.",
      "Giving medication, including as-needed injections at home.",
      "Recognising the dying phase and knowing who to call.",
      "Having no time to grieve while it is happening.",
    ],
    coping: [
      "Involve palliative care early — it improves quality of life, symptom control and sometimes survival.",
      "Make an advance care plan: preferred place of care, treatments wanted and not wanted, who decides.",
      "Ask what the last days usually look like. Knowing reduces terror for everyone.",
      "Do the four sentences: thank you, I forgive you, forgive me, I love you.",
      "Arrange practical matters early so the final weeks are for people, not paperwork.",
      "Arrange bereavement support for the family before the death, not after.",
    ],
    resources: [
      "Specialist palliative care and hospice at home teams",
      "Out-of-hours palliative advice line",
      "Chaplaincy and spiritual care",
      "Pre- and post-bereavement counselling services",
      "Marie Curie / hospice-style night sitting services where available",
    ],
  },
  {
    slug: "rare-diseases",
    name: "Rare diseases",
    blurb:
      "Years to diagnosis, no local expertise, and no one else in the waiting room who has heard of it.",
    emotional: [
      "The diagnostic odyssey — years of being told it is anxiety or nothing.",
      "Isolation: no local group, no familiar name, no shared story.",
      "Becoming the world expert on your own condition out of necessity.",
      "Fear about a future no one can describe because the data does not exist.",
      "Genetic guilt in inherited conditions, and worry about children.",
    ],
    family: [
      "Explaining a condition nobody has heard of, repeatedly.",
      "Genetic testing decisions across a whole family.",
      "Travel and cost to reach specialist centres.",
      "Siblings of an affected child receiving less attention for years.",
    ],
    caregiver: [
      "Coordinating care across specialists who have never met each other.",
      "Carrying the medical knowledge that local services lack.",
      "Fighting for funding for treatments and equipment.",
    ],
    coping: [
      "Keep a one-page medical summary you can hand to any clinician — it saves hours in every emergency.",
      "Find the international patient organisation; online communities are often the only peers available.",
      "Ask for referral to a national specialist centre and for shared-care arrangements locally.",
      "Ask about registries and trials — they give access, information and a sense of contribution.",
      "Protect against advocacy burnout: you cannot be the coordinator, expert and family member with no rest.",
    ],
    resources: [
      "National rare disease alliances and condition-specific charities",
      "Genetic counselling services",
      "Specialist centres and shared-care protocols",
      "Online international patient communities",
    ],
  },
];

export function findCondition(slug: string) {
  return CONDITIONS.find((c) => c.slug === slug);
}
