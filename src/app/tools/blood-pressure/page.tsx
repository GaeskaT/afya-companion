import type { Metadata } from "next";
import { BloodPressureTracker } from "@/components/tools/BloodPressureTracker";
import { Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blood pressure monitor",
  description:
    "Log blood pressure and pulse, chart systolic and diastolic over time, and get the 7-day home average your clinician actually wants.",
};

export default function BloodPressurePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Blood pressure"
        title="Blood pressure monitor"
        intro="Home readings, measured properly and averaged over a week, are a better guide than anything taken once in a clinic corridor. This works out that average for you."
      />
      <BloodPressureTracker />
      <Disclaimer />
    </Page>
  );
}
