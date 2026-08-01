import type { Metadata } from "next";
import Link from "next/link";
import { Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Offline",
  description: "You are offline — here is what still works.",
};

export default function OfflinePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="No connection"
        title="You are offline"
        intro="The page you asked for has not been saved to this device yet. These sections are always available offline once you have opened the app."
      />
      <div className="flex flex-wrap gap-2">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/care/crisis" className="btn btn-ghost">
          Crisis support
        </Link>
        <Link href="/tools/breathing" className="btn btn-ghost">
          Breathing exercises
        </Link>
        <Link href="/tools/check-in" className="btn btn-ghost">
          Daily check-in
        </Link>
      </div>
      <p className="text-sm text-muted">
        If someone is in immediate danger, call your local emergency number —
        that works without a data connection.
      </p>
    </Page>
  );
}
