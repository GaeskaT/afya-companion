import Link from "next/link";
import { IconChevron } from "@/components/icons";
import { DISCLAIMER } from "@/lib/site";

export function Page({ children }: { children: React.ReactNode }) {
  return <div className="wrap py-6 lg:py-10 space-y-8">{children}</div>;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="space-y-3">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="text-[1.75rem] leading-tight lg:text-4xl">{title}</h1>
      {intro && (
        <p className="max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft">
          {intro}
        </p>
      )}
      {children}
    </header>
  );
}

export function Card({
  children,
  className = "",
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  return <As className={`card p-4 sm:p-5 ${className}`}>{children}</As>;
}

export function SectionTitle({
  title,
  action,
  hint,
}: {
  title: string;
  hint?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between gap-3 mb-3">
      <div>
        <h2 className="text-lg lg:text-xl">{title}</h2>
        {hint && <p className="text-sm text-muted mt-0.5">{hint}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

export function LinkCard({
  href,
  title,
  description,
  meta,
  tone = "default",
}: {
  href: string;
  title: string;
  description?: string;
  meta?: string;
  tone?: "default" | "primary" | "danger";
}) {
  const tones = {
    default: "hover:border-line-strong",
    primary: "bg-primary-tint border-transparent",
    danger: "bg-danger-tint border-transparent",
  } as const;
  return (
    <Link
      href={href}
      className={`card group flex items-start gap-3 p-4 transition-colors ${tones[tone]}`}
    >
      <div className="min-w-0 flex-1">
        {meta && (
          <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-primary mb-1">
            {meta}
          </p>
        )}
        <p className="font-semibold leading-snug">{title}</p>
        {description && (
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      <span className="mt-0.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5">
        <IconChevron width={18} height={18} />
      </span>
    </Link>
  );
}

export function Grid({
  children,
  cols = 2,
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-3 ${
        cols === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "sm:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warn" | "danger" | "good";
  title?: string;
  children: React.ReactNode;
}) {
  const tones = {
    info: "bg-primary-tint text-primary-700 border-transparent",
    warn: "bg-warn-tint text-warn border-transparent",
    danger: "bg-danger-tint text-danger border-transparent",
    good: "bg-good-tint text-good border-transparent",
  } as const;
  return (
    <div className={`rounded-xl border p-4 text-sm leading-relaxed ${tones[tone]}`}>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="[&_a]:underline [&_a]:font-medium">{children}</div>
    </div>
  );
}

export function Disclaimer({ text = DISCLAIMER }: { text?: string }) {
  return (
    <p className="rounded-xl bg-surface-2 px-4 py-3 text-xs leading-relaxed text-muted">
      {text}
    </p>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
          <span
            aria-hidden
            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-tint text-xs font-bold text-primary-700">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function Stat({
  label,
  value,
  unit,
  hint,
}: {
  label: string;
  value: string | number;
  unit?: string;
  hint?: string;
}) {
  return (
    <div className="card p-3.5">
      <p className="text-xs font-medium text-muted">{label}</p>
      <p className="mt-1 font-display text-2xl font-semibold">
        {value}
        {unit && <span className="ml-1 text-sm font-sans text-muted">{unit}</span>}
      </p>
      {hint && <p className="mt-0.5 text-xs text-muted">{hint}</p>}
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="card p-6 text-center">
      <p className="font-semibold">{title}</p>
      <p className="mx-auto mt-1 max-w-sm text-sm text-muted">{body}</p>
      {action && (
        <Link href={action.href} className="btn btn-soft mt-4">
          {action.label}
        </Link>
      )}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}
