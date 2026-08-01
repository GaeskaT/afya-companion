import type { NextConfig } from "next";

/**
 * Two build modes.
 *
 * Normal (`npm run build`) — a full server build: API routes for booking, the
 * moderation queue and the model-backed nutrition assistant all work.
 *
 * Demo (`NEXT_PUBLIC_DEMO=1 npm run build`) — a static export for GitHub
 * Pages, served from a subpath. There is no server, so the CI job drops
 * `src/app/api` before building; the assistant answers from its offline
 * library in the browser, and the forms say plainly that submissions go
 * nowhere in the demo.
 */
const isDemo = process.env.NEXT_PUBLIC_DEMO === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = isDemo
  ? {
      output: "export",
      basePath,
      assetPrefix: basePath || undefined,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      async headers() {
        return [
          {
            // The service worker must be allowed to control the whole origin.
            source: "/sw.js",
            headers: [
              { key: "Service-Worker-Allowed", value: "/" },
              {
                key: "Cache-Control",
                value: "no-cache, no-store, must-revalidate",
              },
            ],
          },
        ];
      },
    };

export default nextConfig;
