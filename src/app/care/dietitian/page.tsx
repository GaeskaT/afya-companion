import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "@/components/tools/BookingForm";
import { Bullets, Callout, Card, Disclaimer, Page, PageHeader, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Dietitian clinic",
  description:
    "Book an individual dietetic assessment, a virtual nutrition clinic, or a follow-up on your nutrition goals.",
};

const SERVICES = [
  {
    slug: "assessment",
    name: "Individual nutrition assessment",
    detail:
      "A full assessment — weight history, intake, symptoms, bloods and medication — resulting in a written plan.",
  },
  {
    slug: "meal-plan",
    name: "Individualised meal plan",
    detail:
      "A plan built around your condition, budget, culture and what you can actually face eating.",
  },
  {
    slug: "virtual-clinic",
    name: "Virtual nutrition clinic",
    detail: "A group session on a specific topic — renal, diabetes, cancer, weight, or feeding a relative.",
  },
  {
    slug: "question",
    name: "Ask a nutrition question",
    detail: "A short written answer from a registered dietitian, usually within a few working days.",
  },
  {
    slug: "follow-up",
    name: "Follow-up review",
    detail: "Review your goals, weight trend and any changes since the last plan.",
  },
  {
    slug: "caregiver",
    name: "Caregiver feeding support",
    detail:
      "Practical training in feeding assistance, texture modification, fortification and preventing dehydration.",
  },
];

export default function DietitianPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Professional care"
        title="Dietitian clinic"
        intro="A registered dietitian can do what an app cannot: set individual targets from your blood results, adjust for your medication, and reconcile two conditions whose diets conflict."
      />

      <Callout tone="warn" title="Ask for a dietitian if any of these apply">
        <ul className="mt-1 space-y-1">
          <li>· You have lost 5% or more of your body weight without trying</li>
          <li>· You have kidney or liver disease, or are on dialysis</li>
          <li>· You are in cancer treatment, or have head, neck or gut cancer</li>
          <li>· You have difficulty swallowing, or you are tube fed</li>
          <li>· You have two conditions whose diets pull in opposite directions</li>
          <li>· You are pregnant with diabetes or another medical condition</li>
          <li>· You are caring for a child whose growth has faltered</li>
        </ul>
      </Callout>

      <section className="space-y-3">
        {SERVICES.map((service) => (
          <Card key={service.slug}>
            <p className="font-semibold">{service.name}</p>
            <p className="mt-1 text-sm text-ink-soft">{service.detail}</p>
          </Card>
        ))}
      </section>

      <section>
        <SectionTitle title="What to bring" />
        <Bullets
          items={[
            "Your weight now and your usual weight before you became unwell",
            "Recent blood results, if you have them",
            "A list of your medications and supplements",
            "Three days of your food diary from the tracker",
            "What is actually getting in the way — nausea, cost, cooking, appetite, mouth pain",
          ]}
        />
        <p className="mt-3 text-sm text-muted">
          The{" "}
          <Link href="/nutrition/tracker" className="font-medium text-primary hover:underline">
            food and fluid tracker
          </Link>{" "}
          and the{" "}
          <Link href="/nutrition/assessment" className="font-medium text-primary hover:underline">
            nutrition assessment
          </Link>{" "}
          produce most of this for you.
        </p>
      </section>

      <section>
        <SectionTitle title="Book a consultation" />
        <BookingForm kind="dietitian" services={SERVICES} />
      </section>

      <Disclaimer />
    </Page>
  );
}
