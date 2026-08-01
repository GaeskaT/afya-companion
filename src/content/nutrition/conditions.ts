export type Meal = { meal: string; items: string };
export type Myth = { myth: string; truth: string };

export type NutritionCondition = {
  slug: string;
  name: string;
  blurb: string;
  goals: string[];
  recommended: string[];
  limit: string[];
  timing: string[];
  portions: string[];
  sampleDay: Meal[];
  myths: Myth[];
  challenges: string[];
  seeDietitian: string[];
};

export const NUTRITION_CONDITIONS: NutritionCondition[] = [
  {
    slug: "diabetes",
    name: "Diabetes",
    blurb:
      "The aim is steady glucose, not deprivation. Carbohydrate quantity, quality and spacing matter more than banning single foods.",
    goals: [
      "Keep blood glucose in your agreed range more of the time",
      "Protect the heart and kidneys, which is where most diabetes harm happens",
      "Reach a weight that improves control, without extreme dieting",
      "Keep eating food you actually like, so the plan survives past month two",
    ],
    recommended: [
      "Whole grains with intact structure: oats, barley, brown rice, whole wheat, millet, sorghum",
      "Beans, lentils, chickpeas and peas — the single most useful food group for glucose control",
      "Non-starchy vegetables at every main meal: greens, tomatoes, okra, cabbage, peppers, aubergine",
      "Protein at every meal: eggs, fish, chicken, lean meat, tofu, dairy, groundnuts",
      "Whole fruit rather than juice — berries, apples, oranges, guava, pawpaw in portions",
      "Healthy fats in moderation: olive, groundnut and rapeseed oils, avocado, nuts, seeds",
    ],
    limit: [
      "Sugary drinks, including fruit juice and sweetened tea — the fastest route to a glucose spike",
      "White bread, white rice and refined flour products eaten alone",
      "Sweets, cakes, biscuits and syrups outside planned occasions",
      "Deep-fried foods and processed meats",
      "Alcohol on an empty stomach, especially on insulin or sulfonylureas",
    ],
    timing: [
      "Eat at broadly consistent times; long gaps followed by large meals worsen control.",
      "Do not skip breakfast if you take insulin or sulfonylureas.",
      "Pair carbohydrate with protein, fat or fibre — never carbohydrate alone.",
      "If you take insulin at meals, match the dose to the carbohydrate as your team taught you.",
    ],
    portions: [
      "Half the plate non-starchy vegetables, a quarter protein, a quarter carbohydrate.",
      "Carbohydrate portion: roughly a cupped handful of cooked rice, pasta or ugali per meal.",
      "Fruit: one portion at a time — a medium fruit, or a small handful of berries.",
      "Nuts: a small palmful, not a bowl.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Oats with milk, cinnamon, a few berries and a spoon of groundnuts" },
      { meal: "Lunch", items: "Beans, brown rice, a large mixed salad, one small fruit" },
      { meal: "Snack", items: "Plain yoghurt or a boiled egg with vegetable sticks" },
      { meal: "Dinner", items: "Grilled fish, greens cooked with a little oil, a fist of sweet potato" },
      { meal: "If hypo-prone at night", items: "A small carbohydrate-plus-protein snack as advised by your team" },
    ],
    myths: [
      {
        myth: "People with diabetes must never eat sugar.",
        truth:
          "Total carbohydrate load matters more than sugar alone. Small amounts, inside a balanced meal, are usually manageable.",
      },
      {
        myth: "Fruit is dangerous because it is sweet.",
        truth:
          "Whole fruit comes with fibre and is protective. Fruit juice, which has lost the fibre, is the problem.",
      },
      {
        myth: "Special 'diabetic' products are healthier.",
        truth:
          "They are usually expensive, often high in fat, and can cause gut upset. Ordinary whole foods are better.",
      },
    ],
    challenges: [
      "Steroids during treatment can raise glucose dramatically — expect it and check more often.",
      "Illness raises glucose even when you are eating less. Follow your sick-day rules; never stop insulin.",
      "Appetite loss during other treatment complicates insulin timing — ask for a dietitian review.",
      "Weight loss medication and changing renal function alter targets; plans need revisiting.",
    ],
    seeDietitian: [
      "You are starting or adjusting insulin",
      "You have kidney disease as well — the two diets can conflict",
      "You are losing weight without trying",
      "You are pregnant or planning pregnancy",
    ],
  },
  {
    slug: "hypertension",
    name: "High blood pressure",
    blurb:
      "Sodium down, potassium up, weight down slightly — this combination lowers blood pressure as much as some medication.",
    goals: [
      "Reduce sodium to under about 2 g a day (5 g of salt)",
      "Increase potassium from vegetables and fruit, unless your kidney team says otherwise",
      "Lose 5–10% of body weight if you are above a healthy range",
      "Reduce alcohol, which raises blood pressure directly",
    ],
    recommended: [
      "Vegetables and fruit at every meal — the DASH pattern's central element",
      "Beans, lentils and unsalted nuts",
      "Whole grains: oats, brown rice, whole wheat",
      "Low-fat dairy or fortified alternatives",
      "Fish, especially oily fish twice a week",
      "Herbs, garlic, ginger, chilli, lemon and vinegar in place of salt",
    ],
    limit: [
      "Table salt and salty seasoning cubes, stock powders and soy sauce",
      "Processed and cured meats: bacon, sausages, ham, biltong",
      "Tinned soups, instant noodles, salted crisps and snacks",
      "Bread eaten in large quantity — often the biggest hidden sodium source",
      "Alcohol above the recommended limits",
    ],
    timing: [
      "Spread potassium-rich foods across the day rather than in one meal.",
      "Take blood pressure medication at the same time daily; food rarely matters, consistency does.",
      "Avoid heavy salty meals in the evening if you retain fluid overnight.",
    ],
    portions: [
      "Aim for five portions of vegetables and fruit daily — a portion is roughly a handful.",
      "Keep added salt to under one level teaspoon per day across all cooking.",
      "Limit processed meat to an occasional small portion rather than a daily item.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge with banana and unsalted nuts" },
      { meal: "Lunch", items: "Bean stew with tomatoes and greens, small portion of rice" },
      { meal: "Snack", items: "Orange, or carrot sticks with unsalted peanut butter" },
      { meal: "Dinner", items: "Baked fish with lemon and herbs, potatoes, large salad" },
    ],
    myths: [
      {
        myth: "If I don't add salt at the table, my intake is fine.",
        truth:
          "Most sodium is already in bread, stock cubes, processed meat and snacks before it reaches the table.",
      },
      {
        myth: "Sea salt and rock salt are healthier.",
        truth: "They contain the same sodium. Reduce the amount rather than changing the type.",
      },
    ],
    challenges: [
      "Salt substitutes are potassium-based and are unsafe in kidney disease or on certain drugs — check first.",
      "Some pain relievers and steroids raise blood pressure; ask a pharmacist before regular use.",
      "Eating out is the main source of hidden salt — ask for food cooked without added salt.",
    ],
    seeDietitian: [
      "Blood pressure stays high despite medication",
      "You also have kidney disease, heart failure or diabetes",
      "You need help reducing salt in a cuisine that relies on stock cubes and cured foods",
    ],
  },
  {
    slug: "heart-disease",
    name: "Heart disease & heart failure",
    blurb:
      "For coronary disease the target is cholesterol and blood pressure. In heart failure, fluid and sodium control matter most.",
    goals: [
      "Lower saturated fat and replace it with unsaturated fat",
      "Reduce sodium; in heart failure this is the main dietary lever",
      "Follow any individual fluid restriction exactly",
      "Maintain muscle — cardiac cachexia is common and harmful in advanced heart failure",
    ],
    recommended: [
      "Oily fish twice weekly: sardines, mackerel, salmon, tilapia where oily species are available",
      "Olive, rapeseed or groundnut oil instead of butter, lard and palm oil",
      "Oats, barley and beans — soluble fibre lowers cholesterol",
      "Vegetables, fruit, nuts and seeds daily",
      "Lean protein at each meal to protect muscle",
    ],
    limit: [
      "Salt, stock cubes and processed meat — critical in heart failure",
      "Butter, ghee, palm oil, fatty cuts and full-fat processed dairy",
      "Pastry, fried foods and commercial baked goods",
      "Alcohol, especially in cardiomyopathy",
      "Large fluid volumes if you have been given a restriction",
    ],
    timing: [
      "Smaller, more frequent meals reduce breathlessness after eating in heart failure.",
      "Weigh yourself at the same time each morning, after passing urine, before breakfast.",
      "Take diuretics early in the day so you are not up all night.",
    ],
    portions: [
      "Fill half the plate with vegetables, a quarter with whole grains, a quarter with lean protein.",
      "In heart failure, count all fluids including soup, ice, jelly and the milk in tea.",
      "A weight gain of 2 kg over two to three days usually means fluid — follow your action plan.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Oats with milk and berries; unsalted nuts" },
      { meal: "Lunch", items: "Lentil soup made without stock cubes, wholemeal bread, salad" },
      { meal: "Snack", items: "Apple and a small handful of walnuts" },
      { meal: "Dinner", items: "Grilled mackerel, steamed greens, small potato portion" },
    ],
    myths: [
      {
        myth: "All fat is bad for the heart.",
        truth:
          "Replacing saturated fat with unsaturated fat lowers risk. Removing fat entirely does not.",
      },
      {
        myth: "Drinking lots of water is always healthy.",
        truth:
          "In heart failure with a fluid restriction, extra fluid causes breathlessness and admissions.",
      },
    ],
    challenges: [
      "Breathlessness while eating — try softer foods, smaller portions and rest before meals.",
      "Loss of appetite and taste changes with heart failure medication.",
      "Unintentional weight loss in advanced disease needs energy-dense food, not restriction.",
    ],
    seeDietitian: [
      "You have a fluid restriction you cannot keep to",
      "You are losing weight or muscle",
      "You have heart failure plus kidney disease or diabetes",
    ],
  },
  {
    slug: "kidney-disease",
    name: "Kidney disease & dialysis",
    blurb:
      "The most individual diet in medicine — it changes with your stage, your bloods and whether you are on dialysis. Never self-prescribe it.",
    goals: [
      "Control potassium and phosphate within the range your team sets",
      "Keep to your individual fluid allowance",
      "Get enough protein — needs rise substantially once on dialysis",
      "Limit sodium to protect blood pressure and thirst",
    ],
    recommended: [
      "Protein at each meal on dialysis: eggs, fish, chicken, meat, tofu — quantity as prescribed",
      "Lower-potassium vegetables: cabbage, green beans, cauliflower, peppers, onions, cucumber",
      "Lower-potassium fruit: apple, berries, grapes, pineapple, pawpaw in measured portions",
      "White rice, pasta, bread and maize meal as controlled carbohydrate sources",
      "Boiling and discarding the water for potatoes and root vegetables to reduce potassium",
    ],
    limit: [
      "High-potassium foods when potassium is high: bananas, oranges, potatoes, tomatoes, beans, avocado, dried fruit",
      "Phosphate additives — processed meats, cola, processed cheese, baked goods (look for 'phos' on labels)",
      "Salt and salt substitutes — potassium-based substitutes are dangerous here",
      "Fluid above your allowance, including soup, ice and jelly",
      "Starfruit, which is toxic in kidney failure",
    ],
    timing: [
      "Take phosphate binders with the first mouthful of food, not afterwards.",
      "Spread protein through the day rather than one large evening meal.",
      "Plan fluid across the day; save some allowance for the evening when thirst peaks.",
    ],
    portions: [
      "Protein and fluid targets are individual — use the numbers your renal dietitian gives you.",
      "Measure fluids in a marked jug so you can see the day's allowance disappearing.",
      "One portion of a permitted fruit at a time, not several.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "White toast with egg; apple; measured tea" },
      { meal: "Lunch", items: "Chicken with white rice and boiled cabbage and carrots" },
      { meal: "Snack", items: "Rice cakes with a little butter; measured squash" },
      { meal: "Dinner", items: "Fish with pasta and green beans; tinned pears (drained)" },
    ],
    myths: [
      {
        myth: "A kidney diet means eating less protein at every stage.",
        truth:
          "Before dialysis protein may be moderated; once on dialysis, protein needs go up. The advice reverses.",
      },
      {
        myth: "Herbal remedies are safe because they are natural.",
        truth:
          "Many herbal products are high in potassium or directly nephrotoxic. Check every one with the renal team.",
      },
    ],
    challenges: [
      "Constant thirst — use ice chips, frozen grapes, sour sweets, lemon slices and mouth rinses.",
      "Poor appetite on dialysis days — eat well on non-dialysis days and use prescribed supplements.",
      "Diabetes plus kidney disease requires an individually reconciled plan.",
    ],
    seeDietitian: [
      "Always — renal nutrition should never be self-managed",
      "After any change in potassium, phosphate or albumin results",
      "When starting dialysis, or after a transplant",
    ],
  },
  {
    slug: "liver-disease",
    name: "Liver disease",
    blurb:
      "Malnutrition is present in most people with cirrhosis and is frequently missed. Eating little and often is the core of the plan.",
    goals: [
      "Prevent muscle loss — the strongest predictor of outcome in cirrhosis",
      "Provide enough energy and protein, contrary to outdated advice to restrict protein",
      "Control sodium if there is ascites or oedema",
      "Avoid alcohol completely",
    ],
    recommended: [
      "Protein at every meal: eggs, fish, chicken, dairy, beans, tofu",
      "A late evening snack with carbohydrate and protein — this reduces overnight muscle breakdown",
      "Small frequent meals: three meals plus two to three snacks",
      "Soft, easy-to-eat foods when appetite is poor",
      "Vegetables and fruit for micronutrients, as tolerated",
    ],
    limit: [
      "Alcohol — entirely, at any stage",
      "Salt if you have ascites: no added salt, no stock cubes, no processed meat",
      "Raw shellfish, which carries serious infection risk in cirrhosis",
      "Very large single meals, which are poorly tolerated",
    ],
    timing: [
      "Never go more than four to six hours without eating during the day.",
      "Always take a bedtime snack — it is one of the best-evidenced interventions in cirrhosis.",
      "Eat something within an hour of waking.",
    ],
    portions: [
      "Small plates, eaten more often, beat three large meals.",
      "Aim for a protein source roughly the size of your palm at each main meal, unless told otherwise.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Eggs on toast; milk" },
      { meal: "Mid-morning", items: "Yoghurt with banana" },
      { meal: "Lunch", items: "Chicken and vegetable stew with rice, no added salt" },
      { meal: "Afternoon", items: "Peanut butter sandwich" },
      { meal: "Dinner", items: "Fish, potatoes, greens" },
      { meal: "Bedtime", items: "Milk with cereal, or bread with cheese — do not skip this" },
    ],
    myths: [
      {
        myth: "People with liver disease should avoid protein.",
        truth:
          "Protein restriction is outdated and harmful. Even with encephalopathy, protein is usually maintained.",
      },
      {
        myth: "Liver 'detox' supplements help.",
        truth:
          "Many supplements are hepatotoxic. Check everything, including herbal teas, with your team.",
      },
    ],
    challenges: [
      "Ascites makes you feel full quickly — eat small, energy-dense meals.",
      "Nausea and taste changes are common; cold foods often go down more easily.",
      "Encephalopathy affects appetite and safety around cooking — supervision may be needed.",
    ],
    seeDietitian: [
      "Any cirrhosis diagnosis warrants at least one dietetic assessment",
      "Unintentional weight or muscle loss",
      "Ascites needing sodium restriction",
    ],
  },
  {
    slug: "cancer",
    name: "Cancer",
    blurb:
      "Through treatment the priority is maintaining weight, muscle and strength — this is not the time for restrictive eating.",
    goals: [
      "Prevent unintentional weight and muscle loss",
      "Meet raised protein needs during and after treatment",
      "Manage symptoms that block eating: nausea, mouth sores, taste change, early fullness",
      "Eat safely when immunity is low",
    ],
    recommended: [
      "Protein at every meal and snack: eggs, dairy, fish, chicken, beans, tofu, nuts",
      "Energy-dense additions when weight is falling: oil, butter, cream, milk powder, nut butters, honey",
      "Soft, moist foods when the mouth is sore: stews, soups, porridge, custard, smoothies",
      "Cold or room-temperature foods when smells trigger nausea",
      "Small frequent meals rather than three large ones",
      "Fluids between meals rather than with them, to avoid filling up",
    ],
    limit: [
      "Unpasteurised dairy, raw eggs, undercooked meat and unwashed produce when immunity is low",
      "Grapefruit and some herbal supplements, which interact with chemotherapy",
      "Alcohol during treatment, particularly with mouth or throat involvement",
      "Very spicy or acidic foods when the mouth is sore",
      "Unproven restrictive 'anti-cancer' diets that cause weight loss",
    ],
    timing: [
      "Eat by the clock rather than by appetite — every two to three hours.",
      "Eat the largest meal when your appetite is best, often the morning.",
      "Take anti-sickness medication before eating, not after nausea starts.",
    ],
    portions: [
      "Small portions, more often. A full plate can be enough to put you off entirely.",
      "Aim for a protein source at every eating occasion, however small.",
      "Fortify rather than increase volume — add calories to what you can manage.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge made with full-fat milk, honey and nut butter" },
      { meal: "Mid-morning", items: "Fortified milkshake or yoghurt" },
      { meal: "Lunch", items: "Chicken and vegetable soup with added cream, soft bread" },
      { meal: "Afternoon", items: "Cheese and crackers, or custard" },
      { meal: "Dinner", items: "Fish pie with mashed potato and soft vegetables" },
      { meal: "Evening", items: "Milky drink or ice cream" },
    ],
    myths: [
      {
        myth: "Sugar feeds cancer, so it must be eliminated.",
        truth:
          "All cells use glucose. Cutting out carbohydrate does not starve tumours, but it does cause weight loss that worsens outcomes.",
      },
      {
        myth: "You should fast or juice to cleanse during treatment.",
        truth:
          "Weight and muscle loss during treatment is associated with worse tolerance and outcomes. Discuss any fasting protocol with your oncology team first.",
      },
    ],
    challenges: [
      "Chemotherapy: nausea, taste change, mouth ulcers, diarrhoea or constipation.",
      "Radiotherapy to head, neck or abdomen: pain on swallowing, dryness, bowel changes.",
      "Surgery: raised protein needs and altered digestion.",
      "Steroids: raised appetite and blood glucose, then a crash.",
    ],
    seeDietitian: [
      "Any unintentional weight loss of 5% or more",
      "Difficulty swallowing or persistent mouth pain",
      "Head, neck, oesophageal, gastric or pancreatic cancer — refer early",
      "Considering any restrictive diet or supplement",
    ],
  },
  {
    slug: "hiv",
    name: "HIV",
    blurb:
      "With effective treatment the focus shifts from wasting to long-term cardiovascular and metabolic health — though food security remains the first issue for many.",
    goals: [
      "Maintain a healthy weight and muscle mass",
      "Support the immune system with an adequate, varied diet",
      "Manage the metabolic effects of some antiretrovirals: lipids, glucose, fat distribution",
      "Eat safely to reduce foodborne infection risk when CD4 is low",
    ],
    recommended: [
      "Adequate protein daily: beans, eggs, fish, chicken, dairy, groundnuts, soya",
      "Whole grains and starchy staples for energy",
      "Vegetables and fruit, washed well, for micronutrients",
      "Iron and vitamin B rich foods, especially where anaemia is common",
      "Safe, treated or boiled drinking water",
    ],
    limit: [
      "Unpasteurised milk, raw eggs, undercooked meat and unwashed produce when immunity is low",
      "Alcohol, which affects adherence and the liver",
      "High saturated fat and sugary drinks, given the raised cardiovascular risk",
      "High-dose supplements taken without advice — some interact with antiretrovirals",
    ],
    timing: [
      "Follow the food instructions for your specific regimen — some need food, others an empty stomach.",
      "Tie medication to a daily meal to support adherence.",
      "Eat small frequent meals during periods of poor appetite or diarrhoea.",
    ],
    portions: [
      "Balanced plate: half vegetables, a quarter protein, a quarter starch.",
      "Increase portions during illness or weight loss rather than reducing them.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge with milk and groundnut paste; fruit" },
      { meal: "Lunch", items: "Beans with maize meal or rice and leafy greens" },
      { meal: "Snack", items: "Boiled egg or yoghurt" },
      { meal: "Dinner", items: "Fish or chicken stew with vegetables and starch" },
    ],
    myths: [
      {
        myth: "Special foods or herbs can treat HIV.",
        truth:
          "Nothing replaces antiretroviral therapy, and some herbal products reduce drug levels dangerously.",
      },
      {
        myth: "Weight gain always means the treatment is working well.",
        truth:
          "Some regimens cause significant weight gain and metabolic change. Track weight and lipids with your clinic.",
      },
    ],
    challenges: [
      "Diarrhoea and nausea in early treatment — small frequent meals, fluids with salt and sugar.",
      "Oral thrush and mouth pain — soft, cool, bland foods.",
      "Food insecurity — ask the clinic about food support programmes; adherence is harder when hungry.",
      "Tuberculosis co-infection substantially raises energy and protein needs.",
    ],
    seeDietitian: [
      "Unintentional weight loss or wasting",
      "Persistent diarrhoea",
      "Raised lipids, glucose or significant weight gain on treatment",
      "Pregnancy, or a child living with HIV",
    ],
  },
  {
    slug: "stroke-recovery",
    name: "Stroke recovery",
    blurb:
      "Two priorities at once: eating safely when swallowing is impaired, and eating well to prevent another stroke.",
    goals: [
      "Eat and drink safely at the texture level the speech therapist has set",
      "Prevent malnutrition and dehydration during rehabilitation",
      "Reduce blood pressure, cholesterol and glucose to prevent recurrence",
      "Support strength for rehabilitation with adequate protein",
    ],
    recommended: [
      "Foods at the exact texture prescribed — modified only as advised",
      "Thickened fluids at the prescribed level if fluids are unsafe",
      "Protein at each meal to support rehabilitation: eggs, fish, minced meat, dairy, pulses",
      "Vegetables, fruit and whole grains as tolerated, for secondary prevention",
      "Fortified soft foods when intake is low: milk powder in porridge, cream in soups",
    ],
    limit: [
      "Salt, processed meat and stock cubes",
      "Mixed textures such as soup with lumps, which are high-risk in dysphagia",
      "Dry, crumbly foods like biscuits and rice when swallowing is impaired",
      "Alcohol, which raises stroke risk and worsens swallow safety",
    ],
    timing: [
      "Eat sitting fully upright and stay upright for 30 minutes afterwards.",
      "Eat when least fatigued — often earlier in the day.",
      "Allow much more time than feels normal; rushing is the main cause of choking.",
    ],
    portions: [
      "Small spoonfuls, one at a time, with a check that the mouth is empty before the next.",
      "Small frequent meals if fatigue limits how long you can eat.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Smooth porridge fortified with milk powder" },
      { meal: "Mid-morning", items: "Thick yoghurt or a fortified milkshake" },
      { meal: "Lunch", items: "Minced chicken in gravy with mashed potato and soft vegetables" },
      { meal: "Afternoon", items: "Custard or smooth fruit purée" },
      { meal: "Dinner", items: "Smooth fish pie with soft greens" },
    ],
    myths: [
      {
        myth: "If they cough a little, it is fine to continue.",
        truth:
          "Coughing on food or drink is a warning sign. Stop and ask for a swallow reassessment.",
      },
      {
        myth: "Silent aspiration is obvious.",
        truth:
          "Some people aspirate without coughing at all. Recurrent chest infections may be the only sign.",
      },
    ],
    challenges: [
      "Weakness on one side of the mouth causing food pocketing — check the cheek after meals.",
      "One-handed eating — adapted plates, cutlery and non-slip mats help a great deal.",
      "Fatigue meaning meals go unfinished — offer smaller, more frequent, higher-energy meals.",
      "Low mood reducing appetite; treat the mood as well as the nutrition.",
    ],
    seeDietitian: [
      "Any texture-modified diet",
      "Weight loss during rehabilitation",
      "Tube feeding, or transition from tube to oral eating",
    ],
  },
  {
    slug: "gastrointestinal",
    name: "Gastrointestinal disorders",
    blurb:
      "IBS, IBD, coeliac disease, reflux and post-surgical guts each need different advice — the one common rule is not to over-restrict without supervision.",
    goals: [
      "Control symptoms with the smallest necessary restriction",
      "Prevent nutrient deficiencies caused by malabsorption or elimination diets",
      "Maintain weight and muscle, especially in active inflammatory disease",
      "Re-expand the diet once symptoms settle",
    ],
    recommended: [
      "Regular meals, eaten slowly and chewed thoroughly",
      "Soluble fibre — oats, bananas, peeled potatoes — which is usually better tolerated than insoluble",
      "Adequate fluid, especially with a stoma or with diarrhoea",
      "Strict gluten avoidance in coeliac disease, including cross-contamination",
      "Protein and energy-dense foods during flares of inflammatory bowel disease",
    ],
    limit: [
      "Trigger foods identified through a supervised trial — not by guesswork",
      "Very high-fat and fried meals in reflux and gallbladder disease",
      "Caffeine, alcohol and fizzy drinks in reflux",
      "Skins, pips, nuts and tough fibre during a stricture or acute flare",
    ],
    timing: [
      "Smaller, more frequent meals reduce symptoms in most gut conditions.",
      "In reflux, avoid eating within three hours of lying down and raise the head of the bed.",
      "With a stoma, eat a regular pattern; skipping meals worsens output problems.",
    ],
    portions: [
      "Moderate portions; large meals are a trigger in their own right.",
      "Increase fibre gradually — sudden increases cause pain and bloating.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Oat porridge with a ripe banana" },
      { meal: "Lunch", items: "Chicken with white rice and well-cooked carrots" },
      { meal: "Snack", items: "Lactose-free yoghurt or a rice cake with smooth nut butter" },
      { meal: "Dinner", items: "Baked fish with peeled potatoes and courgette" },
    ],
    myths: [
      {
        myth: "Cutting out whole food groups is the safest first step.",
        truth:
          "Unsupervised elimination causes deficiency and eating anxiety. Low-FODMAP and similar diets are short-term, dietitian-led tools.",
      },
      {
        myth: "Gluten-free is healthier for everyone.",
        truth:
          "Only in coeliac disease and diagnosed sensitivity. Otherwise it removes fibre and fortified nutrients for no benefit.",
      },
    ],
    challenges: [
      "Iron, B12, folate, calcium and vitamin D deficiencies are common — ask for monitoring.",
      "Post-surgical malabsorption may require enzyme replacement or specific supplements.",
      "Fear of eating outside the home; work on gradual re-expansion with support.",
    ],
    seeDietitian: [
      "Before starting any elimination or low-FODMAP diet",
      "Coeliac disease at diagnosis and annually",
      "Inflammatory bowel disease flares, strictures or surgery",
      "A new stoma",
    ],
  },
  {
    slug: "obesity",
    name: "Weight management",
    blurb:
      "Modest, sustained weight loss improves blood pressure, glucose, joints, sleep apnoea and fertility. Speed is not the goal.",
    goals: [
      "Lose 5–10% of body weight and keep it off",
      "Preserve muscle by combining protein and resistance activity",
      "Change the food environment rather than relying on willpower",
      "Address the drivers: sleep, stress, medication, mood and eating patterns",
    ],
    recommended: [
      "Protein at every meal to reduce hunger and protect muscle",
      "High-volume, low-energy foods: vegetables, salads, broth-based soups",
      "Whole grains and pulses for fullness",
      "Water, unsweetened tea and coffee in place of caloric drinks",
      "Regular meals — most people who skip meals compensate later",
    ],
    limit: [
      "Sugary drinks and juices, which add energy without fullness",
      "Ultra-processed snacks kept within easy reach at home",
      "Large restaurant and takeaway portions",
      "Alcohol, which adds energy and lowers restraint",
      "Eating while distracted by screens",
    ],
    timing: [
      "Eat a substantial breakfast with protein if you tend to overeat in the evening.",
      "Keep eating within a consistent daily window; erratic patterns worsen control.",
      "Plan an evening routine that is not centred on food.",
    ],
    portions: [
      "Half the plate vegetables, a quarter protein, a quarter starch.",
      "Use smaller plates and serve from the kitchen rather than the table.",
      "Pre-portion snacks instead of eating from a packet.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Eggs with vegetables and a slice of wholegrain bread" },
      { meal: "Lunch", items: "Large salad with beans or chicken and a small portion of grain" },
      { meal: "Snack", items: "Yoghurt with fruit" },
      { meal: "Dinner", items: "Grilled fish or tofu with plenty of vegetables and a fist of starch" },
    ],
    myths: [
      {
        myth: "It is simply a matter of willpower.",
        truth:
          "Weight is regulated biologically. Appetite hormones defend lost weight, which is why environment, medication and support matter more than resolve.",
      },
      {
        myth: "Carbohydrates must be eliminated.",
        truth:
          "Every dietary pattern works when it creates a sustained energy deficit. The best one is the one you can keep.",
      },
    ],
    challenges: [
      "Steroids, antipsychotics, insulin and some antidepressants promote weight gain — ask about alternatives.",
      "Poor sleep and chronic stress increase appetite measurably.",
      "Joint pain and fatigue limit activity; start with what is possible, not ideal.",
      "Weight stigma from clinicians is common and makes people avoid care — you are entitled to respectful treatment.",
    ],
    seeDietitian: [
      "Weight affecting mobility, breathing or diabetes control",
      "Considering weight-loss medication or surgery",
      "A history of disordered eating",
    ],
  },
  {
    slug: "malnutrition",
    name: "Malnutrition & unintentional weight loss",
    blurb:
      "Under-nutrition slows healing, weakens immunity and lengthens hospital stays. It is common, treatable and frequently missed.",
    goals: [
      "Stop further weight loss first, then rebuild",
      "Increase energy and protein without increasing meal volume",
      "Treat the causes: pain, nausea, mouth problems, low mood, poverty, isolation",
      "Monitor weight weekly rather than guessing",
    ],
    recommended: [
      "Food fortification: full-fat milk, cream, cheese, butter, oil, milk powder, nut butters, honey",
      "Nourishing drinks between meals: milkshakes, smoothies, malted milk",
      "Protein at every eating occasion, even snacks",
      "Small meals every two to three hours, eaten by the clock",
      "Prescribed oral nutritional supplements where food alone is not enough",
    ],
    limit: [
      "Low-fat and 'diet' products — the wrong direction entirely here",
      "Filling up on tea, water or soup before meals",
      "Large plated portions, which discourage eating",
      "Long gaps without food",
    ],
    timing: [
      "Eat something every two to three hours, whether or not you feel hungry.",
      "Take nourishing drinks between meals, not with them.",
      "Eat the biggest meal at the time of day your appetite is best.",
    ],
    portions: [
      "Small plates, energy-dense contents.",
      "Add 100–200 extra calories per meal by fortifying rather than by adding volume.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Porridge made with full-fat milk, cream and honey" },
      { meal: "Mid-morning", items: "Fortified milkshake" },
      { meal: "Lunch", items: "Soup with added cream and grated cheese; buttered bread" },
      { meal: "Afternoon", items: "Custard, or cheese and crackers" },
      { meal: "Dinner", items: "Mashed potato with butter, minced meat in gravy, soft vegetables" },
      { meal: "Bedtime", items: "Milky drink or ice cream" },
    ],
    myths: [
      {
        myth: "Losing weight is fine as long as you were overweight before.",
        truth:
          "Rapid unintentional loss means muscle loss regardless of starting weight, and it predicts worse outcomes.",
      },
      {
        myth: "Supplements alone will fix it.",
        truth:
          "They work alongside fortified food, and only if the underlying cause — pain, nausea, mouth ulcers, depression — is also treated.",
      },
    ],
    challenges: [
      "Poor appetite from illness, treatment or grief.",
      "Difficulty shopping and cooking when living alone or frail.",
      "Dentures, mouth pain and dry mouth making eating slow and painful.",
      "Cost — fortification with milk powder, oil and eggs is cheaper than commercial supplements.",
    ],
    seeDietitian: [
      "Unintentional loss of 5% of body weight in 3–6 months",
      "BMI under 18.5, or under 20 with recent loss",
      "Eating very little for more than five days",
    ],
  },
  {
    slug: "thyroid",
    name: "Thyroid disorders",
    blurb:
      "Diet does not treat thyroid disease, but timing of medication, iodine and a few interactions genuinely matter.",
    goals: [
      "Take levothyroxine correctly so it is absorbed",
      "Get adequate but not excessive iodine",
      "Manage weight changes realistically alongside treatment",
      "Support bone and heart health where thyroid levels are over-treated",
    ],
    recommended: [
      "Iodine from ordinary sources: iodised salt, dairy, fish, eggs",
      "Selenium sources such as fish, eggs, brazil nuts (a couple, not a handful)",
      "Adequate iron, calcium and vitamin D from food, taken away from thyroid medication",
      "A balanced diet with enough fibre — constipation is common in hypothyroidism",
    ],
    limit: [
      "Kelp and high-dose iodine supplements, which can worsen thyroid disease",
      "Calcium, iron and antacids within four hours of levothyroxine",
      "Very large quantities of raw goitrogenic vegetables (cabbage, kale) if iodine intake is low — cooking reduces the effect",
      "Excess caffeine and alcohol in hyperthyroidism, where they worsen symptoms",
    ],
    timing: [
      "Take levothyroxine on an empty stomach, 30–60 minutes before food, or at bedtime well after eating.",
      "Keep the timing consistent day to day.",
      "Separate soya, coffee, calcium and iron from the dose by at least four hours.",
    ],
    portions: [
      "Normal balanced portions; there is no special thyroid diet.",
      "One to two brazil nuts a day is plenty for selenium — more can be harmful.",
    ],
    sampleDay: [
      { meal: "On waking", items: "Levothyroxine with water only" },
      { meal: "Breakfast (1 hour later)", items: "Eggs with wholegrain toast" },
      { meal: "Lunch", items: "Fish with salad and potatoes" },
      { meal: "Snack", items: "Yoghurt and fruit" },
      { meal: "Dinner", items: "Chicken with vegetables and rice" },
    ],
    myths: [
      {
        myth: "Going gluten-free treats thyroid disease.",
        truth:
          "Only relevant if you also have coeliac disease, which is more common in autoimmune thyroid disease — get tested rather than assuming.",
      },
      {
        myth: "Iodine supplements boost a sluggish thyroid.",
        truth:
          "Excess iodine can trigger or worsen both under- and overactive thyroid disease.",
      },
    ],
    challenges: [
      "Weight change is often modest once treated; expectations need to be realistic.",
      "Absorption problems from coeliac disease, gastric surgery or other medications.",
      "Hyperthyroidism raises energy needs substantially until it is controlled.",
    ],
    seeDietitian: [
      "Thyroid disease with coeliac disease or diabetes",
      "Significant unexplained weight change",
      "Pregnancy with thyroid disease",
    ],
  },
  {
    slug: "pregnancy",
    name: "Pregnancy with a medical condition",
    blurb:
      "Pregnancy alongside diabetes, hypertension, kidney or thyroid disease needs joint obstetric and dietetic care — not general pregnancy advice.",
    goals: [
      "Meet raised needs for folate, iron, iodine, calcium and protein",
      "Keep the underlying condition well controlled, which matters more than any single food",
      "Achieve appropriate weight gain for your starting BMI",
      "Eat safely to avoid listeria, toxoplasma and mercury exposure",
    ],
    recommended: [
      "Folic acid supplement before conception and through the first trimester — a higher dose in diabetes",
      "Iron-rich foods with vitamin C to aid absorption",
      "Calcium and vitamin D daily",
      "Two portions of fish weekly, one oily, avoiding high-mercury species",
      "Regular meals with protein and low-glycaemic carbohydrate, particularly in gestational diabetes",
    ],
    limit: [
      "Unpasteurised dairy, soft mould-ripened cheese, pâté, raw or undercooked eggs and meat",
      "Shark, swordfish and marlin; limit tuna",
      "Alcohol entirely; caffeine to about 200 mg a day",
      "Liver and vitamin A supplements",
      "High-salt foods where blood pressure is a concern",
    ],
    timing: [
      "Small frequent meals help nausea in early pregnancy and glucose control later.",
      "In gestational diabetes, keep breakfast carbohydrate small — glucose tolerance is lowest in the morning.",
      "Have a bedtime snack if morning ketones or hypoglycaemia are a problem.",
    ],
    portions: [
      "You do not need to eat for two — extra energy is needed only in the later trimesters, and modestly.",
      "Spread carbohydrate across three meals and two to three snacks in gestational diabetes.",
    ],
    sampleDay: [
      { meal: "Breakfast", items: "Eggs with wholegrain toast; small glass of milk" },
      { meal: "Snack", items: "Yoghurt with berries" },
      { meal: "Lunch", items: "Lentil salad with leafy greens and wholegrain bread" },
      { meal: "Snack", items: "Apple with peanut butter" },
      { meal: "Dinner", items: "Salmon with sweet potato and broccoli" },
      { meal: "Bedtime", items: "Milk and a small oatcake" },
    ],
    myths: [
      {
        myth: "Gestational diabetes means cutting out all carbohydrate.",
        truth:
          "The baby needs carbohydrate. Type, portion and spacing are what change — with monitoring to guide it.",
      },
      {
        myth: "Cravings indicate a nutrient deficiency.",
        truth: "There is no good evidence for this. Persistent craving for non-food items does need medical review.",
      },
    ],
    challenges: [
      "Severe nausea and vomiting may need medical treatment, not just dry crackers.",
      "Iron supplements commonly cause constipation — increase fluid and fibre, ask about alternatives.",
      "Existing diabetes needs much tighter targets and specialist input from before conception.",
    ],
    seeDietitian: [
      "Gestational diabetes, or pre-existing diabetes in pregnancy",
      "Kidney, liver or thyroid disease in pregnancy",
      "Poor weight gain, hyperemesis, or a restrictive diet",
    ],
  },
];

export function findNutritionCondition(slug: string) {
  return NUTRITION_CONDITIONS.find((c) => c.slug === slug);
}
