import type { Metadata } from "next";
import Link from "next/link";
import { COUNSELLING_SERVICES } from "@/content/counselling";
import { BookingForm } from "@/components/tools/BookingForm";
import { Bullets, Callout, Card, Disclaimer, Page, PageHeader, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Counselling",
  description:
    "One-to-one, family, couple, caregiver, children's, bereavement, group and crisis counselling for people affected by illness.",
};

export default function CounsellingPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Professional care"
        title="Counselling"
        intro="Talking to someone trained in physical illness is different from talking to a friend — they are not frightened by what you say, and they have seen this before."
      />

      <Callout tone="info" title="Not sure which one?">
        Most people start with one-to-one counselling. If the difficulty is
        between people rather than inside one person, family or couple work
        moves faster. If you are the carer, ask specifically for caregiver
        counselling — it is about you, not a review of the patient.
      </Callout>

      <section className="space-y-3">
        {COUNSELLING_SERVICES.map((service) => (
          <Card key={service.slug}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">{service.name}</p>
              <span className="text-xs text-muted">{service.typical}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{service.who}</p>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
              {service.what}
            </p>
            <div className="mt-3">
              <Bullets items={service.goodFor} />
            </div>
          </Card>
        ))}
      </section>

      <section>
        <SectionTitle
          title="Request an appointment"
          hint="This form is sent to the service — everything else in the app stays on your device."
        />
        <BookingForm
          kind="counselling"
          services={COUNSELLING_SERVICES.map((s) => ({ slug: s.slug, name: s.name }))}
        />
      </section>

      <Callout tone="danger" title="If you need help sooner">
        This form is not monitored around the clock. If you are in crisis, go to{" "}
        <Link href="/care/crisis">crisis support</Link> or call your local
        emergency number.
      </Callout>

      <Disclaimer />
    </Page>
  );
}
