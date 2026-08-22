import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { BASE_PATH } from "@/lib/env";

/** Metadata routes don't get basePath applied to their values, so do it here. */
const base = BASE_PATH || "";

/** Required for the static export build, harmless for the server build. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: `${base}/`,
    scope: `${base}/`,
    display: "standalone",
    orientation: "portrait",
    background_color: "#f8efd9",
    theme_color: "#fef6e5",
    categories: ["health", "medical", "lifestyle"],
    icons: [
      {
        src: `${base}/icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${base}/icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${base}/icons/maskable-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "Daily check-in", url: `${base}/tools/check-in` },
      { name: "Breathing exercise", url: `${base}/tools/breathing` },
      { name: "Crisis support", url: `${base}/care/crisis` },
    ],
  };
}
