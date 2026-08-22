"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import { todayKey } from "./dates";

/**
 * Afya Companion keeps personal data on the device by default.
 *
 * Mood, journals, screening scores and food diaries are among the most
 * sensitive things a person can write down, so nothing here is sent to a
 * server. Everything lives in localStorage under the `cc:` namespace and can
 * be wiped from Settings. Booking and community features are the only parts
 * that talk to the network, and they say so on screen.
 */
const NS = "cc:";

export function readLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(NS + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeLocal<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(NS + key, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent("cc:store", { detail: { key } }));
  } catch {
    /* quota or private mode — the app still works, it just won't remember */
  }
}

export function clearAllLocal() {
  if (typeof window === "undefined") return;
  const doomed: string[] = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const k = window.localStorage.key(i);
    if (k && k.startsWith(NS)) doomed.push(k);
  }
  doomed.forEach((k) => window.localStorage.removeItem(k));
  window.dispatchEvent(new CustomEvent("cc:store", { detail: { key: "*" } }));
}

/**
 * localStorage treated as what it is — an external store — so React can read
 * it with useSyncExternalStore. That gives us hydration safety for free (the
 * server snapshot is always "nothing stored"), and every component watching a
 * key updates together when one of them writes.
 */
function subscribe(onChange: () => void) {
  window.addEventListener("cc:store", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("cc:store", onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * Parsed JSON is memoised by its raw text so repeated renders hand back the
 * same object rather than a fresh one each time.
 *
 * The fallback is deliberately *not* cached per key: two components can watch
 * the same key with different defaults — the nutrition assessment wants a
 * blank profile, the dashboard wants null so it can tell "not filled in yet"
 * apart from "filled in with zeroes". A shared per-key default gave whichever
 * component rendered first the right answer and the other one a crash.
 */
const parsed = new Map<string, unknown>();

function parseCached<T>(raw: string, fallback: T): T {
  if (parsed.has(raw)) return parsed.get(raw) as T;
  try {
    const value = JSON.parse(raw) as T;
    if (parsed.size > 200) parsed.clear();
    parsed.set(raw, value);
    return value;
  } catch {
    return fallback;
  }
}

export function useLocalState<T>(key: string, initial: T) {
  // Captured once per component instance, which keeps it referentially stable
  // even though callers pass a fresh literal on every render.
  const [fallback] = useState(initial);

  const raw = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(NS + key),
    () => null,
  );

  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const value = useMemo<T>(
    () => (raw === null ? fallback : parseCached<T>(raw, fallback)),
    [raw, fallback],
  );

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      const previous = readLocal<T>(key, fallback);
      const resolved =
        typeof next === "function" ? (next as (p: T) => T)(previous) : next;
      writeLocal(key, resolved);
    },
    [key, fallback],
  );

  return [value, update, hydrated] as const;
}

/* ------------------------------------------------------------------ dates */

export { todayKey };

export function dayLabel(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function lastNDays(n: number): string[] {
  const out: string[] = [];
  const now = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    out.push(todayKey(d));
  }
  return out;
}

export function relativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  const mins = Math.round((Date.now() - then) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `${hours} h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} d ago`;
  return new Date(iso).toLocaleDateString();
}

export function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
