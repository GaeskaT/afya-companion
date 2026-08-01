import type { Metadata } from "next";
import { BreathingPlayer, GuidedPlayer } from "@/components/tools/BreathingPlayer";
import { Disclaimer, Page, PageHeader, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Breathing & relaxation",
  description:
    "Guided breathing patterns and relaxation scripts — body scan, progressive muscle relaxation, grounding, kindness practice and safe place imagery.",
};

export default function BreathingPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Daily wellness"
        title="Breathing & relaxation"
        intro="Slow breathing is the one lever you can pull on your own nervous system at any moment — in any ward, without equipment or permission. Lengthening the out-breath is what does the work."
      />

      <BreathingPlayer />

      <section>
        <SectionTitle
          title="Guided relaxation"
          hint="Read at your own pace, or let it run"
        />
        <GuidedPlayer />
      </section>

      <Disclaimer />
    </Page>
  );
}
