import type { Metadata } from "next";
import { CommunityBoard } from "@/components/tools/CommunityBoard";
import { Callout, Page, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Moderated, anonymous peer support for patients, caregivers, families and the bereaved — plus survivor stories and a memorial wall.",
};

export default function CommunityPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Peer support"
        title="Community"
        intro="The value of peer support is discovering your reactions are ordinary. Every space here is anonymous by default and read by a moderator before anything appears."
      />

      <Callout tone="warn" title="Before you post">
        Posts are visible to other people using Afya Companion. Do not include full
        names, hospital numbers or anything that identifies your care team. If
        you are in crisis, this is not the fastest route to help — use the
        crisis page.
      </Callout>

      <CommunityBoard />
    </Page>
  );
}
