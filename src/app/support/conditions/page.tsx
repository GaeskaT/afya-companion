import type { Metadata } from "next";
import { CONDITIONS } from "@/content/conditions";
import { Disclaimer, Grid, LinkCard, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Support by condition",
  description:
    "Emotional, family and caregiver challenges, plus coping strategies and support resources, for twelve medical conditions.",
};

export default function ConditionsIndexPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Disease-specific support"
        title="By medical condition"
        intro="Every illness carries its own psychological signature. Each entry covers the emotional challenges, what the family and the caregiver face, practical coping strategies, and where to find help."
      />
      <Grid cols={2}>
        {CONDITIONS.map((condition) => (
          <LinkCard
            key={condition.slug}
            href={`/support/conditions/${condition.slug}`}
            title={condition.name}
            description={condition.blurb}
          />
        ))}
      </Grid>
      <Disclaimer />
    </Page>
  );
}
