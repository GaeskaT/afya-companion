export type Recipe = {
  slug: string;
  name: string;
  blurb: string;
  minutes: number;
  serves: number;
  /** Rough cost per serving, in generic currency units, for planning only. */
  costPerServing: string;
  costTier: "low" | "medium";
  nutrition: {
    kcal: number;
    protein: number;
    carbs: number;
    fat: number;
    fibre: number;
    sodiumNote: string;
  };
  suitableFor: string[];
  notSuitable?: string[];
  ingredients: string[];
  method: string[];
  swaps: string[];
};

export const RECIPES: Recipe[] = [
  {
    slug: "fortified-porridge",
    name: "Fortified breakfast porridge",
    blurb:
      "The single most useful recipe for anyone losing weight — cheap, soft, and easy to eat when appetite has gone.",
    minutes: 8,
    serves: 1,
    costPerServing: "0.35",
    costTier: "low",
    nutrition: {
      kcal: 520,
      protein: 21,
      carbs: 58,
      fat: 22,
      fibre: 6,
      sodiumNote: "Naturally low in salt",
    },
    suitableFor: [
      "Weight loss / malnutrition",
      "Cancer treatment",
      "Soft & texture-modified",
      "Older adults",
      "Budget",
    ],
    notSuitable: ["Strict renal potassium restriction (check milk allowance)"],
    ingredients: [
      "50 g rolled oats",
      "250 ml full-fat milk (or fortified plant milk)",
      "2 tbsp skimmed milk powder",
      "1 tbsp peanut or other nut butter",
      "1 tsp honey or sugar",
      "Cinnamon, and fruit if wanted",
    ],
    method: [
      "Stir the milk powder into the cold milk until dissolved — this is where most of the extra protein comes from.",
      "Add the oats and cook over medium heat for 4–5 minutes, stirring.",
      "Take off the heat and stir in the nut butter and honey.",
      "Add cinnamon and soft fruit. Serve warm, not hot, if the mouth is sore.",
    ],
    swaps: [
      "Maize meal, millet or semolina instead of oats.",
      "Cream instead of milk powder if you need more energy and less volume.",
      "Leave out the honey and use cinnamon only for diabetes.",
      "Blend smooth for a texture-modified diet.",
    ],
  },
  {
    slug: "bean-tomato-stew",
    name: "Bean and tomato stew",
    blurb:
      "One pot, cheap, high in fibre and protein, and it freezes in single portions.",
    minutes: 30,
    serves: 4,
    costPerServing: "0.55",
    costTier: "low",
    nutrition: {
      kcal: 340,
      protein: 16,
      carbs: 46,
      fat: 9,
      fibre: 13,
      sodiumNote: "Low if you rinse the tinned beans and skip stock cubes",
    },
    suitableFor: ["Diabetes", "Heart & cardiac", "Low sodium", "Budget", "Vegetarian & vegan", "Family"],
    notSuitable: ["High-potassium restriction in kidney disease"],
    ingredients: [
      "2 tins beans (kidney, black or haricot), drained and rinsed",
      "1 tin chopped tomatoes",
      "1 onion, 2 garlic cloves, 1 carrot, 1 pepper",
      "2 tbsp oil",
      "1 tsp paprika, 1 tsp cumin, black pepper",
      "Handful of greens (spinach, kale or cabbage)",
    ],
    method: [
      "Soften the chopped onion, carrot and pepper in the oil for 8 minutes.",
      "Add the garlic and spices; cook one more minute.",
      "Add the tomatoes and beans, plus a splash of water. Simmer 15 minutes.",
      "Stir in the greens for the last 3 minutes.",
      "Season with pepper and lemon rather than salt.",
    ],
    swaps: [
      "Add minced meat or an egg on top for extra protein.",
      "Dried beans soaked overnight halve the cost again.",
      "Blend for a soft diet, or thin with stock for a soup.",
    ],
  },
  {
    slug: "high-protein-milkshake",
    name: "High-protein milkshake",
    blurb:
      "A homemade alternative to bought supplements, at a fraction of the price.",
    minutes: 3,
    serves: 1,
    costPerServing: "0.45",
    costTier: "low",
    nutrition: {
      kcal: 430,
      protein: 22,
      carbs: 45,
      fat: 18,
      fibre: 2,
      sodiumNote: "Low",
    },
    suitableFor: [
      "Malnutrition",
      "Cancer treatment",
      "After surgery",
      "Swallowing difficulty",
      "Older adults",
    ],
    notSuitable: ["Fluid restriction — counts fully towards your allowance"],
    ingredients: [
      "200 ml full-fat milk",
      "2 tbsp skimmed milk powder",
      "1 small banana or 3 tbsp fruit purée",
      "1 tbsp nut butter or 1 scoop ice cream",
      "1 tsp honey (optional)",
    ],
    method: [
      "Whisk the milk powder into the milk first so it does not clump.",
      "Blend everything until smooth.",
      "Serve chilled — cold drinks are usually easier when nauseated.",
    ],
    swaps: [
      "Use fortified soya milk and soya yoghurt for a vegan version.",
      "Swap banana for berries if potassium is restricted.",
      "Add 1 tbsp oil for extra calories without extra volume.",
    ],
  },
  {
    slug: "renal-chicken-rice",
    name: "Renal-friendly chicken and rice",
    blurb:
      "Lower potassium and phosphate, decent protein — built for dialysis days.",
    minutes: 35,
    serves: 2,
    costPerServing: "1.30",
    costTier: "medium",
    nutrition: {
      kcal: 480,
      protein: 32,
      carbs: 52,
      fat: 14,
      fibre: 3,
      sodiumNote: "No added salt; herbs and lemon for flavour",
    },
    suitableFor: ["Kidney disease & dialysis", "Low sodium", "Soft (if chopped small)"],
    ingredients: [
      "2 chicken thighs or breasts, diced",
      "150 g white rice",
      "1 small onion, 1 garlic clove",
      "200 g green beans and cabbage, boiled and drained",
      "1 tbsp oil, black pepper, thyme, lemon juice",
    ],
    method: [
      "Boil the vegetables in plenty of water and discard the water — this lowers the potassium.",
      "Cook the rice separately in fresh water.",
      "Fry the onion and garlic in the oil, add the chicken and brown well.",
      "Add herbs, pepper and a splash of water; simmer until the chicken is cooked through.",
      "Combine with the rice and vegetables; finish with lemon juice instead of salt.",
    ],
    swaps: [
      "Fish or egg instead of chicken.",
      "White pasta or couscous instead of rice.",
      "Check portion sizes against your own renal dietitian's targets.",
    ],
  },
  {
    slug: "soft-fish-pie",
    name: "Soft fish pie",
    blurb: "Moist, soft and protein-rich — good after a stroke, or with a sore mouth.",
    minutes: 40,
    serves: 4,
    costPerServing: "1.40",
    costTier: "medium",
    nutrition: {
      kcal: 450,
      protein: 28,
      carbs: 38,
      fat: 20,
      fibre: 4,
      sodiumNote: "Moderate — use unsalted butter and no added salt",
    },
    suitableFor: [
      "Soft & texture-modified",
      "Swallowing difficulty",
      "After surgery",
      "Older adults",
      "Cancer treatment",
    ],
    ingredients: [
      "400 g white fish fillets, checked carefully for bones",
      "600 g potatoes",
      "300 ml milk, 30 g butter, 1 tbsp flour",
      "100 g soft cooked carrots or peas (blend if needed)",
      "Black pepper, parsley",
    ],
    method: [
      "Boil the potatoes and mash with milk and butter until completely smooth.",
      "Poach the fish in the rest of the milk for 8 minutes, then flake, checking again for bones.",
      "Make a simple sauce with the butter, flour and poaching milk.",
      "Fold the fish and soft vegetables into the sauce; top with mash.",
      "Bake 20 minutes at 190°C. Serve with extra sauce so nothing is dry.",
    ],
    swaps: [
      "Blend the whole dish for a puréed texture level.",
      "Use tinned salmon or mackerel to cut the cost.",
      "Add grated cheese and cream for extra calories.",
    ],
  },
  {
    slug: "lentil-soup",
    name: "Lentil and vegetable soup",
    blurb: "Cheap, filling, freezable, and gentle on a sore mouth.",
    minutes: 35,
    serves: 4,
    costPerServing: "0.40",
    costTier: "low",
    nutrition: {
      kcal: 290,
      protein: 15,
      carbs: 40,
      fat: 7,
      fibre: 11,
      sodiumNote: "Low if made without stock cubes",
    },
    suitableFor: ["Diabetes", "Heart & cardiac", "Low sodium", "Budget", "Vegetarian & vegan", "Soft (blended)"],
    ingredients: [
      "200 g red lentils, rinsed",
      "1 onion, 2 carrots, 2 celery sticks, 2 garlic cloves",
      "1 tbsp oil",
      "1.2 litres water",
      "1 tsp cumin, 1 tsp turmeric, black pepper, lemon",
    ],
    method: [
      "Soften the chopped vegetables in the oil for 8 minutes.",
      "Add the spices and garlic, then the lentils and water.",
      "Simmer 20–25 minutes until the lentils collapse.",
      "Blend for a smooth soup, or leave chunky.",
      "Finish with lemon juice and black pepper instead of salt.",
    ],
    swaps: [
      "Add milk powder or cream to fortify for someone losing weight.",
      "Split peas or beans instead of lentils.",
      "Not suitable during a low-potassium phase without checking portions.",
    ],
  },
  {
    slug: "eggs-greens-toast",
    name: "Eggs with greens on toast",
    blurb: "Five minutes, high protein, works for breakfast or a collapsed evening.",
    minutes: 8,
    serves: 1,
    costPerServing: "0.60",
    costTier: "low",
    nutrition: {
      kcal: 400,
      protein: 22,
      carbs: 30,
      fat: 21,
      fibre: 5,
      sodiumNote: "Moderate from the bread — choose a lower-salt loaf",
    },
    suitableFor: ["Diabetes", "Weight management", "Budget", "Family", "Caregiver quick meal"],
    ingredients: [
      "2 eggs",
      "1–2 slices wholegrain bread",
      "A large handful of spinach or other greens",
      "1 tsp oil or butter",
      "Black pepper, chilli flakes",
    ],
    method: [
      "Wilt the greens in the oil for a minute.",
      "Scramble or fry the eggs alongside.",
      "Toast the bread and pile everything on.",
      "Season with pepper and chilli rather than salt.",
    ],
    swaps: [
      "Add cheese or avocado for extra energy.",
      "Use tinned sardines instead of eggs for omega-3.",
      "White bread and no seeds during a low-fibre phase.",
    ],
  },
  {
    slug: "chicken-vegetable-traybake",
    name: "Chicken and vegetable traybake",
    blurb: "One tray, minimal washing up, and it reheats well for three more days.",
    minutes: 50,
    serves: 4,
    costPerServing: "1.60",
    costTier: "medium",
    nutrition: {
      kcal: 470,
      protein: 34,
      carbs: 40,
      fat: 19,
      fibre: 7,
      sodiumNote: "Low — herbs and lemon replace salt",
    },
    suitableFor: ["Heart & cardiac", "Diabetes", "Low sodium", "Family", "Weight management"],
    ingredients: [
      "4 chicken thighs, skin removed",
      "600 g potatoes or sweet potatoes, cut into chunks",
      "2 peppers, 1 red onion, 1 courgette",
      "2 tbsp olive oil",
      "Garlic, paprika, thyme, lemon, black pepper",
    ],
    method: [
      "Heat the oven to 200°C.",
      "Toss everything with the oil, garlic and spices in one large tray.",
      "Roast 40–45 minutes, turning once, until the chicken is cooked through.",
      "Squeeze lemon over before serving.",
    ],
    swaps: [
      "Chickpeas or tofu instead of chicken.",
      "Use white potatoes and check portions if potassium is restricted.",
      "Chop small and add gravy for a softer texture.",
    ],
  },
  {
    slug: "smooth-vegetable-soup",
    name: "Smooth vegetable soup, fortified",
    blurb: "Puréed, nourishing and easy to swallow — with the calories added back in.",
    minutes: 30,
    serves: 3,
    costPerServing: "0.55",
    costTier: "low",
    nutrition: {
      kcal: 320,
      protein: 12,
      carbs: 30,
      fat: 17,
      fibre: 5,
      sodiumNote: "Low without stock cubes",
    },
    suitableFor: ["Swallowing difficulty", "Soft & texture-modified", "Malnutrition", "Palliative comfort food"],
    ingredients: [
      "500 g mixed soft vegetables (carrot, courgette, cauliflower, potato)",
      "700 ml water",
      "3 tbsp skimmed milk powder",
      "2 tbsp cream or 1 tbsp oil",
      "30 g grated cheese",
      "Black pepper, nutmeg",
    ],
    method: [
      "Simmer the vegetables in the water until completely soft.",
      "Blend until entirely smooth, with no lumps or fibres.",
      "Whisk in the milk powder, cream and cheese off the heat.",
      "Check the consistency against the texture level you have been given.",
    ],
    swaps: [
      "Thicken with prescribed thickener if required — do not improvise this.",
      "Add blended cooked chicken or lentils for more protein.",
    ],
  },
  {
    slug: "overnight-oats",
    name: "Overnight oats",
    blurb: "Made the night before, for mornings when nothing works.",
    minutes: 5,
    serves: 1,
    costPerServing: "0.45",
    costTier: "low",
    nutrition: {
      kcal: 380,
      protein: 17,
      carbs: 48,
      fat: 13,
      fibre: 7,
      sodiumNote: "Low",
    },
    suitableFor: ["Diabetes", "Caregiver quick meal", "Budget", "Cancer treatment (cold food)"],
    ingredients: [
      "50 g oats",
      "150 ml milk or fortified plant milk",
      "3 tbsp yoghurt",
      "1 tbsp seeds or nut butter",
      "Berries or chopped fruit",
    ],
    method: [
      "Mix everything except the fruit in a jar.",
      "Refrigerate overnight.",
      "Add the fruit in the morning. Eat cold — useful when smells trigger nausea.",
    ],
    swaps: [
      "Add milk powder to fortify.",
      "Leave out fruit and use cinnamon for tighter glucose control.",
    ],
  },
  {
    slug: "sardine-toast",
    name: "Sardines on toast with lemon",
    blurb: "Under five minutes, high in omega-3, and among the cheapest protein there is.",
    minutes: 5,
    serves: 1,
    costPerServing: "0.70",
    costTier: "low",
    nutrition: {
      kcal: 390,
      protein: 26,
      carbs: 28,
      fat: 19,
      fibre: 4,
      sodiumNote: "Moderate — choose sardines in oil or water, not brine",
    },
    suitableFor: ["Heart & cardiac", "Budget", "Caregiver quick meal", "Malnutrition"],
    notSuitable: ["Strict low-sodium or phosphate restriction — check the label"],
    ingredients: [
      "1 tin sardines in oil, drained",
      "2 slices wholegrain bread",
      "Lemon juice, black pepper, parsley",
      "Sliced tomato or cucumber if wanted",
    ],
    method: [
      "Toast the bread.",
      "Mash the sardines with lemon juice and pepper — bones included, they are a calcium source.",
      "Pile on the toast with the salad.",
    ],
    swaps: [
      "Tinned mackerel or pilchards work identically.",
      "Skip the tomato if potassium is restricted.",
    ],
  },
  {
    slug: "family-vegetable-curry",
    name: "Family vegetable and chickpea curry",
    blurb:
      "One base meal the whole household can eat, with portions adapted per person.",
    minutes: 35,
    serves: 4,
    costPerServing: "0.75",
    costTier: "low",
    nutrition: {
      kcal: 410,
      protein: 15,
      carbs: 55,
      fat: 14,
      fibre: 12,
      sodiumNote: "Low without stock cubes or bought curry paste",
    },
    suitableFor: ["Family", "Vegetarian & vegan", "Diabetes", "Budget", "Heart & cardiac"],
    ingredients: [
      "2 tins chickpeas, drained and rinsed",
      "1 tin chopped tomatoes, 200 ml coconut milk",
      "1 onion, garlic, ginger",
      "500 g mixed vegetables (cauliflower, spinach, carrot, peas)",
      "2 tsp curry powder, 1 tsp cumin, 1 tsp turmeric",
      "Rice or flatbread to serve",
    ],
    method: [
      "Fry the onion, garlic and ginger for 8 minutes.",
      "Add the dry spices, then the tomatoes and coconut milk.",
      "Add the vegetables and chickpeas; simmer 15–20 minutes.",
      "Serve with rice — adjust each person's rice portion to their own plan.",
    ],
    swaps: [
      "Add chicken or paneer for higher protein needs.",
      "Blend a portion smooth for anyone on a texture-modified diet.",
      "Use light coconut milk and more vegetables for weight management.",
    ],
  },
];

export const RECIPE_TAGS = Array.from(
  new Set(RECIPES.flatMap((r) => r.suitableFor)),
).sort();

export function findRecipe(slug: string) {
  return RECIPES.find((r) => r.slug === slug);
}
