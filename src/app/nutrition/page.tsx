import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer, Grid, LinkCard, Page, PageHeader, SectionTitle } from "@/components/ui";
import { NUTRITION_CONDITIONS } from "@/content/nutrition/conditions";
import { THERAPEUTIC_DIETS } from "@/content/nutrition/diets";
import { NUTRITION_LIBRARY } from "@/content/nutrition/library";

export const metadata: Metadata = {
  title: "Nutrition & dietetics",
  description:
    "Condition-specific nutrition, therapeutic diet plans, recipes, treatment-related eating problems, trackers, a nutrition assistant and dietitian consultations.",
};

export default function NutritionHubPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition & dietetics"
        title="Eating well through illness"
        intro="Nutrition affects recovery, energy, treatment tolerance and mood. This section covers what to eat for your condition, how to eat when treatment gets in the way, and how to keep the people around you fed too."
      />

      <Grid cols={2}>
        <LinkCard
          href="/nutrition/assessment"
          tone="primary"
          title="Build a personalised plan"
          description="Height, weight, conditions, appetite and goal → energy and protein estimates, a seven-day plan, a shopping list, and the flags worth raising with your team."
        />
        <LinkCard
          href="/nutrition/assistant"
          title="Nutrition assistant"
          description="Ask about food, symptoms, budgets and meal ideas. Works offline from this app's own guidance."
        />
        <LinkCard
          href="/nutrition/tracker"
          title="Food, fluid & weight tracker"
          description="Food diary, hydration, protein and veg counts, and a weight trend."
        />
        <LinkCard
          href="/nutrition/treatment"
          title="Nutrition during treatment"
          description="Chemotherapy, dialysis, surgery, radiotherapy, tube feeding, swallowing difficulty, appetite loss and nausea."
        />
        <LinkCard
          href="/nutrition/caregivers"
          title="Nutrition for caregivers"
          description="Feeding someone safely, preventing dehydration, monitoring weight — and not forgetting yourself."
        />
        <LinkCard
          href="/nutrition/family"
          title="Child & family nutrition"
          description="Feeding children with chronic illness, adolescents, school meals and family meals when someone is unwell."
        />
      </Grid>

      <section>
        <SectionTitle
          title="Nutrition by condition"
          action={{ href: "/nutrition/conditions", label: "See all" }}
        />
        <div className="flex flex-wrap gap-2">
          {NUTRITION_CONDITIONS.map((condition) => (
            <Link
              key={condition.slug}
              href={`/nutrition/conditions/${condition.slug}`}
              className="btn btn-ghost text-sm"
            >
              {condition.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Therapeutic diet plans"
          hint="Evidence-based plans with sample days"
          action={{ href: "/nutrition/diets", label: "See all" }}
        />
        <Grid cols={3}>
          {THERAPEUTIC_DIETS.slice(0, 6).map((diet) => (
            <LinkCard
              key={diet.slug}
              href={`/nutrition/diets/${diet.slug}`}
              title={diet.name}
              description={diet.purpose}
            />
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle
          title="Recipes"
          hint="Prep time, cost, nutrition and who each one suits"
          action={{ href: "/nutrition/recipes", label: "See all" }}
        />
        <Grid cols={2}>
          <LinkCard
            href="/nutrition/recipes"
            title="Recipe library"
            description="Twelve recipes built for illness: fortified, soft, low-salt, renal-friendly, high-protein and cheap."
          />
          <LinkCard
            href="/nutrition/library"
            title="Nutrition education"
            description="Labels, portions, budgets, immunity, mental health, ageing and meal preparation when energy is short."
          />
        </Grid>
      </section>

      <section>
        <SectionTitle title="Education library" />
        <Grid cols={3}>
          {NUTRITION_LIBRARY.slice(0, 6).map((topic) => (
            <LinkCard
              key={topic.slug}
              href={`/nutrition/library/${topic.slug}`}
              title={topic.title}
              description={topic.summary}
            />
          ))}
        </Grid>
      </section>

      <Disclaimer />
    </Page>
  );
}
