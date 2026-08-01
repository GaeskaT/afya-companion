"use client";

import { useEffect } from "react";
import { BASE_PATH } from "@/lib/env";

/**
 * Registers the offline service worker. Kept out of production-only gating on
 * purpose: people use this app in hospital corridors and rural clinics, so the
 * offline shell is worth testing in development too.
 */
export function ServiceWorker() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    const register = () => {
      navigator.serviceWorker.register(`${BASE_PATH}/sw.js`).catch(() => {
        /* offline support is a bonus, never a blocker */
      });
    };
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
