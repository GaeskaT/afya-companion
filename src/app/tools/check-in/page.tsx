import type { Metadata } from "next";
import Link from "next/link";
import { CheckInForm } from "@/components/tools/CheckInForm";
import { Card, Disclaimer, Page, PageHeader } from "@/components/ui";
import { REFLECTION_PROMPTS, pickForDay } from "@/content/daily";
import { todayKey } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Daily check-in",
  description:
    "A one-minute emotional check-in: mood, energy, pain and sleep, with your pattern over the last two weeks.",
};

export default function CheckInPage() {
  const prompt = pickForDay(REFLECTION_PROMPTS, todayKey());

  return (
    <Page>
      <PageHeader
        eyebrow="Daily wellness"
        title="Today's check-in"
        intro="Naming how you feel is not self-indulgent — it is information about your own recovery, and it is the earliest warning you will get of a downward drift."
      />

      <CheckInForm />

      <Card>
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Reflection prompt
        </p>
        <p className="mt-2 font-display text-lg leading-snug">{prompt}</p>
        <Link
          href="/tools/journal"
          className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          Write about it →
        </Link>
      </Card>

      <Disclaimer />
    </Page>
  );
}
