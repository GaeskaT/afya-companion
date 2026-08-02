import type { Metadata } from "next";
import Link from "next/link";
import { MilestonesTool } from "@/components/tools/MilestonesTool";
import { Callout, Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "My milestones",
  description:
    "Personal milestones to move towards and mark when you reach them — treatment, strength, people, and life beyond the illness.",
};

export default function MilestonesPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Daily wellness"
        title="My milestones"
        intro="Illness turns time into a sequence of appointments. Milestones put something of your own back into the calendar — and give you a record of ground you have already covered."
      />

      <Callout tone="info" title="Milestones or goals?">
        A <Link href="/tools/goals">goal</Link> is something to act on this
        fortnight, with a first step and a bad-day version. A milestone is a
        marker you are moving towards — the last cycle, the walk to the gate,
        the wedding — and a moment worth marking when it arrives. Most people
        want both.
      </Callout>

      <MilestonesTool />
      <Disclaimer />
    </Page>
  );
}
