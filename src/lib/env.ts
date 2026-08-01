/**
 * Build-mode flags. These are inlined at build time, so they must be read as
 * whole `process.env.X` expressions rather than destructured.
 */
export const IS_DEMO = process.env.NEXT_PUBLIC_DEMO === "1";

/** "" for a normal deployment, "/carecircle" when served from a Pages subpath. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const DEMO_NOTE =
  "This is a public demo with no server behind it, so nothing is actually sent. In a real deployment this reaches the service, and everything else in the app — which is stored on your own device — works exactly as it does here.";
