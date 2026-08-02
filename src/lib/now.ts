"use client";

import { useSyncExternalStore } from "react";

/**
 * The current time, read the way React wants external mutable sources read.
 *
 * Reading `Date.now()` straight from a component body is impure — two renders
 * in the same commit can disagree. This buckets to the minute and caches, so
 * every call within a render returns the identical number, while a later
 * render naturally picks up the new minute. Charts and "last 14 days" windows
 * only need minute resolution.
 */
let cached = 0;

function getSnapshot(): number {
  const minute = Math.floor(Date.now() / 60000) * 60000;
  if (minute !== cached) cached = minute;
  return cached;
}

/** Nothing pushes time at us; snapshots refresh on the next render. */
function subscribe(): () => void {
  return () => {};
}

export function useNow(): number {
  return useSyncExternalStore(subscribe, getSnapshot, () => 0);
}
