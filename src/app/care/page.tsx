import type { Metadata } from "next";
import { Disclaimer, Grid, LinkCard, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Care",
  description:
    "Counselling, dietitian clinics, your multidisciplinary care team, moderated peer community and crisis support.",
};

export default function CareHubPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Professional & peer care"
        title="Care"
        intro="Self-help goes a long way and then it stops. This is where the people are — professionals, peers, and help in a crisis."
      />

      <Grid cols={2}>
        <LinkCard
          href="/care/crisis"
          tone="danger"
          title="Crisis support"
          description="Warning signs, a safety plan you can fill in, helplines, and what to do in the next hour."
        />
        <LinkCard
          href="/care/counselling"
          title="Counselling"
          description="One-to-one, family, couple, caregiver, children's, bereavement, group and crisis counselling — and how to request it."
        />
        <LinkCard
          href="/care/dietitian"
          title="Dietitian clinic"
          description="Book an assessment, get an individualised plan, and follow up on nutrition goals."
        />
        <LinkCard
          href="/care/team"
          title="Your care team"
          description="Who does what across eleven professions — and the right question to ask each of them."
        />
        <LinkCard
          href="/care/community"
          title="Community"
          description="Moderated, anonymous spaces for patients, caregivers, families, the bereaved — and a memorial wall."
        />
      </Grid>

      <Disclaimer />
    </Page>
  );
}
