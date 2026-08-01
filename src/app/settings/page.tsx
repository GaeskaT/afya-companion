import type { Metadata } from "next";
import { SettingsPanel } from "@/components/tools/SettingsPanel";
import { Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Settings & privacy",
  description:
    "Your profile, what is stored on this device, exporting or deleting your data, and installing the app.",
};

export default function SettingsPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Settings"
        title="Settings & privacy"
        intro="Everything personal in CareCircle lives on this device. Here is exactly what that means, and how to take it with you or wipe it."
      />
      <SettingsPanel />
    </Page>
  );
}
