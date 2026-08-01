"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Callout, Card, EmptyState } from "@/components/ui";
import { useLocalState } from "@/lib/storage";
import { KEYS } from "@/lib/records";
import { STATUS_LABEL, type SubmittedApplication } from "@/lib/onboarding";
import { VERIFICATION_STEPS } from "@/content/onboarding";

export function ApplicationStatus() {
  const [applications] = useLocalState<SubmittedApplication[]>(KEYS.applications, []);
  const params = useSearchParams();
  const highlight = params.get("ref");

  if (applications.length === 0) {
    return (
      <EmptyState
        title="No applications from this device"
        body="Once you submit a registration, your reference number and progress appear here."
        action={{ href: "/join", label: "Start an application" }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {highlight && (
        <Callout tone="good" title="Application submitted">
          Your reference is <strong>{highlight}</strong>. Write it down — quote it
          in any email about your registration.
        </Callout>
      )}

      <div className="space-y-3">
        {applications.map((app) => (
          <Card
            key={app.reference}
            className={app.reference === highlight ? "border-primary" : ""}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold">
                  {app.roleName}
                  {app.variant ? ` — ${app.variant.toLowerCase()}` : ""}
                </p>
                <p className="mt-0.5 text-sm text-muted">
                  {app.reference} · submitted{" "}
                  {new Date(app.submittedAt).toLocaleDateString()}
                </p>
              </div>
              <span className="chip">{STATUS_LABEL[app.status]}</span>
            </div>

            {app.demo && (
              <p className="mt-3 text-sm text-warn">
                Submitted in the public demo, which has no server — this receipt
                exists only on this device.
              </p>
            )}

            {app.outstanding.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-semibold text-warn">Needs your attention</p>
                <ul className="mt-1 space-y-1 text-sm text-ink-soft">
                  {app.outstanding.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-lg">What happens next</h2>
        <ol className="space-y-2.5">
          {VERIFICATION_STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary-700">
                {i + 1}
              </span>
              <span>
                <strong className="text-ink">{step.title.replace(/^\d+\.\s*/, "")}</strong>{" "}
                — {step.body}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <Callout tone="info" title="This page reads your device, not our records">
        The receipt above is stored in this browser. For the live status of a
        verification, or to send a replacement document, email the reference
        number to the verification team.
      </Callout>

      <p className="text-sm text-muted">
        Need to register in another role?{" "}
        <Link href="/join" className="font-medium text-primary hover:underline">
          Start another application
        </Link>
        .
      </p>
    </div>
  );
}
