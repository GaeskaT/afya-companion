export type TreatmentGuide = {
  slug: string;
  name: string;
  summary: string;
  tips: string[];
  avoid: string[];
  callTeam: string[];
};

/** Practical nutrition for the treatments and symptoms that get in the way of eating. */
export const TREATMENT_GUIDES: TreatmentGuide[] = [
  {
    slug: "chemotherapy",
    name: "Chemotherapy",
    summary:
      "Side effects come in cycles. Plan food around the pattern rather than fighting it each time.",
    tips: [
      "Eat well in the days you feel best — usually just before the next cycle — and coast through the worst days.",
      "Take anti-sickness medication before eating, not once nausea has started.",
      "Cold and room-temperature foods smell less and are better tolerated.",
      "Keep bland standbys ready: crackers, toast, rice, potatoes, yoghurt.",
      "Rinse the mouth with salt and bicarbonate water four times daily to reduce ulcers.",
      "Use plastic cutlery if food tastes metallic; marinate meat or switch to eggs, fish and dairy.",
      "Sip fluids constantly; dehydration causes more admissions than poor eating does.",
    ],
    avoid: [
      "Unpasteurised dairy, raw eggs, undercooked meat and unwashed produce when your counts are low",
      "Grapefruit and unapproved herbal supplements — real interaction risk",
      "Your favourite meal on treatment day — a nausea association can put you off it for years",
      "Strong cooking smells; ask someone else to cook, or eat cold food",
    ],
    callTeam: [
      "Temperature above the threshold you were given, or feeling suddenly unwell",
      "Vomiting that stops you keeping fluids down for more than 24 hours",
      "Diarrhoea more than four times above your normal",
      "Mouth ulcers preventing eating or drinking",
      "Weight loss of 5% or more",
    ],
  },
  {
    slug: "dialysis",
    name: "Dialysis",
    summary:
      "The renal diet is individual and changes with your bloods. This is guidance, not a substitute for your renal dietitian.",
    tips: [
      "Protein needs go up on dialysis — include a protein source at each meal.",
      "Take phosphate binders with the first mouthful of food.",
      "Spread your fluid allowance across the day; keep some for the evening.",
      "Manage thirst with ice chips, frozen grapes, sour sweets, lemon slices and mouth rinses.",
      "Appetite is often poor on dialysis days — eat well on the days between.",
      "Boil potatoes and root vegetables and discard the water to lower potassium.",
    ],
    avoid: [
      "Potassium-based salt substitutes",
      "Phosphate additives — look for 'phos' in ingredient lists, and cola",
      "Starfruit, which is toxic in kidney failure",
      "Herbal supplements without renal team approval",
    ],
    callTeam: [
      "Potassium or phosphate results outside your target",
      "Fluid gains between sessions consistently above your limit",
      "Poor appetite for more than a week, or unintentional weight loss",
      "Cramping, palpitations or muscle weakness",
    ],
  },
  {
    slug: "surgery-recovery",
    name: "Surgery and recovery",
    summary:
      "Healing raises protein and energy needs substantially, often at exactly the time appetite is lowest.",
    tips: [
      "Follow any pre-operative carbohydrate loading instructions — they reduce complications.",
      "Restart eating as early as your surgical team allows; early feeding speeds recovery.",
      "Aim for protein at every meal and snack while the wound heals.",
      "Include vitamin C and zinc sources: citrus, peppers, meat, eggs, pulses, seeds.",
      "Move as soon as you are allowed; muscle rebuilds with protein plus activity, not protein alone.",
      "Manage constipation from opioid painkillers early — fluids, gentle movement, prescribed laxatives.",
    ],
    avoid: [
      "Skipping meals because of hospital timetables — ask for snacks between rounds",
      "Low-fat 'healthy' choices while you are healing",
      "Alcohol during wound healing",
    ],
    callTeam: [
      "Wound not healing, or opening",
      "Unable to eat or drink for more than 48 hours after discharge",
      "Persistent vomiting, or a swollen painful abdomen",
      "Continuing weight loss two weeks after surgery",
    ],
  },
  {
    slug: "radiotherapy",
    name: "Radiotherapy",
    summary:
      "Effects depend on the area treated, build up over weeks, and continue for a while after treatment ends.",
    tips: [
      "Head and neck: soft moist foods, sauces and gravies, sips with every mouthful.",
      "Use prescribed mouthwashes and treat dry mouth actively — it affects eating more than pain does.",
      "Abdomen or pelvis: reduce fibre and fat temporarily if diarrhoea develops, and rehydrate with salt and sugar solutions.",
      "Eat before treatment appointments if the journey is long.",
      "Expect fatigue to peak two weeks after treatment finishes — keep easy meals available then.",
      "Weigh weekly; head and neck radiotherapy causes rapid loss without early intervention.",
    ],
    avoid: [
      "Acidic, spicy, rough or very hot foods with a sore mouth or throat",
      "Alcohol and smoking during head and neck treatment",
      "Applying creams or oils to the treatment area before a session",
    ],
    callTeam: [
      "Unable to swallow enough to maintain weight",
      "Pain not controlled by current medication",
      "Diarrhoea with dehydration",
      "Weight loss of 5% or more",
    ],
  },
  {
    slug: "long-term-medication",
    name: "Long-term medication",
    summary:
      "Drugs and food interact in both directions. A pharmacist review once a year is worth an hour of anyone's time.",
    tips: [
      "Levothyroxine: empty stomach, and four hours away from calcium and iron.",
      "Warfarin: keep leafy green intake consistent rather than avoiding it.",
      "Metformin: take with food to reduce gut side effects; ask about B12 monitoring.",
      "Steroids: take in the morning with food; expect appetite and glucose to rise.",
      "Proton pump inhibitors long term: ask about B12, magnesium and calcium.",
      "Diuretics: take early; watch potassium according to the type you are on.",
    ],
    avoid: [
      "Grapefruit with statins, some calcium channel blockers and several other drugs",
      "St John's wort with almost anything, especially HIV drugs, antidepressants and chemotherapy",
      "Starting supplements without checking interactions",
      "Alcohol with sedatives, opioids and metronidazole",
    ],
    callTeam: [
      "New gut symptoms after a medication change",
      "Unexplained fatigue, which may indicate a drug-induced deficiency",
      "Any supplement you want to start while on treatment",
    ],
  },
  {
    slug: "palliative-care",
    name: "Palliative and end-of-life care",
    summary:
      "The goal shifts from nutrition to comfort and pleasure. Appetite loss late in illness is part of the process, not a failure of care.",
    tips: [
      "Offer favourite foods in tiny portions, for pleasure rather than for calories.",
      "Let them eat what they want, when they want, in any order.",
      "Mouth care becomes more important than food: moisten, clean, treat thrush, use lip balm.",
      "Small sips, ice chips and lollies keep the mouth comfortable when drinking is difficult.",
      "Sit with them at mealtimes even when they eat nothing — the company still matters.",
    ],
    avoid: [
      "Pressuring, coaxing or negotiating about food — it causes distress on both sides",
      "Weighing regularly at this stage unless it changes a decision",
      "Assuming artificial feeding will help; in the last phase it usually adds burden rather than time",
    ],
    callTeam: [
      "Pain, nausea or a dry sore mouth that is not controlled",
      "Distress about not eating — the team can explain what is happening",
      "Any question about whether fluids or feeding would help — ask it, it is a fair question",
    ],
  },
  {
    slug: "tube-feeding",
    name: "Tube feeding",
    summary:
      "Feeding through an NG or PEG tube, at home. Routine matters more than anything else here.",
    tips: [
      "Sit upright at 30–45 degrees during feeding and for an hour afterwards.",
      "Flush before and after every feed and medication, with the volume you were taught.",
      "Give medications separately, flushing between each; never mix them into the feed.",
      "Keep the stoma site clean and dry, and rotate a PEG tube as instructed.",
      "Continue mouth care even when nothing is taken orally.",
      "Keep a spare feeding set and the company's helpline number where you can find them at 2am.",
    ],
    avoid: [
      "Blended food down a fine-bore tube unless your dietitian has agreed a plan",
      "Feeding while lying flat",
      "Crushing modified-release tablets into the tube",
    ],
    callTeam: [
      "Tube blocked, dislodged or leaking",
      "Redness, pain, swelling or discharge at the stoma",
      "Vomiting, aspiration or coughing during feeds",
      "Diarrhoea or constipation persisting more than two days",
    ],
  },
  {
    slug: "swallowing-difficulty",
    name: "Difficulty swallowing (dysphagia)",
    summary:
      "Unsafe swallowing causes chest infections and is often silent. Follow the speech therapist's texture level precisely.",
    tips: [
      "Sit fully upright; stay upright 30 minutes after eating.",
      "Small spoonfuls; check the mouth is empty before the next.",
      "No talking while eating; remove distractions and the television.",
      "Moisten everything — sauces, gravy, custard.",
      "Fortify, because texture-modified diets are easily under-nutritious.",
      "Check the cheek for pocketed food afterwards, especially after a stroke.",
    ],
    avoid: [
      "Mixed textures such as soup with lumps or cereal in milk",
      "Dry crumbly foods: biscuits, crackers, plain rice, crusty bread",
      "Straws and cups that force a fast flow, unless advised",
      "Eating when very tired — fatigue makes swallowing less safe",
    ],
    callTeam: [
      "Coughing, choking or a wet gurgly voice during or after eating",
      "Repeated chest infections",
      "Weight loss, or meals taking longer than 45 minutes",
      "Any new difficulty swallowing tablets",
    ],
  },
  {
    slug: "appetite-loss",
    name: "Loss of appetite",
    summary:
      "Very common, and rarely just about food. Work backwards from the cause and shrink what is being asked of them.",
    tips: [
      "Eat by the clock rather than by hunger — every two to three hours.",
      "Small plates, small portions, more often.",
      "Make the largest meal whenever appetite is best, often the morning.",
      "Fortify: milk powder, cream, cheese, butter, oil, nut butter, honey.",
      "Nourishing drinks between meals, not with them.",
      "Gentle movement and fresh air before meals genuinely helps.",
      "Eat with someone; people eat measurably more in company.",
    ],
    avoid: [
      "Large plated meals",
      "Filling up on tea, water or clear soup first",
      "Pressure, guilt and negotiation at the table",
      "Low-fat and diet products",
    ],
    callTeam: [
      "Weight loss of 5% or more over 3–6 months",
      "Eating very little for more than five days",
      "Pain, nausea, constipation, mouth thrush or low mood — all treatable causes",
      "To ask about appetite stimulants or prescribed supplements",
    ],
  },
  {
    slug: "nausea-and-vomiting",
    name: "Nausea and vomiting",
    summary:
      "Anti-sickness medication is the main treatment; food changes make it bearable in between.",
    tips: [
      "Take anti-emetics regularly as prescribed, before eating — not only when nausea peaks.",
      "Dry, starchy foods on waking: toast, crackers, plain biscuits.",
      "Cold or room-temperature foods; hot food smells stronger.",
      "Small amounts often; an empty stomach worsens nausea.",
      "Sip fluids slowly and constantly; ginger tea, lemon or peppermint help some people.",
      "Rest sitting up after eating; lying flat makes reflux and nausea worse.",
      "Fresh air, and staying out of the kitchen while food is cooked.",
    ],
    avoid: [
      "Greasy, fried and very sweet foods",
      "Strong smells and perfumes",
      "Drinking a lot with meals rather than between them",
      "Your favourite foods while nauseated — the aversion can last for years",
    ],
    callTeam: [
      "Vomiting for more than 24 hours, or unable to keep fluids down",
      "Signs of dehydration: dark urine, dizziness, confusion",
      "Vomiting blood, or material that looks like coffee grounds",
      "Nausea not controlled by your current medication — other options exist",
    ],
  },
];

export function findTreatmentGuide(slug: string) {
  return TREATMENT_GUIDES.find((g) => g.slug === slug);
}
