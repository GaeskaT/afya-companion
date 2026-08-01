import type { Metadata } from "next";
import { NutritionAssessment } from "@/components/tools/NutritionAssessment";
import { Callout, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nutrition assessment",
  description:
    "A personalised nutrition plan: energy and protein estimates, BMI, hydration, matched diet plans, a seven-day menu and a shopping list.",
};

export default function AssessmentPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Nutrition assessment"
        intro="Answer a few questions and this builds a starting plan — estimated energy and protein, matched therapeutic diets, a seven-day menu, a shopping list, and the things worth raising with your care team."
      />

      <Callout tone="info" title="Estimates, not prescriptions">
        These calculations are for education. Requirements in illness vary
        enormously, and kidney, liver and heart failure invert the usual rules —
        so the app deliberately refuses to estimate targets for those and points
        you to your dietitian instead. Your answers stay on this device.
      </Callout>

      <NutritionAssessment />
    </Page>
  );
}
