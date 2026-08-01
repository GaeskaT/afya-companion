import type { Metadata } from "next";
import Link from "next/link";
import { TREATMENT_GUIDES } from "@/content/nutrition/treatment";
import { Bullets, Callout, Card, Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nutrition during treatment",
  description:
    "Eating through chemotherapy, dialysis, surgery, radiotherapy, long-term medication, palliative care, tube feeding, swallowing difficulty, appetite loss and nausea.",
};

export default function TreatmentNutritionPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Nutrition during medical treatment"
        intro="Treatment changes appetite, taste, digestion and immunity. Working around the specific symptom in front of you beats general healthy-eating advice every time."
      />

      <nav className="flex flex-wrap gap-2">
        {TREATMENT_GUIDES.map((guide) => (
          <a key={guide.slug} href={`#${guide.slug}`} className="btn btn-ghost text-sm">
            {guide.name}
          </a>
        ))}
      </nav>

      <div className="space-y-8">
        {TREATMENT_GUIDES.map((guide) => (
          <section key={guide.slug} id={guide.slug} className="scroll-mt-20 space-y-3">
            <h2 className="text-xl">{guide.name}</h2>
            <p className="text-ink-soft">{guide.summary}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <p className="font-semibold text-good">What helps</p>
                <div className="mt-3">
                  <Bullets items={guide.tips} />
                </div>
              </Card>
              <Card>
                <p className="font-semibold text-warn">Avoid</p>
                <div className="mt-3">
                  <Bullets items={guide.avoid} />
                </div>
              </Card>
            </div>
            <Callout tone="danger" title="Contact your care team if">
              <ul className="mt-1 space-y-1">
                {guide.callTeam.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </Callout>
          </section>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <Link href="/care/dietitian" className="btn btn-soft text-sm">
          Book a dietitian
        </Link>
        <Link href="/nutrition/recipes" className="btn btn-soft text-sm">
          Recipes for treatment days
        </Link>
        <Link href="/nutrition/caregivers" className="btn btn-soft text-sm">
          For the person doing the feeding
        </Link>
      </div>

      <Disclaimer />
    </Page>
  );
}
