import type { Topic } from "../types";

/** Short, practical nutrition education. Plain language, no jargon, offline. */
export const NUTRITION_LIBRARY: Topic[] = [
  {
    slug: "healthy-eating-basics",
    title: "Healthy eating basics",
    summary:
      "Before any therapeutic diet, the ordinary foundations — which most special diets are simply a variation on.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The plate",
        list: [
          "Half the plate vegetables or salad.",
          "A quarter protein: beans, eggs, fish, chicken, meat, tofu, dairy.",
          "A quarter starchy food: rice, potatoes, ugali, bread, pasta, plantain — whole grain where possible.",
          "A little healthy fat: oil, nuts, seeds, avocado.",
          "Fruit once or twice a day, whole rather than juiced.",
        ],
      },
      {
        heading: "The five habits that matter most",
        list: [
          "Eat regularly rather than in one large evening meal.",
          "Get protein at every meal, not only at dinner.",
          "Drink water rather than sweetened drinks.",
          "Cook more of what you eat, even simply.",
          "Eat enough fibre — most people get around half of what they need.",
        ],
      },
      {
        heading: "When illness changes the rules",
        body: [
          "During treatment, weight loss or frailty, the usual advice reverses: full-fat, energy-dense and frequent is right, and 'clean eating' is wrong.",
          "Always follow the condition-specific guidance over the general advice, and ask a dietitian when the two conflict.",
        ],
      },
    ],
    related: [{ href: "/nutrition/conditions", label: "Condition-specific nutrition" }],
  },
  {
    slug: "reading-food-labels",
    title: "Reading food labels",
    summary:
      "Three numbers tell you almost everything: salt, sugar and saturated fat per 100 g.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Use per 100 g, not per portion",
        body: [
          "Manufacturers choose the portion size, and it is often smaller than anyone eats. Comparing per 100 g is the only fair comparison between products.",
        ],
      },
      {
        heading: "The thresholds, per 100 g",
        list: [
          "Salt: low is 0.3 g or less; high is more than 1.5 g. (Sodium × 2.5 = salt.)",
          "Total sugars: low is 5 g or less; high is more than 22.5 g.",
          "Saturated fat: low is 1.5 g or less; high is more than 5 g.",
          "Fibre: 6 g or more per 100 g is a high-fibre food.",
        ],
      },
      {
        heading: "The ingredients list",
        list: [
          "Ingredients are listed by weight — if sugar or oil is in the first three, it is a major component.",
          "Sugar has many names: syrup, dextrose, maltose, concentrate, honey, molasses.",
          "'Phos' in an additive name means added phosphate — important in kidney disease.",
          "'Low fat' often means added sugar; 'no added sugar' can still be high in natural sugars.",
        ],
      },
    ],
  },
  {
    slug: "portion-control",
    title: "Portion guidance without weighing",
    summary: "Your hand travels with you and scales to your body.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The hand method",
        list: [
          "Protein: a palm-sized portion per meal (two for high-protein needs).",
          "Carbohydrate: a cupped handful of cooked rice, pasta or grains.",
          "Vegetables: two full handfuls, or half the plate.",
          "Fats and oils: a thumb-sized amount.",
          "Nuts: a small palmful, not a bowl.",
        ],
      },
      {
        heading: "When to ignore all of this",
        body: [
          "If you are losing weight, recovering from surgery or in cancer treatment, portion restriction is the wrong tool. Aim for energy density and frequency instead.",
        ],
      },
      {
        heading: "Environment beats willpower",
        list: [
          "Serve from the kitchen, not from dishes on the table.",
          "Use smaller plates when reducing, larger when building up.",
          "Pre-portion snacks rather than eating from the packet.",
          "Put the food you want to eat more of at eye level.",
        ],
      },
    ],
  },
  {
    slug: "meal-preparation",
    title: "Meal preparation when energy is short",
    summary:
      "Cooking with fatigue, nausea or a full caring schedule needs a different strategy from a food magazine.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Cook once, eat three times",
        list: [
          "Batch one pot on your best day of the week and freeze in single portions.",
          "Label with the date and the contents — treatment brain forgets by Thursday.",
          "Keep an emergency shelf: tinned fish, beans, tomatoes, eggs, rice, frozen vegetables.",
          "Accept shortcuts: frozen chopped onions, tinned pulses, ready-cooked rice, rotisserie chicken.",
        ],
      },
      {
        heading: "Meals that need almost nothing",
        list: [
          "Eggs on toast with grated cheese.",
          "Tinned beans with tinned tomatoes and a fried egg on top.",
          "Sardines mashed on bread with lemon.",
          "Porridge with milk powder, honey and nut butter.",
          "Instant mash with butter, milk and tinned tuna or minced meat.",
        ],
      },
      {
        heading: "Let people help",
        body: [
          "When someone asks what they can do, ask for food that freezes in single portions. It is the most useful gift in a household with illness in it.",
        ],
      },
    ],
  },
  {
    slug: "eating-on-a-budget",
    title: "Eating well on a budget",
    summary:
      "Illness costs money and cuts income. These are the highest-nutrition, lowest-cost foods.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Cheapest nutrition per unit of money",
        list: [
          "Dried beans, lentils and split peas.",
          "Eggs.",
          "Tinned fish: sardines, mackerel, pilchards.",
          "Milk powder — cheap protein and calories, and it fortifies anything.",
          "Oats, maize meal, rice and seasonal local vegetables.",
          "Frozen vegetables, which are nutritionally equal to fresh and never spoil.",
        ],
      },
      {
        heading: "Money-saving habits",
        list: [
          "Buy staples in the largest size you can afford and store properly.",
          "Cook from a base recipe and vary it, rather than shopping per recipe.",
          "Use cheaper cuts slow-cooked, and stretch meat with pulses.",
          "Shop with a list after eating; both reduce spend measurably.",
          "Use reduced-price shelves for items you will cook or freeze the same day.",
        ],
      },
      {
        heading: "Ask for help without shame",
        body: [
          "Food banks, hospital hardship grants, condition-specific charities and social workers exist for exactly this. Ask early — being hungry makes every other part of treatment harder.",
        ],
      },
    ],
  },
  {
    slug: "nutrition-during-treatment",
    title: "Nutrition during treatment",
    summary:
      "Treatment changes appetite, taste, digestion and immunity. Working around the specific symptom beats general advice.",
    audience: ["patient", "caregiver"],
    blocks: [
      {
        heading: "The general rule",
        body: [
          "During active treatment, keeping weight and muscle on is the goal. Full-fat, energy-dense, frequent and whatever you can actually face beats a theoretically perfect diet you cannot eat.",
        ],
      },
      {
        heading: "Symptom-first thinking",
        list: [
          "Nausea → cold, dry, bland foods; eat away from cooking smells.",
          "Sore mouth → soft, moist, cool; avoid acidic and spicy.",
          "Taste change → stronger seasoning, marinades, plastic cutlery for a metallic taste.",
          "Early fullness → small frequent meals; drink between rather than with meals.",
          "Diarrhoea → fluids with salt and sugar; low-fibre until it settles.",
          "Constipation → fluids, gentle movement, and laxatives if prescribed — do not just add bran.",
        ],
      },
      {
        heading: "Food safety when immunity is low",
        list: [
          "Cook meat, fish and eggs thoroughly.",
          "Avoid unpasteurised dairy and soft mould-ripened cheeses.",
          "Wash produce well; peel where possible.",
          "Keep the fridge below 5°C and reheat leftovers once, until steaming.",
        ],
      },
    ],
    related: [{ href: "/nutrition/treatment", label: "Full treatment guide" }],
  },
  {
    slug: "nutrition-for-recovery",
    title: "Nutrition for recovery",
    summary:
      "After surgery, infection or a long admission, the body needs materially more protein and energy than usual.",
    audience: ["patient", "caregiver"],
    blocks: [
      {
        heading: "What recovery needs",
        list: [
          "Protein — needs commonly rise by 50% or more while healing.",
          "Energy, or the protein is burned for fuel rather than used for repair.",
          "Vitamin C and zinc for wound healing.",
          "Iron if there has been blood loss.",
          "Fluid — dehydration is very common after admission.",
        ],
      },
      {
        heading: "Rebuilding muscle",
        body: [
          "Muscle is lost fast in bed and regained slowly. Protein alone will not rebuild it — it needs to be paired with movement, even seated resistance exercises.",
          "Aim for a protein source at each meal plus a resistance session most days, guided by a physiotherapist where possible.",
        ],
      },
      {
        heading: "Timeline expectations",
        body: [
          "Appetite often lags behind healing by weeks. Eat by the clock until it returns, and weigh yourself weekly rather than daily.",
        ],
      },
    ],
  },
  {
    slug: "immunity",
    title: "Boosting immunity through diet — honestly",
    summary:
      "No food supercharges the immune system. Deficiency impairs it, and correcting deficiency restores it.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "What genuinely matters",
        list: [
          "Enough total energy and protein — undernutrition is the commonest cause of impaired immunity worldwide.",
          "Adequate vitamin D, especially with little sun exposure or darker skin.",
          "Zinc, iron, selenium, vitamins A and C at normal dietary levels.",
          "Fibre and fermented foods for the gut microbiome.",
          "Sleep, which affects immune function as much as most nutrients.",
        ],
      },
      {
        heading: "What does not",
        list: [
          "Megadose vitamin supplements — excess is excreted at best, harmful at worst.",
          "'Immune-boosting' teas, powders and tonics with no evidence.",
          "Any single superfood.",
          "Detox and juice cleanses, which reduce protein and energy exactly when you need them.",
        ],
      },
      {
        heading: "During chemotherapy",
        body: [
          "High-dose antioxidant supplements may interfere with some treatments. Check every supplement with your oncology team or pharmacist before taking it.",
        ],
      },
    ],
  },
  {
    slug: "nutrition-and-mental-health",
    title: "Nutrition and mental health",
    summary:
      "Diet will not treat depression, but several nutritional factors measurably affect mood, energy and thinking.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "Real links",
        list: [
          "Low B12, folate, iron and vitamin D produce fatigue and low mood, and are easily missed.",
          "Blood glucose swings from erratic eating produce irritability and anxiety-like symptoms.",
          "Dehydration impairs concentration and mood within hours.",
          "Alcohol worsens sleep, anxiety and depression, whatever it does in the moment.",
          "Caffeine after midday reduces deep sleep, which lowers mood the next day.",
        ],
      },
      {
        heading: "Depression and eating",
        body: [
          "Depression removes appetite for some people and drives eating in others. Both are symptoms, not failures of discipline.",
          "If cooking has become impossible, drop to the lowest-effort nutrition you can manage — milk, eggs, tinned fish, bread, fortified drinks — and treat the depression separately.",
        ],
      },
      {
        heading: "Simple, useful steps",
        list: [
          "Eat something with protein within an hour of waking.",
          "Do not go more than five hours without food during the day.",
          "Drink water before reaching for a third coffee.",
          "Ask your doctor to check B12, folate, ferritin, thyroid and vitamin D if fatigue is prominent.",
        ],
      },
    ],
    related: [{ href: "/tools/screening/phq-9", label: "Check your mood" }],
  },
  {
    slug: "healthy-aging",
    title: "Healthy ageing",
    summary:
      "After about 60 the priorities change: muscle, bone, hydration and appetite become the things to defend.",
    audience: ["patient", "caregiver", "family"],
    blocks: [
      {
        heading: "The four priorities",
        list: [
          "Protein — 25 to 30 g at each main meal, not all at dinner.",
          "Resistance activity, or protein does far less for muscle.",
          "Calcium and vitamin D for bone.",
          "Fluid on a schedule, because thirst sensation declines with age.",
        ],
      },
      {
        heading: "The hidden causes of poor eating",
        list: [
          "Loose dentures and mouth pain.",
          "Medication causing dry mouth, nausea or taste change.",
          "Eating alone after bereavement.",
          "Difficulty shopping and carrying.",
          "Cost, especially when heating competes with food.",
        ],
      },
      {
        heading: "Never accept 'it's just age'",
        body: [
          "Unplanned weight loss in an older person needs investigating. It is often treatable — infection, thyroid disease, depression, dental problems, or medication side effects.",
        ],
      },
    ],
  },
];

export const CAREGIVER_NUTRITION: Topic = {
  slug: "caregivers",
  title: "Nutrition for caregivers",
  summary:
    "Two jobs here: feeding someone who is ill, and not forgetting to feed yourself.",
  audience: ["caregiver", "family"],
  blocks: [
    {
      heading: "Feeding someone safely",
      list: [
        "Sit them fully upright, and stay upright for 30 minutes after eating.",
        "Sit at their eye level rather than standing over them.",
        "Small spoonfuls; check the mouth is empty before the next one.",
        "Follow the prescribed texture and fluid thickness exactly.",
        "Stop and get a swallow reassessment if they cough, gurgle or their voice goes wet.",
        "Allow far more time than seems reasonable — rushing causes choking.",
      ],
    },
    {
      heading: "When appetite has gone",
      list: [
        "Offer small portions on small plates; a full plate defeats people before they start.",
        "Serve the largest meal at the time of day their appetite is best.",
        "Fortify rather than increase volume: milk powder, cream, cheese, butter, oil, nut butter.",
        "Offer nourishing drinks between meals, not with them.",
        "Do not turn meals into a battleground. Pressure reduces intake in every study of it.",
        "Treat the cause: pain, nausea, constipation, mouth thrush, depression.",
      ],
    },
    {
      heading: "Preventing dehydration",
      list: [
        "Offer a drink every time you enter the room, rather than waiting for thirst.",
        "Count all fluids: soup, jelly, ice lollies, milk in tea.",
        "Watch for dark urine, dry mouth, confusion, dizziness on standing.",
        "Use straws, spouted cups or teaspoons if a glass is difficult.",
        "In heart failure or kidney disease, follow the prescribed restriction rather than pushing fluids.",
      ],
    },
    {
      heading: "Monitoring weight",
      list: [
        "Weigh weekly, at the same time, in similar clothing.",
        "Report a loss of 5% of body weight over 3–6 months.",
        "Note if clothes, rings or dentures have become loose — often noticed before the scale.",
        "In heart failure, weigh daily and follow the fluid action plan.",
      ],
    },
    {
      heading: "And you",
      list: [
        "Eat something with protein before noon, every day.",
        "Drink water at every medication round you do for someone else.",
        "Keep food that requires no cooking within reach for the days you cannot face it.",
        "Do not live on their leftovers and biscuits — it is the classic caregiver diet and it wrecks energy.",
        "If you have lost weight since caring began, that is a warning sign about the load, not just about food.",
      ],
    },
  ],
  related: [
    { href: "/support/caregiver/self-care", label: "Caregiver self-care" },
    { href: "/nutrition/treatment", label: "Nutrition during treatment" },
  ],
};

export const FAMILY_NUTRITION: Topic = {
  slug: "family",
  title: "Child and family nutrition",
  summary:
    "Feeding a family while one member is ill — including children with chronic conditions and teenagers under strain.",
  audience: ["family", "caregiver"],
  blocks: [
    {
      heading: "Feeding children with a chronic illness",
      list: [
        "Growth is the measure that matters — track weight and height on a chart with your clinic.",
        "Children need more energy per kilogram than adults; do not apply adult diets to them.",
        "Parents decide what is offered and when; the child decides how much. This division prevents years of mealtime conflict.",
        "Keep treatment and food separate where possible — do not use food as a reward for medication.",
        "Ask for a paediatric dietitian for any condition affecting growth, appetite or absorption.",
      ],
    },
    {
      heading: "Adolescents",
      list: [
        "Growth spurts raise energy, protein, iron and calcium needs sharply.",
        "Autonomy matters — involve them in choosing and cooking rather than issuing rules.",
        "Watch for skipped meals, extreme diets and secretive eating, especially in diabetes.",
        "A teenager caring for an ill parent often eats worst of anyone in the house.",
      ],
    },
    {
      heading: "School and out of the house",
      list: [
        "Give the school written information about allergies, diabetes or texture needs.",
        "Pack something the child will actually eat, with a protein element.",
        "Plan around treatment days — a lighter, familiar meal after clinic.",
      ],
    },
    {
      heading: "Family meals when someone is ill",
      list: [
        "Cook one base meal and adapt portions rather than cooking separately for each person.",
        "Keep the ill person at the table even if they eat very little — company sustains appetite.",
        "Do not make everyone eat the therapeutic diet unless it happens to suit them.",
        "Protect one shared meal a week; it holds a family together more than most things.",
      ],
    },
    {
      heading: "Healthy snacks that suit everyone",
      list: [
        "Yoghurt with fruit; cheese with crackers; boiled eggs.",
        "Peanut butter on toast or apple slices.",
        "Hummus or bean dip with vegetable sticks or bread.",
        "Milk-based drinks — easy to fortify for whoever needs it.",
        "Bananas, oranges and other portable fruit.",
      ],
    },
  ],
  related: [
    { href: "/support/family/supporting-children", label: "Supporting children emotionally" },
    { href: "/nutrition/diets/child-nutrition", label: "Child nutrition plan" },
  ],
};

export function findLibraryTopic(slug: string) {
  return NUTRITION_LIBRARY.find((t) => t.slug === slug);
}
