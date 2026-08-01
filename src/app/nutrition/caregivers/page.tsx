import type { Metadata } from "next";
import { CAREGIVER_NUTRITION } from "@/content/nutrition/library";
import { TopicArticle } from "@/components/TopicArticle";

export const metadata: Metadata = {
  title: "Nutrition for caregivers",
  description:
    "Feeding someone safely, managing poor appetite, preventing dehydration, monitoring weight — and looking after your own eating.",
};

export default function CaregiverNutritionPage() {
  return (
    <TopicArticle
      topic={CAREGIVER_NUTRITION}
      eyebrow="Nutrition"
      backHref="/nutrition"
      backLabel="Nutrition & dietetics"
    />
  );
}
