import type { Metadata } from "next";
import Link from "next/link";
import { NutritionTracker } from "@/components/tools/NutritionTracker";
import { Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Food, fluid & weight tracker",
  description:
    "A daily food diary, hydration tracker, protein and vegetable counts, and a weight trend.",
};

export default function TrackerPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Trackers"
        intro="Not calorie counting. What matters in illness is how often you eat, whether protein is there, whether fluid is going in, and which way the weight is moving."
      />
      <NutritionTracker />
      <p className="text-sm text-muted">
        See the longer view — mood and pain alongside weight and eating — on the{" "}
        <Link href="/tools/dashboard" className="font-medium text-primary hover:underline">
          progress dashboard
        </Link>
        .
      </p>
      <Disclaimer />
    </Page>
  );
}
