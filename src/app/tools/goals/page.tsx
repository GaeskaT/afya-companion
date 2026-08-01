import type { Metadata } from "next";
import Link from "next/link";
import { GoalsTool } from "@/components/tools/GoalsTool";
import { Callout, Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Goals",
  description:
    "Set goals that survive a bad week — smaller, specific, with a bad-day version and someone who knows about them.",
};

export default function GoalsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Daily wellness"
        title="Goals"
        intro="Without goals, days become a sequence of appointments and symptoms. A goal — however modest — restores the sense that you are living a life rather than managing a disease."
      />

      <Callout tone="info" title="What makes a goal survive illness">
        Choose something you actually want, not something you think you should
        want. Make it small enough to do in a fortnight, write a bad-day version
        alongside it, and tell one person. Plan the setback in advance: if you
        are admitted or too unwell, the goal pauses — it does not end. More in{" "}
        <Link href="/support/patient/goals-with-illness">
          setting goals despite illness
        </Link>
        .
      </Callout>

      <GoalsTool />
      <Disclaimer />
    </Page>
  );
}
