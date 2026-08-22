import type { Metadata } from "next";
import { Suspense } from "react";
import { ApplicationStatus } from "@/components/onboarding/ApplicationStatus";
import { Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Application status",
  description: "Your Afya Companion registration reference, progress and anything outstanding.",
};

export default function StatusPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Onboarding"
        title="Application status"
        intro="Your reference number, what you submitted, and what happens next."
      />
      <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
        <ApplicationStatus />
      </Suspense>
    </Page>
  );
}
