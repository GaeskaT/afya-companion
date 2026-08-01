import type { Metadata } from "next";
import Link from "next/link";
import { Bullets, Card, Disclaimer, Page, PageHeader, SectionTitle } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "What CareCircle is, what it is not, where the content comes from, and how your data is handled.",
};

export default function AboutPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="About"
        title={site.name}
        intro="Supporting the emotional and nutritional wellbeing of patients, caregivers and families through every stage of illness."
      />

      <section className="space-y-3">
        <h2 className="text-lg">The idea</h2>
        <p className="text-[0.98rem] leading-relaxed text-ink-soft">
          Medical care treats the illness. Almost everything else — the fear
          before a scan, the caregiver who has not slept properly in a year, the
          child inventing worse explanations than the truth, the weight quietly
          falling off during treatment — happens between appointments, where
          nobody is looking.
        </p>
        <p className="text-[0.98rem] leading-relaxed text-ink-soft">
          CareCircle addresses three people at once: the patient, the caregiver,
          and the family around them. It combines psychological support, grief
          and bereavement care, screening tools, nutrition and dietetics, and
          routes into professional and peer help.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">What it is not</h2>
        <Bullets
          items={[
            "It does not diagnose. Screening questionnaires describe how you have been feeling; only a clinician can diagnose.",
            "It does not replace your doctor, nurse, psychologist or dietitian.",
            "It does not set individual renal, hepatic or fluid-restriction targets — those come from blood results and belong to your dietitian.",
            "It is not an emergency service. In a crisis, use your local emergency number.",
          ]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Where the content comes from</h2>
        <p className="text-[0.98rem] leading-relaxed text-ink-soft">
          The psychological material draws on cognitive behavioural therapy,
          acceptance and commitment therapy, problem-solving therapy, hope
          theory, dignity therapy and the standard models of grief and mourning.
          The screening instruments are published, widely used tools — PHQ-9,
          GAD-7, the Perceived Stress Scale, the Caregiver Strain Index, the
          Copenhagen Burnout Inventory, the Athens Insomnia Scale, the WHO-5
          Wellbeing Index and the Brief Grief Questionnaire — each credited on
          its own page.
        </p>
        <p className="text-[0.98rem] leading-relaxed text-ink-soft">
          The nutrition material follows mainstream dietetic practice for the
          conditions covered. Where guidance is genuinely individual — kidney,
          liver and heart failure above all — the app says so rather than
          inventing a number.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Your data</h2>
        <Card>
          <Bullets
            items={[
              "Check-ins, journals, screening scores, food and fluid records, goals and your safety plan are stored in this browser only.",
              "Nothing is uploaded, and there is no account to create.",
              "Two features do leave your device, and say so on screen: appointment requests and community posts.",
              "You can export everything as a file, or delete all of it, from Settings.",
            ]}
          />
          <Link href="/settings" className="btn btn-soft mt-4 text-sm">
            Settings & privacy
          </Link>
        </Card>
      </section>

      <section>
        <SectionTitle title="Using it offline" />
        <p className="text-[0.98rem] leading-relaxed text-ink-soft">
          CareCircle installs to a phone home screen and keeps working without a
          signal — deliberately, because hospital basements, rural clinics and
          long ward nights are exactly when people need the crisis page and the
          breathing exercises.
        </p>
      </section>

      <Disclaimer />
    </Page>
  );
}
