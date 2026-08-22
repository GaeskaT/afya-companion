"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Callout, Card, Tag } from "@/components/ui";
import { resolveRole } from "@/content/onboarding";
import {
  DOC_CATEGORY_LABEL,
  expiredDocuments,
  fileError,
  missingConsents,
  missingDocuments,
  missingFields,
  reference as makeReference,
  type Application,
  type DocEvidence,
  type DocRequirement,
  type Field,
  type RoleDef,
  type Section,
  type SubmittedApplication,
} from "@/lib/onboarding";
import { draftKey, KEYS } from "@/lib/records";
import { useLocalState } from "@/lib/storage";
import { DEMO_NOTE, IS_DEMO } from "@/lib/env";

type Step =
  | { kind: "variant"; title: string }
  | { kind: "section"; title: string; section: Section }
  | { kind: "documents"; title: string }
  | { kind: "consents"; title: string }
  | { kind: "review"; title: string };

const EMPTY: Application = {
  role: "",
  answers: {},
  documents: {},
  consents: {},
  updatedAt: "",
};

export function JoinForm({ role }: { role: RoleDef }) {
  const router = useRouter();
  const [draft, setDraft] = useLocalState<Application>(draftKey(role.key), {
    ...EMPTY,
    role: role.key,
  });
  const [submissions, setSubmissions] = useLocalState<SubmittedApplication[]>(
    KEYS.applications,
    [],
  );

  /** Files cannot be serialised, so they live only for this visit. */
  const [files, setFiles] = useState<Record<string, File>>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [sending, setSending] = useState(false);
  const [failure, setFailure] = useState("");

  const { variant, sections, documents } = useMemo(
    () => resolveRole(role, draft.variant),
    [role, draft.variant],
  );

  const steps: Step[] = useMemo(() => {
    const list: Step[] = [];
    if (role.variants?.length) list.push({ kind: "variant", title: "Who is registering" });
    sections.forEach((section) =>
      list.push({ kind: "section", title: section.title, section }),
    );
    if (documents.length) list.push({ kind: "documents", title: "Documents" });
    list.push({ kind: "consents", title: "Declarations" });
    list.push({ kind: "review", title: "Review & submit" });
    return list;
  }, [role, sections, documents]);

  const step = steps[Math.min(stepIndex, steps.length - 1)];

  function update(patch: Partial<Application>) {
    setDraft({ ...draft, ...patch, updatedAt: new Date().toISOString() });
    setErrors([]);
  }

  const setAnswer = (name: string, value: string) =>
    update({ answers: { ...draft.answers, [name]: value } });

  const setEvidence = (key: string, patch: Partial<DocEvidence>) =>
    update({
      documents: { ...draft.documents, [key]: { ...draft.documents[key], ...patch } },
    });

  function attach(key: string, file: File | undefined) {
    if (!file) return;
    const problem = fileError(file);
    if (problem) {
      setErrors([problem]);
      return;
    }
    setFiles((prev) => ({ ...prev, [key]: file }));
    setEvidence(key, {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
    });
  }

  function detach(key: string) {
    setFiles((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setEvidence(key, { fileName: undefined, fileSize: undefined, fileType: undefined });
  }

  function validateStep(): string[] {
    if (step.kind === "variant") {
      return draft.variant ? [] : ["Choose whether you are registering yourself or an organisation."];
    }
    if (step.kind === "section") return missingFields([step.section], draft.answers);
    if (step.kind === "documents") return missingDocuments(documents, draft.documents);
    if (step.kind === "consents") return missingConsents(role.consents, draft.consents);
    return [];
  }

  function next() {
    const problems = validateStep();
    if (problems.length) {
      setErrors(problems);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setErrors([]);
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setErrors([]);
    setStepIndex((i) => Math.max(0, i - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const allGaps = [
    ...missingFields(sections, draft.answers),
    ...missingDocuments(documents, draft.documents),
    ...missingConsents(role.consents, draft.consents),
  ];
  const expired = expiredDocuments(documents, draft.documents);
  const reattach = documents
    .filter((d) => draft.documents[d.key]?.fileName && !files[d.key])
    .map((d) => d.label);

  async function submit() {
    if (allGaps.length) {
      setErrors(allGaps);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSending(true);
    setFailure("");

    const record: SubmittedApplication = {
      reference: makeReference(),
      role: role.key,
      roleName: role.name,
      variant: variant?.name,
      submittedAt: new Date().toISOString(),
      status: "submitted",
      outstanding: expired.length
        ? expired.map((label) => `${label} — expired, replace it`)
        : [],
      demo: IS_DEMO,
    };

    if (!IS_DEMO) {
      try {
        const body = new FormData();
        body.append(
          "application",
          JSON.stringify({
            reference: record.reference,
            role: role.key,
            roleName: role.name,
            variant: draft.variant,
            answers: draft.answers,
            documents: draft.documents,
            consents: draft.consents,
          }),
        );
        Object.entries(files).forEach(([key, file]) => body.append(`file:${key}`, file));

        const response = await fetch("/api/registration", { method: "POST", body });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error ?? "Could not submit the application.");
      } catch (err) {
        setSending(false);
        setFailure(
          err instanceof Error ? err.message : "Could not submit the application.",
        );
        return;
      }
    }

    setSubmissions([record, ...submissions]);
    setDraft({ ...EMPTY, role: role.key });
    setFiles({});
    router.push(`/join/status?ref=${record.reference}`);
  }

  return (
    <div className="space-y-6">
      <ol className="flex flex-wrap gap-1.5" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s.title}>
            <button
              type="button"
              onClick={() => i < stepIndex && setStepIndex(i)}
              disabled={i > stepIndex}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                i === stepIndex
                  ? "bg-primary text-white"
                  : i < stepIndex
                    ? "bg-primary-tint text-primary-700"
                    : "bg-surface-2 text-muted"
              }`}
            >
              {i + 1}. {s.title}
            </button>
          </li>
        ))}
      </ol>

      {errors.length > 0 && (
        <Callout tone="warn" title="Before you continue">
          <ul className="mt-1 space-y-1">
            {errors.map((e) => (
              <li key={e}>· {e}</li>
            ))}
          </ul>
        </Callout>
      )}

      {step.kind === "variant" && (
        <section className="space-y-3">
          <h2 className="text-lg">{role.variantQuestion}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {role.variants?.map((v) => (
              <button
                key={v.key}
                type="button"
                onClick={() => update({ variant: v.key })}
                className={`card p-4 text-left transition-colors ${
                  draft.variant === v.key ? "border-primary bg-primary-tint" : ""
                }`}
              >
                <p className="font-semibold">{v.name}</p>
                <p className="mt-1 text-sm text-muted">{v.blurb}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {step.kind === "section" && (
        <section className="space-y-4">
          <div>
            <h2 className="text-lg">{step.section.title}</h2>
            {step.section.intro && (
              <p className="mt-1 text-sm text-muted">{step.section.intro}</p>
            )}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {step.section.fields.map((field) => (
              <FieldInput
                key={field.name}
                field={field}
                value={draft.answers[field.name] ?? ""}
                onChange={(v) => setAnswer(field.name, v)}
              />
            ))}
          </div>
        </section>
      )}

      {step.kind === "documents" && (
        <section className="space-y-4">
          <div>
            <h2 className="text-lg">Documents</h2>
            <p className="mt-1 text-sm text-muted">
              PDF or a clear photo, up to 5 MB each. Every document is checked
              against the body that issued it, so the names and numbers must
              match what the register says.
            </p>
          </div>

          {reattach.length > 0 && (
            <Callout tone="warn" title="Re-attach these files">
              Files are not saved between visits — only the details you typed.
              Please attach again: {reattach.join(", ")}.
            </Callout>
          )}
          {expired.length > 0 && (
            <Callout tone="danger" title="Expired documents">
              {expired.join(", ")} — {expired.length === 1 ? "this has" : "these have"}{" "}
              an expiry date in the past. Replace{" "}
              {expired.length === 1 ? "it" : "them"} before submitting, or the
              application will stall at the first check.
            </Callout>
          )}

          <div className="space-y-3">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.key}
                doc={doc}
                evidence={draft.documents[doc.key] ?? {}}
                hasFile={Boolean(files[doc.key])}
                onEvidence={(patch) => setEvidence(doc.key, patch)}
                onAttach={(file) => attach(doc.key, file)}
                onDetach={() => detach(doc.key)}
              />
            ))}
          </div>
        </section>
      )}

      {step.kind === "consents" && (
        <section className="space-y-4">
          <div>
            <h2 className="text-lg">Declarations</h2>
            <p className="mt-1 text-sm text-muted">
              Read these properly. Ticking them has consequences — for the people
              you will support, and for you.
            </p>
          </div>
          <div className="space-y-2.5">
            {role.consents.map((consent) => (
              <label key={consent.key} className="card flex gap-3 p-4 text-sm leading-relaxed">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0"
                  checked={Boolean(draft.consents[consent.key])}
                  onChange={(e) =>
                    update({
                      consents: { ...draft.consents, [consent.key]: e.target.checked },
                    })
                  }
                />
                <span>
                  {consent.label}
                  {consent.required && <span className="text-danger"> *</span>}
                </span>
              </label>
            ))}
          </div>
        </section>
      )}

      {step.kind === "review" && (
        <section className="space-y-4">
          <h2 className="text-lg">Review & submit</h2>

          {allGaps.length > 0 ? (
            <Callout tone="warn" title={`${allGaps.length} thing${allGaps.length === 1 ? "" : "s"} still missing`}>
              <ul className="mt-1 space-y-1">
                {allGaps.map((gap) => (
                  <li key={gap}>· {gap}</li>
                ))}
              </ul>
            </Callout>
          ) : (
            <Callout tone="good" title="Everything required is here">
              {role.verified
                ? `We aim to complete verification in ${role.reviewDays.toLowerCase()}.`
                : "You can start using Afya Companion straight away."}
            </Callout>
          )}

          <Card>
            <p className="font-semibold">{role.name}</p>
            {variant && <p className="text-sm text-muted">{variant.name}</p>}
            <dl className="mt-3 divide-y divide-line text-sm">
              {sections.flatMap((section) =>
                section.fields
                  .filter((f) => draft.answers[f.name]?.trim())
                  .map((f) => (
                    <div key={f.name} className="flex flex-col gap-0.5 py-2 sm:flex-row sm:gap-4">
                      <dt className="w-56 shrink-0 text-muted">{f.label}</dt>
                      <dd className="text-ink-soft">{draft.answers[f.name]}</dd>
                    </div>
                  )),
              )}
            </dl>
          </Card>

          {documents.length > 0 && (
            <Card>
              <p className="font-semibold">Documents</p>
              <ul className="mt-3 space-y-2 text-sm">
                {documents.map((doc) => {
                  const evidence = draft.documents[doc.key];
                  return (
                    <li key={doc.key} className="flex flex-wrap items-center gap-2">
                      <span className={evidence?.fileName ? "text-good" : "text-muted"}>
                        {evidence?.fileName ? "✓" : "—"}
                      </span>
                      <span className="font-medium">{doc.label}</span>
                      {!doc.required && <span className="text-xs text-muted">optional</span>}
                      {evidence?.number && (
                        <span className="text-xs text-muted">no. {evidence.number}</span>
                      )}
                      {evidence?.expiry && (
                        <span className="text-xs text-muted">expires {evidence.expiry}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Card>
          )}

          {IS_DEMO ? (
            <Callout tone="info" title="Demo — nothing will be sent">
              {DEMO_NOTE}
            </Callout>
          ) : (
            <Callout tone="info" title="Where this goes">
              Unlike the rest of the app, this form leaves your device. Your
              answers and documents go to the Afya Companion verification team, who
              check them with the issuing bodies. They are kept for as long as
              your registration is active.
            </Callout>
          )}

          {failure && <Callout tone="danger">{failure}</Callout>}
        </section>
      )}

      <div className="flex flex-wrap items-center gap-3 border-t border-line pt-5">
        {stepIndex > 0 && (
          <button type="button" className="btn btn-ghost" onClick={back}>
            Back
          </button>
        )}
        {step.kind === "review" ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={submit}
            disabled={sending}
          >
            {sending ? "Submitting…" : "Submit application"}
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={next}>
            Continue
          </button>
        )}
        <span className="text-xs text-muted">
          Saved on this device as you type · step {stepIndex + 1} of {steps.length}
        </span>
      </div>

      <p className="text-xs text-muted">
        Changed your mind?{" "}
        <Link href="/join" className="font-medium text-primary hover:underline">
          Choose a different role
        </Link>
        .
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ inputs */

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
}) {
  const id = `f-${field.name}`;
  const wide = field.type === "textarea" || field.type === "multiselect";

  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label className="label" htmlFor={id}>
        {field.label}
        {field.required && <span className="text-danger"> *</span>}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={id}
          className="field"
          rows={4}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          className="field"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Choose…</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "multiselect" ? (
        <MultiSelect
          options={field.options ?? []}
          value={value}
          onChange={onChange}
          id={id}
        />
      ) : (
        <input
          id={id}
          className="field"
          type={field.type}
          inputMode={field.type === "number" ? "numeric" : undefined}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {field.help && <p className="mt-1 text-xs text-muted">{field.help}</p>}
    </div>
  );
}

function MultiSelect({
  options,
  value,
  onChange,
  id,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  id: string;
}) {
  const selected = value ? value.split(" · ") : [];
  return (
    <div id={id} className="flex flex-wrap gap-1.5">
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() =>
              onChange(
                (active
                  ? selected.filter((o) => o !== option)
                  : [...selected, option]
                ).join(" · "),
              )
            }
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "border-transparent bg-primary text-white"
                : "border-line-strong bg-surface text-ink-soft hover:bg-surface-2"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function DocumentCard({
  doc,
  evidence,
  hasFile,
  onEvidence,
  onAttach,
  onDetach,
}: {
  doc: DocRequirement;
  evidence: DocEvidence;
  hasFile: boolean;
  onEvidence: (patch: Partial<DocEvidence>) => void;
  onAttach: (file: File | undefined) => void;
  onDetach: () => void;
}) {
  const today = new Date().toISOString().slice(0, 10);
  const isExpired = Boolean(evidence.expiry && evidence.expiry < today);

  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Tag>{DOC_CATEGORY_LABEL[doc.category]}</Tag>
            {doc.required ? (
              <span className="text-xs font-semibold text-danger">Required</span>
            ) : (
              <span className="text-xs text-muted">Optional</span>
            )}
          </div>
          <p className="mt-1.5 font-semibold leading-snug">{doc.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{doc.description}</p>
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {doc.needsIssuer && (
          <Evidence
            idPrefix={doc.key}
            label="Issued by"
            value={evidence.issuer ?? ""}
            onChange={(v) => onEvidence({ issuer: v })}
            placeholder="Institution, council or authority"
          />
        )}
        {doc.needsNumber && (
          <Evidence
            idPrefix={doc.key}
            label="Certificate or registration number"
            value={evidence.number ?? ""}
            onChange={(v) => onEvidence({ number: v })}
          />
        )}
        {doc.needsIssued && (
          <Evidence
            idPrefix={doc.key}
            label="Date issued"
            type="date"
            value={evidence.issued ?? ""}
            onChange={(v) => onEvidence({ issued: v })}
          />
        )}
        {doc.needsExpiry && (
          <Evidence
            idPrefix={doc.key}
            label="Expiry date"
            type="date"
            value={evidence.expiry ?? ""}
            onChange={(v) => onEvidence({ expiry: v })}
            tone={isExpired ? "danger" : undefined}
            note={isExpired ? "This has expired." : undefined}
          />
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label className="btn btn-soft cursor-pointer text-sm">
          {evidence.fileName ? "Replace file" : "Attach file"}
          <input
            type="file"
            className="sr-only"
            accept={doc.accept ?? ".pdf,.jpg,.jpeg,.png,.heic"}
            onChange={(e) => onAttach(e.target.files?.[0])}
          />
        </label>
        {evidence.fileName && (
          <>
            <span className="text-sm text-ink-soft">
              {evidence.fileName}
              {evidence.fileSize
                ? ` · ${(evidence.fileSize / 1024 / 1024).toFixed(1)} MB`
                : ""}
              {!hasFile && (
                <span className="text-warn"> · needs re-attaching</span>
              )}
            </span>
            <button
              type="button"
              className="text-xs text-muted hover:text-danger"
              onClick={onDetach}
            >
              Remove
            </button>
          </>
        )}
      </div>
    </Card>
  );
}

function Evidence({
  idPrefix,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  tone,
  note,
}: {
  idPrefix: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  tone?: "danger";
  note?: string;
}) {
  const id = `e-${idPrefix}-${label.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="field"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {note && (
        <p className={`mt-1 text-xs ${tone === "danger" ? "text-danger" : "text-muted"}`}>
          {note}
        </p>
      )}
    </div>
  );
}
