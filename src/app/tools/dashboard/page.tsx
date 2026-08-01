import type { Metadata } from "next";
import { Dashboard } from "@/components/tools/Dashboard";
import { Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Progress dashboard",
  description:
    "Mood, pain, sleep, weight, BMI, fluid, eating pattern and questionnaire scores over time.",
};

export default function DashboardPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Progress"
        title="Your dashboard"
        intro="Trends, not single days. Take a screenshot before an appointment — 'here is my mood and pain over the last month' is far more useful than trying to remember."
      />
      <Dashboard />
      <Disclaimer />
    </Page>
  );
}
