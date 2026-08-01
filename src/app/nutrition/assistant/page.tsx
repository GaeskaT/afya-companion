import type { Metadata } from "next";
import { AssistantChat } from "@/components/tools/AssistantChat";
import { Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nutrition assistant",
  description:
    "Ask nutrition questions and get practical answers drawn from CareCircle's own dietetic guidance.",
};

export default function AssistantPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Nutrition assistant"
        intro="Meal ideas, symptom workarounds, budget cooking, protein and fluid questions. It draws on the same guidance as the rest of this section, and it flags when something needs a dietitian or the care team."
      />
      <AssistantChat />
      <Disclaimer />
    </Page>
  );
}
