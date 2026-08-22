import type { Metadata } from "next";
import Link from "next/link";
import { ROLES, VERIFICATION_STEPS, WHY_DOCUMENTS, resolveRole } from "@/content/onboarding";
import { DOC_CATEGORY_LABEL } from "@/lib/onboarding";
import { Bullets, Callout, Card, Disclaimer, Page, PageHeader, SectionTitle, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Join Afya Companion",
  description:
    "Register as a patient, family member, counsellor, dietitian, or caregiver — individual or institution. Professionals are verified against their academic and statutory documents.",
};

export default function JoinPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Onboarding"
        title="Join Afya Companion"
        intro="Five ways in. Patients and families are in straight away. Anyone who will work with a seriously ill person — counsellor, dietitian, caregiver or care institution — is verified first."
      />

      <section className="space-y-3">
        <SectionTitle title="Choose your role" />
        <div className="grid gap-3 sm:grid-cols-2">
          {ROLES.map((role) => {
            const docCount = role.variants
              ? Math.max(
                  ...role.variants.map(
                    (v) => resolveRole(role, v.key).documents.filter((d) => d.required).length,
                  ),
                )
              : role.documents.filter((d) => d.required).length;
            return (
              <Link key={role.key} href={`/join/${role.key}`} className="card p-4">
                <div className="flex flex-wrap items-center gap-2">
                  {role.verified ? (
                    <Tag>Verified role</Tag>
                  ) : (
                    <span className="chip bg-good-tint text-good">Open access</span>
                  )}
                </div>
                <p className="mt-2 font-semibold">{role.name}</p>
                <p className="mt-0.5 text-sm text-primary">{role.tagline}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{role.who}</p>
                <p className="mt-3 text-xs text-muted">
                  {docCount > 0
                    ? `${docCount} required documents · ${role.reviewDays}`
                    : role.reviewDays}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <Callout tone="info" title="Already applied?">
        Your reference number and what is outstanding are on the{" "}
        <Link href="/join/status">application status page</Link>.
      </Callout>

      <section className="space-y-3">
        <SectionTitle title="Why we ask professionals for documents" />
        <Bullets items={WHY_DOCUMENTS} />
      </section>

      <section className="space-y-3">
        <SectionTitle title="How verification works" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {VERIFICATION_STEPS.map((step) => (
            <Card key={step.title}>
              <p className="font-semibold">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionTitle
          title="What each professional role must provide"
          hint="Gather these before you start — the form saves as you go, but it is quicker in one sitting."
        />
        <div className="space-y-3">
          {ROLES.filter((r) => r.verified).map((role) =>
            (role.variants ?? [{ key: undefined, name: role.name }]).map((variant) => {
              const { documents } = resolveRole(role, variant.key);
              const required = documents.filter((d) => d.required);
              return (
                <Card key={`${role.key}-${variant.key ?? "base"}`}>
                  <p className="font-semibold">
                    {role.name}
                    {role.variants ? ` — ${variant.name.toLowerCase()}` : ""}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
                    {required.map((doc) => (
                      <li key={doc.key} className="flex flex-wrap items-baseline gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {DOC_CATEGORY_LABEL[doc.category]}
                        </span>
                        <span>{doc.label}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            }),
          )}
        </div>
      </section>

      <Callout tone="warn" title="What we are not">
        Afya Companion is not a regulator and does not licence anyone. We check that
        your registration is real, current and unrestricted with the body that
        issued it. Your own council remains responsible for your licence and your
        conduct.
      </Callout>

      <Disclaimer />
    </Page>
  );
}
