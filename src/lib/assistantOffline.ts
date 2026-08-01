import { NUTRITION_CONDITIONS } from "@/content/nutrition/conditions";
import { THERAPEUTIC_DIETS } from "@/content/nutrition/diets";
import { RECIPES } from "@/content/nutrition/recipes";
import { TREATMENT_GUIDES } from "@/content/nutrition/treatment";

/**
 * The offline brain behind the nutrition assistant.
 *
 * When no model key is configured — or the network is down, which is the norm
 * in a hospital basement — the assistant still answers, by matching the
 * question against the app's own content library. It is deliberately
 * conservative: it explains, it points at a page, and it says when something
 * belongs with a dietitian instead.
 */

export type AssistantReply = {
  answer: string;
  links: { href: string; label: string }[];
  engine: string;
  escalate?: string;
};

const RED_FLAGS: { pattern: RegExp; message: string }[] = [
  {
    pattern: /(choking|chok(ed|ing)|food (goes|went) down the wrong|aspirat)/i,
    message:
      "Choking or coughing while eating needs a speech and language therapy assessment before anything else changes. Please contact the care team today.",
  },
  {
    pattern: /(losing weight|lost \d+ ?(kg|kilo|pound|lb)|weight loss|wasting)/i,
    message:
      "Unintentional weight loss of 5% or more is a malnutrition flag. Ask your care team for a dietitian referral rather than managing it alone.",
  },
  {
    pattern: /(not eaten|can'?t eat|haven'?t eaten|no appetite for (days|a week))/i,
    message:
      "Eating very little for more than about five days needs review — there is usually a treatable cause such as pain, nausea, constipation, mouth thrush or low mood.",
  },
  {
    pattern: /(vomit|being sick).*(blood|coffee ground)|blood in (my )?(stool|vomit)/i,
    message:
      "Blood in vomit or stool is an emergency symptom. Contact your care team or emergency services now.",
  },
  {
    pattern: /(suicid|kill myself|end my life|don'?t want to be here)/i,
    message:
      "Please go to the crisis support page now, or contact your local emergency number. You should not carry this alone.",
  },
];

export function offlineAssistant(
  question: string,
  context?: { conditions?: string[]; goal?: string },
): AssistantReply {
  const q = question.toLowerCase();
  const links: { href: string; label: string }[] = [];
  const parts: string[] = [];
  let escalate: string | undefined;

  for (const flag of RED_FLAGS) {
    if (flag.pattern.test(question)) {
      escalate = flag.message;
      break;
    }
  }

  // Condition match
  const condition = NUTRITION_CONDITIONS.find(
    (c) =>
      q.includes(c.slug.replace(/-/g, " ")) ||
      q.includes(c.name.toLowerCase()) ||
      (context?.conditions ?? []).includes(c.slug),
  );

  // Symptom / treatment match
  const guide = TREATMENT_GUIDES.find((g) => {
    const keys: Record<string, RegExp> = {
      chemotherapy: /chemo/i,
      dialysis: /dialysis/i,
      "surgery-recovery": /surgery|operation|post-?op|wound/i,
      radiotherapy: /radio(therapy)?|radiation/i,
      "long-term-medication": /medication|tablets|drug|interact/i,
      "palliative-care": /palliative|end of life|hospice|dying/i,
      "tube-feeding": /tube|peg|ng feed|enteral/i,
      "swallowing-difficulty": /swallow|dysphagia|choke|texture/i,
      "appetite-loss": /appetite|not hungry|won'?t eat|off my food/i,
      "nausea-and-vomiting": /nausea|sick|vomit|queasy/i,
    };
    return keys[g.slug]?.test(question);
  });

  if (guide) {
    parts.push(`**${guide.name}** — ${guide.summary}`);
    parts.push("What usually helps:");
    parts.push(guide.tips.slice(0, 5).map((t) => `• ${t}`).join("\n"));
    parts.push("Contact your team if:");
    parts.push(guide.callTeam.slice(0, 3).map((t) => `• ${t}`).join("\n"));
    links.push({
      href: `/nutrition/treatment#${guide.slug}`,
      label: `Full guide: ${guide.name}`,
    });
  }

  if (condition && !guide) {
    parts.push(`**${condition.name}** — ${condition.blurb}`);
    parts.push("Foods to build meals around:");
    parts.push(condition.recommended.slice(0, 4).map((t) => `• ${t}`).join("\n"));
    parts.push("Foods to limit:");
    parts.push(condition.limit.slice(0, 3).map((t) => `• ${t}`).join("\n"));
    links.push({
      href: `/nutrition/conditions/${condition.slug}`,
      label: `${condition.name}: full nutrition guidance`,
    });
  }

  if (/meal plan|what should i eat|menu|week|plan my/i.test(question)) {
    parts.push(
      "For a personalised week, use the nutrition assessment — it uses your height, weight, conditions, appetite and goal to build a seven-day skeleton plus a shopping list.",
    );
    links.push({ href: "/nutrition/assessment", label: "Build a personalised plan" });
  }

  if (/recipe|cook|meal idea|cheap|budget/i.test(question)) {
    const budget = /cheap|budget|afford|money/i.test(question);
    const picks = RECIPES.filter((r) => (budget ? r.costTier === "low" : true)).slice(0, 4);
    parts.push(
      budget
        ? "Cheap, high-nutrition recipes from the library:"
        : "Recipes that fit most plans:",
    );
    parts.push(
      picks
        .map((r) => `• ${r.name} — ${r.minutes} min, about ${r.costPerServing} per serving`)
        .join("\n"),
    );
    picks.slice(0, 2).forEach((r) =>
      links.push({ href: `/nutrition/recipes/${r.slug}`, label: r.name }),
    );
  }

  if (/water|fluid|hydrat|drink/i.test(question)) {
    parts.push(
      "As a general guide, about 30 ml of fluid per kg of body weight per day — more in fever, hot weather, vomiting or diarrhoea. If you have heart failure or kidney disease you may have a fluid restriction instead, and that always takes priority. Everything counts: soup, ice, jelly, and the milk in tea.",
    );
    links.push({ href: "/nutrition/tracker", label: "Track your fluid" });
  }

  if (/protein/i.test(question)) {
    parts.push(
      "Most adults need around 0.8–1.0 g of protein per kg per day; that rises to about 1.2–1.5 g/kg during cancer treatment, after surgery, in malnutrition and in older age. Kidney and liver disease are the exceptions — those targets are set individually by a dietitian. Spread it across the day rather than eating it all at dinner.",
    );
  }

  const diet = THERAPEUTIC_DIETS.find((d) =>
    q.includes(d.name.toLowerCase().replace(" diet", "")),
  );
  if (diet) {
    links.push({ href: `/nutrition/diets/${diet.slug}`, label: diet.name });
  }

  if (parts.length === 0) {
    parts.push(
      "I can help with condition-specific eating, symptoms that get in the way of eating (nausea, sore mouth, appetite loss, swallowing), therapeutic diets, meal ideas, recipes on a budget, protein and fluid targets, and shopping lists.",
    );
    parts.push(
      "Try asking something like: 'what should I eat during chemotherapy?', 'cheap high-protein meals', 'how do I manage a sore mouth?', or 'kidney diet basics'.",
    );
    links.push(
      { href: "/nutrition/conditions", label: "Condition-specific nutrition" },
      { href: "/nutrition/assessment", label: "Build a personalised plan" },
    );
  }

  parts.push(
    "_This is general education. For an individual plan — especially with kidney, liver or heart failure, during cancer treatment, or if you are losing weight — see a registered dietitian._",
  );

  return {
    answer: parts.join("\n\n"),
    links: links.slice(0, 4),
    engine: "offline library",
    escalate,
  };
}
