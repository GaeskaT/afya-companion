import type { Metadata } from "next";
import { FAMILY_NUTRITION } from "@/content/nutrition/library";
import { TopicArticle } from "@/components/TopicArticle";

export const metadata: Metadata = {
  title: "Child & family nutrition",
  description:
    "Feeding children with chronic illness, adolescents, school meals, family meals and healthy snacks when someone is unwell.",
};

export default function FamilyNutritionPage() {
  return (
    <TopicArticle
      topic={FAMILY_NUTRITION}
      eyebrow="Nutrition"
      backHref="/nutrition"
      backLabel="Nutrition & dietetics"
    />
  );
}
