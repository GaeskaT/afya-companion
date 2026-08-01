import type { Metadata } from "next";
import { NUTRITION_LIBRARY } from "@/content/nutrition/library";
import { Disclaimer, Grid, LinkCard, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nutrition education",
  description:
    "Healthy eating basics, food labels, portions, meal prep, budgets, treatment, recovery, immunity, mental health and healthy ageing.",
};

export default function NutritionLibraryPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Education library"
        intro="Short, practical, jargon-free. Everything here works offline once you have opened the app."
      />
      <Grid cols={2}>
        {NUTRITION_LIBRARY.map((topic) => (
          <LinkCard
            key={topic.slug}
            href={`/nutrition/library/${topic.slug}`}
            title={topic.title}
            description={topic.summary}
          />
        ))}
      </Grid>
      <Disclaimer />
    </Page>
  );
}
