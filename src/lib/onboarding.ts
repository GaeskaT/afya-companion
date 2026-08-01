/** Types and helpers for the join / registration flow. */

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "number"
  | "select"
  | "multiselect"
  | "textarea";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  help?: string;
  placeholder?: string;
};

export type Section = {
  title: string;
  intro?: string;
  fields: Field[];
};

export type DocCategory =
  | "academic"
  | "statutory"
  | "identity"
  | "insurance"
  | "safeguarding"
  | "clinical"
  | "health"
  | "reference";

export const DOC_CATEGORY_LABEL: Record<DocCategory, string> = {
  academic: "Academic",
  statutory: "Statutory",
  identity: "Identity",
  insurance: "Insurance",
  safeguarding: "Safeguarding",
  clinical: "Clinical governance",
  health: "Occupational health",
  reference: "References",
};

export type DocRequirement = {
  key: string;
  label: string;
  category: DocCategory;
  description: string;
  required: boolean;
  /** Extra evidence fields shown alongside the file. */
  needsIssuer?: boolean;
  needsNumber?: boolean;
  needsIssued?: boolean;
  needsExpiry?: boolean;
  accept?: string;
};

export type Consent = {
  key: string;
  label: string;
  required: boolean;
};

export type Variant = {
  key: string;
  name: string;
  blurb: string;
  sections?: Section[];
  documents?: DocRequirement[];
};

export type RoleDef = {
  key: string;
  name: string;
  tagline: string;
  who: string;
  /** Professional roles are verified before they can offer services. */
  verified: boolean;
  reviewDays: string;
  sections: Section[];
  documents: DocRequirement[];
  consents: Consent[];
  variants?: Variant[];
  variantQuestion?: string;
};

/* ----------------------------------------------------------- application */

export type DocEvidence = {
  issuer?: string;
  number?: string;
  issued?: string;
  expiry?: string;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
};

export type Application = {
  role: string;
  variant?: string;
  answers: Record<string, string>;
  documents: Record<string, DocEvidence>;
  consents: Record<string, boolean>;
  updatedAt: string;
};

export type SubmittedApplication = {
  reference: string;
  role: string;
  roleName: string;
  variant?: string;
  submittedAt: string;
  status: "submitted" | "in-review" | "more-info" | "verified" | "declined";
  outstanding: string[];
  demo: boolean;
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MAX_FILE_BYTES = 5 * 1024 * 1024;
export const ACCEPTED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/heic",
];

export function fileError(file: File): string | null {
  if (file.size > MAX_FILE_BYTES) {
    return `${file.name} is ${(file.size / 1024 / 1024).toFixed(1)} MB — the limit is 5 MB. Photograph the page rather than scanning at full resolution.`;
  }
  if (file.type && !ACCEPTED_TYPES.includes(file.type)) {
    return `${file.name} is a ${file.type || "unknown"} file. Please upload a PDF or a photo (JPG, PNG or HEIC).`;
  }
  return null;
}

/** Documents whose evidence is incomplete, for the review step and the receipt. */
export function missingDocuments(
  documents: DocRequirement[],
  provided: Record<string, DocEvidence>,
): string[] {
  const gaps: string[] = [];
  for (const doc of documents) {
    if (!doc.required) continue;
    const evidence = provided[doc.key];
    if (!evidence?.fileName) {
      gaps.push(doc.label);
      continue;
    }
    if (doc.needsNumber && !evidence.number?.trim()) {
      gaps.push(`${doc.label} — registration or certificate number`);
    }
    if (doc.needsExpiry && !evidence.expiry) {
      gaps.push(`${doc.label} — expiry date`);
    }
    if (doc.needsIssuer && !evidence.issuer?.trim()) {
      gaps.push(`${doc.label} — issuing body`);
    }
  }
  return gaps;
}

export function missingFields(
  sections: Section[],
  answers: Record<string, string>,
): string[] {
  const gaps: string[] = [];
  for (const section of sections) {
    for (const field of section.fields) {
      if (!field.required) continue;
      const value = answers[field.name]?.trim();
      if (!value) {
        gaps.push(field.label);
        continue;
      }
      if (field.type === "email" && !EMAIL_RE.test(value)) {
        gaps.push(`${field.label} — not a valid email address`);
      }
    }
  }
  return gaps;
}

export function missingConsents(
  consents: Consent[],
  given: Record<string, boolean>,
): string[] {
  return consents.filter((c) => c.required && !given[c.key]).map((c) => c.label);
}

/** Expiry dates in the past are the commonest reason an application stalls. */
export function expiredDocuments(
  documents: DocRequirement[],
  provided: Record<string, DocEvidence>,
): string[] {
  const today = new Date().toISOString().slice(0, 10);
  return documents
    .filter((doc) => {
      const expiry = provided[doc.key]?.expiry;
      return Boolean(expiry && expiry < today);
    })
    .map((doc) => doc.label);
}

export function reference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const salt = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `CC-${stamp}-${salt}`;
}

export const STATUS_LABEL: Record<SubmittedApplication["status"], string> = {
  submitted: "Submitted",
  "in-review": "In review",
  "more-info": "More information needed",
  verified: "Verified",
  declined: "Not accepted",
};
