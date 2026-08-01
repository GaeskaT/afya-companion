import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROLES, findRole } from "@/content/onboarding";
import { JoinForm } from "@/components/onboarding/JoinForm";
import { Callout, Disclaimer, Page, PageHeader, Tag } from "@/components/ui";

export function generateStaticParams() {
  return ROLES.map((role) => ({ role: role.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ role: string }>;
}): Promise<Metadata> {
  const { role: key } = await params;
  const role = findRole(key);
  if (!role) return {};
  return {
    title: `Register as a ${role.name.toLowerCase()}`,
    description: role.who,
  };
}

export default async function JoinRolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role: key } = await params;
  const role = findRole(key);
  if (!role) notFound();

  return (
    <Page>
      <div>
        <Link href="/join" className="text-sm font-medium text-primary hover:underline">
          ← All roles
        </Link>
      </div>

      <PageHeader eyebrow="Registration" title={role.name} intro={role.who}>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {role.verified ? <Tag>Verified role</Tag> : <Tag>Open access</Tag>}
          <span className="chip bg-surface-2 text-muted">{role.reviewDays}</span>
        </div>
      </PageHeader>

      {role.verified && (
        <Callout tone="warn" title="Before you start">
          Have your certificates, registration and clearance to hand — as PDFs or
          photographs, each under 5 MB. Every document is checked with the body
          that issued it, so names and numbers must match the register exactly.
          Nothing is submitted until the final step.
        </Callout>
      )}

      <JoinForm role={role} />

      <Disclaimer />
    </Page>
  );
}
