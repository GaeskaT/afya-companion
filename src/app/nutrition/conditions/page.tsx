import type { Metadata } from "next";
import { NUTRITION_CONDITIONS } from "@/content/nutrition/conditions";
import { Disclaimer, Grid, LinkCard, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Condition-specific nutrition",
  description:
    "Recommended foods, foods to limit, meal timing, portions, sample days and common myths for thirteen conditions.",
};

export default function NutritionConditionsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Nutrition by condition"
        intro="Each guide covers what to build meals around, what to limit, when to eat, portion guidance, a sample day, the myths worth dismantling, and when to ask for a dietitian."
      />
      <Grid cols={2}>
        {NUTRITION_CONDITIONS.map((condition) => (
          <LinkCard
            key={condition.slug}
            href={`/nutrition/conditions/${condition.slug}`}
            title={condition.name}
            description={condition.blurb}
          />
        ))}
      </Grid>
      <Disclaimer />
    </Page>
  );
}
