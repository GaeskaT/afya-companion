export type TherapeuticDiet = {
  slug: string;
  name: string;
  purpose: string;
  principles: string[];
  includes: string[];
  avoid: string[];
  sampleDay: { meal: string; items: string }[];
  cautions: string[];
  conditions: string[];
};

export const THERAPEUTIC_DIETS: TherapeuticDiet[] = [
  {
    slug: "diabetic",
    name: "Diabetic diet",
    purpose:
      "Steady blood glucose across the day while protecting the heart and kidneys.",
    conditions: ["Type 1 diabetes", "Type 2 diabetes", "Prediabetes", "Steroid-induced hyperglycaemia"],
    principles: [
      "Consistent carbohydrate at each meal rather than large swings",
      "Choose slowly-digested carbohydrate: whole grains, pulses, intact fruit",
      "Protein and vegetables at every meal to blunt the glucose rise",
      "Regular meal times; avoid long gaps followed by large meals",
    ],
    includes: [
      "Beans, lentils, chickpeas",
      "Oats, barley, brown rice, whole wheat, millet",
      "Non-starchy vegetables in quantity",
      "Eggs, fish, chicken, tofu, dairy",
      "Whole fruit in single portions",
    ],
    avoid: [
      "Sugary drinks and fruit juice",
      "Large portions of refined starch eaten alone",
      "Sweets and cakes outside planned occasions",
      "Alcohol on an empty stomach if on insulin or sulfonylureas",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Oats with milk, cinnamon, a spoon of nuts" },
      { meal: "Lunch", items: "Bean stew, small portion brown rice, big salad" },
      { meal: "Snack", items: "Plain yoghurt or a boiled egg" },
      { meal: "Dinner", items: "Grilled fish, greens, one fist of sweet potato" },
    ],
    cautions: [
      "Insulin doses may need adjusting as carbohydrate changes — do not change both at once without advice.",
      "Steroids raise glucose steeply; expect it and monitor more often.",
    ],
  },
  {
    slug: "renal",
    name: "Renal diet",
    purpose:
      "Control potassium, phosphate, sodium, protein and fluid according to your stage of kidney disease.",
    conditions: ["Chronic kidney disease", "Haemodialysis", "Peritoneal dialysis", "After transplant"],
    principles: [
      "Individualised to your latest blood results — there is no single renal diet",
      "Protein moderated before dialysis, increased once on dialysis",
      "Potassium and phosphate limited when blood levels are high",
      "Fluid limited to a personal daily allowance",
    ],
    includes: [
      "Lower-potassium vegetables: cabbage, green beans, cauliflower, peppers",
      "Lower-potassium fruit: apple, berries, grapes, pineapple",
      "White bread, rice and pasta as controlled carbohydrate",
      "Egg white, fish, chicken as prescribed protein",
    ],
    avoid: [
      "Salt substitutes containing potassium",
      "Phosphate additives in processed foods and cola",
      "Bananas, oranges, potatoes, tomatoes, avocado when potassium is high",
      "Starfruit — toxic in kidney failure",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "White toast with egg; apple" },
      { meal: "Lunch", items: "Chicken, white rice, boiled cabbage" },
      { meal: "Snack", items: "Rice cakes with butter" },
      { meal: "Dinner", items: "Fish, pasta, green beans, drained tinned pears" },
    ],
    cautions: [
      "Never follow a renal diet from the internet — the targets are personal and change with your bloods.",
      "Take phosphate binders with the first mouthful of food.",
    ],
  },
  {
    slug: "low-sodium",
    name: "Low-sodium diet",
    purpose: "Lower blood pressure and reduce fluid retention.",
    conditions: ["Hypertension", "Heart failure", "Cirrhosis with ascites", "Kidney disease"],
    principles: [
      "Target under about 2 g sodium (5 g salt) daily, or as prescribed",
      "Most sodium comes from processed food, not the salt shaker",
      "Build flavour with acid, herbs, spice and aromatics instead",
      "Read labels: under 0.3 g sodium per 100 g is low; over 1.5 g is high",
    ],
    includes: [
      "Fresh and frozen vegetables",
      "Unsalted nuts and seeds",
      "Fresh meat, fish, eggs and pulses",
      "Garlic, ginger, chilli, lemon, vinegar, herbs, black pepper",
      "Home-made stock without salt",
    ],
    avoid: [
      "Stock cubes, seasoning powders, soy and fish sauce",
      "Bacon, ham, sausages, biltong, tinned meat",
      "Tinned soups, instant noodles, crisps and salted snacks",
      "Bought sauces, pickles and olives",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge with banana and unsalted nuts" },
      { meal: "Lunch", items: "Home-made vegetable and bean soup, unsalted bread" },
      { meal: "Snack", items: "Fruit and unsalted popcorn" },
      { meal: "Dinner", items: "Herb-baked chicken, potatoes, large salad with lemon dressing" },
    ],
    cautions: [
      "Taste adjusts in about two weeks — food tastes bland before it tastes normal again.",
      "Do not use potassium-based salt substitutes in kidney disease or on certain heart medications.",
    ],
  },
  {
    slug: "cardiac",
    name: "Cardiac diet",
    purpose: "Lower cholesterol and blood pressure to protect the heart and blood vessels.",
    conditions: ["Coronary heart disease", "After heart attack or stent", "High cholesterol", "Stroke prevention"],
    principles: [
      "Replace saturated fat with unsaturated fat rather than removing fat entirely",
      "Increase soluble fibre from oats, barley, beans and fruit",
      "Reduce sodium",
      "Follow a broadly Mediterranean pattern where possible",
    ],
    includes: [
      "Oily fish twice weekly",
      "Olive, rapeseed or groundnut oil",
      "Oats, barley, beans and lentils",
      "Vegetables, fruit, nuts and seeds daily",
      "Wholegrain bread and cereals",
    ],
    avoid: [
      "Butter, ghee, lard, palm oil and fatty processed meat",
      "Pastry, fried foods and commercial cakes and biscuits",
      "Salt and salty processed foods",
      "Sugary drinks",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge with berries and walnuts" },
      { meal: "Lunch", items: "Lentil soup, wholemeal roll, salad with olive oil" },
      { meal: "Snack", items: "Apple and a small handful of almonds" },
      { meal: "Dinner", items: "Grilled mackerel, brown rice, steamed greens" },
    ],
    cautions: [
      "If you are on warfarin, keep leafy green intake consistent rather than avoiding it.",
      "In advanced heart failure, weight loss and muscle wasting change the priority to energy and protein.",
    ],
  },
  {
    slug: "high-protein",
    name: "High-protein, high-energy diet",
    purpose:
      "Rebuild muscle and stop weight loss during illness, treatment or recovery.",
    conditions: ["Cancer treatment", "After surgery", "Malnutrition", "Frailty", "Pressure sores", "Dialysis"],
    principles: [
      "Protein at every eating occasion, including snacks",
      "Fortify food rather than increasing the volume on the plate",
      "Eat by the clock — every two to three hours",
      "Nourishing drinks between meals, not with them",
    ],
    includes: [
      "Eggs, fish, chicken, meat, dairy, tofu, beans, groundnuts",
      "Full-fat milk, cream, cheese, butter, oil, milk powder",
      "Milkshakes, smoothies and malted drinks",
      "Nut butters, honey and jam added to food",
    ],
    avoid: [
      "Low-fat and diet products",
      "Filling up on tea, water or clear soup before meals",
      "Very large portions that put you off before you start",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge with full-fat milk, cream and honey" },
      { meal: "Mid-morning", items: "Fortified milkshake" },
      { meal: "Lunch", items: "Creamy soup with grated cheese, buttered bread" },
      { meal: "Afternoon", items: "Custard or cheese and crackers" },
      { meal: "Dinner", items: "Mince in gravy, buttery mash, soft vegetables" },
      { meal: "Bedtime", items: "Milky drink or ice cream" },
    ],
    cautions: [
      "In kidney or liver disease, protein targets are individual — check before increasing.",
      "If diabetic, fortify with fat and protein rather than sugar where possible.",
    ],
  },
  {
    slug: "weight-management",
    name: "Weight management plan",
    purpose: "Gradual, sustainable weight loss that preserves muscle.",
    conditions: ["Obesity", "Type 2 diabetes", "Sleep apnoea", "Osteoarthritis", "Fatty liver"],
    principles: [
      "Aim for 0.5–1 kg a week, not more",
      "Protein and vegetables at every meal for fullness",
      "Change the environment: what is in the house, what is on the table",
      "Add resistance activity to protect muscle",
    ],
    includes: [
      "Vegetables, salads and broth soups in volume",
      "Beans, lentils and whole grains",
      "Lean protein at every meal",
      "Water, unsweetened tea and coffee",
    ],
    avoid: [
      "Sugary drinks and juices",
      "Ultra-processed snacks kept within reach",
      "Eating straight from packets",
      "Skipping meals then overeating later",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Eggs with vegetables, one slice wholegrain bread" },
      { meal: "Lunch", items: "Big salad with beans or chicken, small grain portion" },
      { meal: "Snack", items: "Yoghurt with fruit" },
      { meal: "Dinner", items: "Fish or tofu, plenty of vegetables, one fist of starch" },
    ],
    cautions: [
      "Not appropriate during cancer treatment, acute illness or in frailty.",
      "If you have a history of disordered eating, work with a dietitian rather than alone.",
    ],
  },
  {
    slug: "soft-texture",
    name: "Soft and texture-modified diet",
    purpose: "Eat safely and comfortably with chewing or swallowing difficulty.",
    conditions: ["Stroke", "Dementia", "Head and neck cancer", "Parkinson's", "Mouth ulcers", "Poor dentition"],
    principles: [
      "Follow the exact texture level set by the speech and language therapist",
      "Moisten everything — sauces, gravy and custard are the workhorses",
      "Avoid mixed textures such as soup with lumps",
      "Fortify, because texture-modified food is easily under-nutritious",
    ],
    includes: [
      "Smooth porridge, mashed potato, minced meat in gravy",
      "Well-cooked soft vegetables",
      "Custard, yoghurt, mousse, ice cream",
      "Smooth soups and blended stews",
      "Thickened fluids if prescribed",
    ],
    avoid: [
      "Dry crumbly foods: biscuits, crackers, plain rice, bread with crusts",
      "Stringy, tough or fibrous foods",
      "Nuts, seeds, pips and skins",
      "Mixed-consistency foods such as cereal in milk",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Smooth fortified porridge" },
      { meal: "Mid-morning", items: "Thick yoghurt or milkshake" },
      { meal: "Lunch", items: "Minced chicken in gravy, mashed potato, soft carrots" },
      { meal: "Afternoon", items: "Custard or smooth fruit purée" },
      { meal: "Dinner", items: "Smooth fish pie, soft greens" },
    ],
    cautions: [
      "Sit fully upright to eat and stay upright for 30 minutes afterwards.",
      "Coughing on food or drink means stop and request a swallow reassessment.",
    ],
  },
  {
    slug: "cancer-nutrition",
    name: "Cancer treatment nutrition plan",
    purpose: "Maintain weight, muscle and strength through active treatment.",
    conditions: ["Chemotherapy", "Radiotherapy", "Immunotherapy", "Cancer surgery"],
    principles: [
      "Prioritise energy and protein over dietary purity",
      "Work around the symptom that is blocking eating today",
      "Eat by the clock; appetite is not a reliable guide during treatment",
      "Food safety matters when immunity is low",
    ],
    includes: [
      "Soft moist protein-rich meals",
      "Cold foods when smells trigger nausea",
      "Smoothies and shakes when chewing is hard",
      "Bland starches on bad days: rice, toast, potatoes, crackers",
    ],
    avoid: [
      "Unpasteurised dairy, raw eggs, undercooked meat when neutropenic",
      "Grapefruit and unchecked herbal supplements",
      "Restrictive 'anti-cancer' diets that cause weight loss",
      "Very spicy or acidic food with mouth ulcers",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Fortified porridge or scrambled egg" },
      { meal: "Mid-morning", items: "Milkshake" },
      { meal: "Lunch", items: "Creamy chicken soup with soft bread" },
      { meal: "Afternoon", items: "Yoghurt or custard" },
      { meal: "Dinner", items: "Fish pie with soft vegetables" },
      { meal: "Evening", items: "Ice cream or milky drink" },
    ],
    cautions: [
      "Ask the oncology team before any fasting protocol or high-dose supplement.",
      "Report weight loss of 5% or more promptly rather than at the next routine appointment.",
    ],
  },
  {
    slug: "pregnancy-nutrition",
    name: "Pregnancy nutrition plan",
    purpose: "Support a healthy pregnancy alongside an existing medical condition.",
    conditions: ["Gestational diabetes", "Pre-existing diabetes", "Hypertension in pregnancy", "Anaemia"],
    principles: [
      "Folate, iron, iodine, calcium and vitamin D are the priority nutrients",
      "Spread carbohydrate across meals and snacks in gestational diabetes",
      "Food safety to avoid listeria, toxoplasma and high mercury",
      "Appropriate weight gain for your starting BMI, not 'eating for two'",
    ],
    includes: [
      "Iron-rich foods with vitamin C",
      "Dairy or fortified alternatives daily",
      "Two portions of fish weekly, one oily",
      "Wholegrain carbohydrate in measured portions",
    ],
    avoid: [
      "Alcohol; caffeine above about 200 mg daily",
      "Unpasteurised dairy, soft mould-ripened cheese, pâté, raw egg and meat",
      "Shark, swordfish, marlin; limit tuna",
      "Liver and vitamin A supplements",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Eggs on wholegrain toast, milk" },
      { meal: "Snack", items: "Yoghurt with berries" },
      { meal: "Lunch", items: "Lentil salad with greens, wholegrain bread" },
      { meal: "Snack", items: "Apple with peanut butter" },
      { meal: "Dinner", items: "Salmon, sweet potato, broccoli" },
      { meal: "Bedtime", items: "Milk and an oatcake" },
    ],
    cautions: [
      "Pre-existing diabetes needs specialist preconception care and much tighter targets.",
      "Severe vomiting needs medical treatment, not dietary advice alone.",
    ],
  },
  {
    slug: "child-nutrition",
    name: "Child nutrition plan",
    purpose: "Support growth in a child living with, or affected by, chronic illness.",
    conditions: ["Childhood chronic illness", "Poor growth", "Cystic fibrosis", "Childhood cancer", "Type 1 diabetes"],
    principles: [
      "Growth is the outcome that matters — track weight and height on a chart",
      "Children need more energy per kilogram than adults",
      "Keep mealtimes calm and unpressured; pressure reduces intake",
      "Parents decide what and when; the child decides how much",
    ],
    includes: [
      "Full-fat milk and dairy for under-fives and for any child losing weight",
      "Protein at each meal and snack",
      "Regular meals plus two to three snacks",
      "Familiar foods presented consistently, without force",
    ],
    avoid: [
      "Grazing on sugary drinks and snacks that blunt appetite",
      "Battles at the table — they extend feeding problems for years",
      "Restrictive adult diets applied to children",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge with full-fat milk and fruit" },
      { meal: "Snack", items: "Cheese cubes and crackers" },
      { meal: "Lunch", items: "Chicken and rice with soft vegetables" },
      { meal: "Snack", items: "Yoghurt or banana with peanut butter" },
      { meal: "Dinner", items: "Fish, potato, vegetables; milk pudding" },
    ],
    cautions: [
      "Any child crossing downward through growth centiles needs paediatric dietetic review.",
      "Never restrict a child's diet for weight without specialist supervision.",
    ],
  },
  {
    slug: "elderly-nutrition",
    name: "Older adult nutrition plan",
    purpose: "Protect muscle, bone and independence in later life.",
    conditions: ["Frailty", "Sarcopenia", "Osteoporosis", "Dementia", "Recovery after a fall"],
    principles: [
      "Protein needs rise with age — spread 25–30 g across each main meal",
      "Combine with resistance activity, or the protein does far less",
      "Thirst declines with age; drink to a schedule, not to thirst",
      "Watch for social causes: eating alone, cost, transport, poor dentition",
    ],
    includes: [
      "Eggs, fish, dairy, beans and meat at every main meal",
      "Calcium and vitamin D daily",
      "Soft, easy-to-prepare, energy-dense foods",
      "Fluids offered regularly through the day",
    ],
    avoid: [
      "Long gaps without eating",
      "Low-fat products in someone losing weight",
      "Meals that are difficult to chew with poor dentition",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Eggs on buttered toast, milky tea" },
      { meal: "Mid-morning", items: "Milky coffee and a biscuit" },
      { meal: "Lunch", items: "Fish in sauce, mashed potato, soft vegetables" },
      { meal: "Afternoon", items: "Yoghurt or custard" },
      { meal: "Dinner", items: "Soup with cheese and buttered bread" },
      { meal: "Bedtime", items: "Milky drink" },
    ],
    cautions: [
      "Unplanned weight loss in an older adult is never 'just age' — investigate it.",
      "Check dentures, taste changes and medication side effects before assuming poor appetite.",
    ],
  },
  {
    slug: "vegetarian-vegan",
    name: "Vegetarian & vegan plans",
    purpose:
      "Meet full nutritional needs on a plant-based diet, including during illness.",
    conditions: ["Any condition", "Cultural and religious diets", "Kidney disease (with supervision)"],
    principles: [
      "Combine pulses, grains, nuts and seeds across the day for complete protein",
      "Plan for the nutrients that need attention: B12, iron, calcium, iodine, omega-3, zinc, vitamin D",
      "Plant protein is less concentrated — larger portions are needed during illness",
      "Fortify during weight loss with oils, nut butters, soya cream and plant milks",
    ],
    includes: [
      "Beans, lentils, chickpeas, tofu, tempeh, soya products",
      "Fortified plant milks and cereals",
      "Nuts, seeds, especially ground flax or chia for omega-3",
      "Vitamin B12 supplement or reliably fortified foods (essential if vegan)",
      "Vitamin C with iron-rich meals to boost absorption",
    ],
    avoid: [
      "Assuming a plant-based diet is automatically adequate without B12",
      "Relying on salad alone during illness — energy density matters",
      "Very high-oxalate intake if you form kidney stones",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Fortified porridge with soya milk, flaxseed, berries" },
      { meal: "Lunch", items: "Chickpea and vegetable stew with wholegrain bread" },
      { meal: "Snack", items: "Fortified soya yoghurt with nuts" },
      { meal: "Dinner", items: "Tofu stir-fry with brown rice and greens" },
    ],
    cautions: [
      "Vitamin B12 supplementation is non-negotiable on a vegan diet.",
      "In kidney disease, plant-based diets can be beneficial but need renal dietitian supervision for potassium.",
    ],
  },
];

export function findDiet(slug: string) {
  return THERAPEUTIC_DIETS.find((d) => d.slug === slug);
}
