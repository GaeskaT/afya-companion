import type { Metadata } from "next";
import { Disclaimer, Grid, LinkCard, Page, PageHeader, SectionTitle } from "@/components/ui";
import { SCREENING_TOOLS } from "@/content/screening";
import { MINDFULNESS_TIPS } from "@/content/daily";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Daily check-in, journals, breathing and relaxation, goals, validated screening questionnaires and a progress dashboard.",
};

export default function ToolsHubPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Daily wellness"
        title="Tools"
        intro="Short, practical things you can do today. Everything you enter stays on this device."
      />

      <Grid cols={2}>
        <LinkCard
          href="/tools/check-in"
          title="Daily check-in"
          description="Mood, energy, pain and sleep in about a minute — and the pattern over two weeks."
        />
        <LinkCard
          href="/tools/breathing"
          title="Breathing & relaxation"
          description="Five breathing patterns and five guided scripts: body scan, muscle relaxation, grounding, kindness, safe place."
        />
        <LinkCard
          href="/tools/journal"
          title="Journal"
          description="Pain and distress diary, thought records, and free writing nobody else will read."
        />
        <LinkCard
          href="/tools/gratitude"
          title="Gratitude & reflection"
          description="Three things a day, plus reflection prompts written for people living with illness."
        />
        <LinkCard
          href="/tools/goals"
          title="Goals"
          description="Goals with a bad-day version built in, so a difficult week pauses them rather than ending them."
        />
        <LinkCard
          href="/tools/milestones"
          title="My milestones"
          description="Markers worth moving towards — and a record of the ground you have already covered."
        />
        <LinkCard
          href="/tools/dashboard"
          title="Progress dashboard"
          description="Mood, pain, sleep, weight, BMI, fluid, eating pattern and questionnaire scores over time."
        />
      </Grid>

      <section>
        <SectionTitle
          title="Condition monitoring"
          hint="Charts you can hand to your clinician"
        />
        <Grid cols={2}>
          <LinkCard
            href="/tools/glucose"
            title="Blood sugar monitor"
            description="Log readings in mmol/L or mg/dL, chart the pattern, see time in range, and get hypo guidance when it matters."
          />
          <LinkCard
            href="/tools/blood-pressure"
            title="Blood pressure monitor"
            description="Systolic, diastolic and pulse over time, with the 7-day home average your clinician will ask for."
          />
        </Grid>
      </section>

      <section>
        <SectionTitle
          title="Screening questionnaires"
          hint="Validated tools — guidance, never diagnosis"
          action={{ href: "/tools/screening", label: "See all" }}
        />
        <Grid cols={3}>
          {SCREENING_TOOLS.slice(0, 6).map((tool) => (
            <LinkCard
              key={tool.slug}
              href={`/tools/screening/${tool.slug}`}
              title={tool.name}
              description={tool.fullName}
            />
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle title="Mindfulness in an ordinary day" />
        <Grid cols={2}>
          {MINDFULNESS_TIPS.map((tip) => (
            <div key={tip.title} className="card p-4">
              <p className="font-semibold">{tip.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{tip.body}</p>
            </div>
          ))}
        </Grid>
      </section>

      <Disclaimer />
    </Page>
  );
}
