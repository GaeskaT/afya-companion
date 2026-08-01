import type { Metadata } from "next";
import { THERAPEUTIC_DIETS } from "@/content/nutrition/diets";
import { Disclaimer, Grid, LinkCard, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Therapeutic diet plans",
  description:
    "Diabetic, renal, low-sodium, cardiac, high-protein, weight management, soft, cancer, pregnancy, child, elderly and plant-based plans.",
};

export default function DietsIndexPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Therapeutic diet plans"
        intro="Twelve evidence-based plans, each with its principles, what to include, what to avoid, a sample day and the cautions that matter."
      />
      <Grid cols={2}>
        {THERAPEUTIC_DIETS.map((diet) => (
          <LinkCard
            key={diet.slug}
            href={`/nutrition/diets/${diet.slug}`}
            title={diet.name}
            description={diet.purpose}
            meta={diet.conditions[0]}
          />
        ))}
      </Grid>
      <Disclaimer />
    </Page>
  );
}
