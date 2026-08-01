import type { Metadata } from "next";
import { SCREENING_TOOLS } from "@/content/screening";
import { Callout, Grid, LinkCard, Page, PageHeader } from "@/components/ui";
import { AUDIENCE_LABEL } from "@/content/types";
import { SCREENING_DISCLAIMER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Screening questionnaires",
  description:
    "Validated questionnaires for depression, anxiety, stress, caregiver strain, burnout, sleep, wellbeing and grief.",
};

export default function ScreeningIndexPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Screening"
        title="Questionnaires"
        intro="Widely used, validated instruments — the same ones clinics use. They describe how you have been feeling recently and give you something concrete to take to your care team."
      />

      <Callout tone="info" title="Before you start">
        {SCREENING_DISCLAIMER}
      </Callout>

      <Grid cols={2}>
        {SCREENING_TOOLS.map((tool) => (
          <LinkCard
            key={tool.slug}
            href={`/tools/screening/${tool.slug}`}
            meta={tool.audience.map((a) => AUDIENCE_LABEL[a]).join(" · ")}
            title={`${tool.name} — ${tool.items.length} questions`}
            description={tool.intro}
          />
        ))}
      </Grid>

      <p className="text-xs text-muted">
        Your answers and scores are stored on this device only, so you can see
        the trend over weeks. Nothing is uploaded.
      </p>
    </Page>
  );
}
