import type { Metadata } from "next";
import { GratitudeTool } from "@/components/tools/JournalTool";
import { Card, Disclaimer, Grid, Page, PageHeader, SectionTitle } from "@/components/ui";
import { AFFIRMATIONS, REFLECTION_PROMPTS } from "@/content/daily";

export const metadata: Metadata = {
  title: "Gratitude & reflection",
  description:
    "A daily gratitude diary, reflection prompts and affirmations written for people living with illness.",
};

export default function GratitudePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Daily wellness"
        title="Gratitude & reflection"
        intro="Not forced positivity. Three small true things, and a question worth sitting with."
      />

      <GratitudeTool />

      <section>
        <SectionTitle title="Reflection prompts" hint="Use one when the page is blank" />
        <Grid cols={2}>
          {REFLECTION_PROMPTS.slice(0, 8).map((prompt) => (
            <Card key={prompt}>
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">{prompt}</p>
            </Card>
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle
          title="Affirmations that are not hollow"
          hint="Aimed slightly ahead of where you are, not at a fantasy"
        />
        <div className="flex flex-wrap gap-2">
          {AFFIRMATIONS.slice(0, 12).map((line) => (
            <span
              key={line}
              className="rounded-full bg-primary-tint px-3.5 py-2 text-sm font-medium text-primary-700"
            >
              {line}
            </span>
          ))}
        </div>
      </section>

      <Disclaimer />
    </Page>
  );
}
