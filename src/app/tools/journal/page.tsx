import type { Metadata } from "next";
import { JournalTool } from "@/components/tools/JournalTool";
import { Disclaimer, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Pain and emotional distress diary, thought records for cognitive restructuring, and private free writing.",
};

export default function JournalPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Daily wellness"
        title="Journal"
        intro="Memory for pain is unreliable — it is dominated by the worst moment and the most recent one. Written down, the actual pattern appears, and it gives your care team something far more useful than 'it's been bad'."
      />
      <JournalTool />
      <Disclaimer />
    </Page>
  );
}
