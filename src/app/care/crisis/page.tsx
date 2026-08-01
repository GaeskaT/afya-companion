import type { Metadata } from "next";
import Link from "next/link";
import {
  CRISIS_WARNING_SIGNS,
  HELPLINES,
  IMMEDIATE_GUIDANCE,
} from "@/content/crisis";
import { SafetyPlan } from "@/components/tools/SafetyPlan";
import { Bullets, Card, Page, PageHeader, SectionTitle, Steps } from "@/components/ui";
import { CRISIS_LINE_NOTE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crisis support",
  description:
    "Warning signs, immediate guidance, a safety plan you can fill in, and helplines by country.",
};

export default function CrisisPage() {
  return (
    <Page>
      <div className="rounded-2xl bg-danger-tint p-5">
        <h1 className="text-2xl text-danger">If you are not safe right now</h1>
        <p className="mt-2 text-[0.98rem] leading-relaxed text-danger">
          {CRISIS_LINE_NOTE}
        </p>
        <p className="mt-3 font-display text-xl text-danger">
          Call your local emergency number — 999, 112, 911 or your national
          number.
        </p>
      </div>

      <PageHeader
        eyebrow="Crisis support"
        title="Getting help now"
        intro="Serious illness, caregiving and grief all raise the risk of crisis. Whatever is happening, it is not a weakness and it is not permanent."
      />

      <section>
        <SectionTitle title="What to do" />
        <div className="grid gap-3 sm:grid-cols-3">
          {IMMEDIATE_GUIDANCE.map((block) => (
            <Card key={block.title}>
              <p className="font-semibold">{block.title}</p>
              <div className="mt-3">
                <Steps items={block.steps} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Warning signs" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <p className="font-semibold text-danger">Act today</p>
            <div className="mt-3">
              <Bullets items={CRISIS_WARNING_SIGNS.urgent} />
            </div>
          </Card>
          <Card>
            <p className="font-semibold text-warn">Something is building</p>
            <div className="mt-3">
              <Bullets items={CRISIS_WARNING_SIGNS.building} />
            </div>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Helplines"
          hint="Numbers vary by country and change over time — findahelpline.com lists over 100 countries."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {HELPLINES.map((line) => (
            <Card key={`${line.region}-${line.name}`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {line.region}
              </p>
              <p className="mt-1 font-semibold">{line.name}</p>
              <p className="mt-0.5 font-display text-lg">{line.contact}</p>
              <p className="mt-1 text-sm text-muted">{line.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Your safety plan"
          hint="Written when you are well, read when you are not"
        />
        <SafetyPlan />
      </section>

      <section>
        <SectionTitle title="Related" />
        <div className="flex flex-wrap gap-2">
          <Link href="/support/patient/low-mood-and-depression" className="btn btn-soft text-sm">
            Low mood and depression
          </Link>
          <Link href="/support/caregiver/burnout" className="btn btn-soft text-sm">
            Caregiver burnout
          </Link>
          <Link href="/tools/screening/phq-9" className="btn btn-soft text-sm">
            Depression questionnaire
          </Link>
          <Link href="/care/counselling" className="btn btn-soft text-sm">
            Counselling
          </Link>
          <Link href="/tools/breathing" className="btn btn-soft text-sm">
            Grounding exercise
          </Link>
        </div>
      </section>
    </Page>
  );
}
