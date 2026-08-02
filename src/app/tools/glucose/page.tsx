import type { Metadata } from "next";
import { GlucoseTracker } from "@/components/tools/GlucoseTracker";
import { Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blood sugar monitor",
  description:
    "Log blood glucose readings, see the pattern on a chart, and track time in range — with hypo guidance and targets you can set yourself.",
};

export default function GlucosePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Diabetes"
        title="Blood sugar monitor"
        intro="Single readings tell you very little; the pattern tells you almost everything. Log yours, see the chart, and take it to your diabetes team rather than trying to remember."
      />
      <GlucoseTracker />
      <Disclaimer />
    </Page>
  );
}
