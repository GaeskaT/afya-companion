"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_MAP, TABS } from "@/lib/nav";
import {
  IconHeart,
  IconHome,
  IconLeaf,
  IconPulse,
  IconShield,
  IconUsers,
} from "@/components/icons";
import { site } from "@/lib/site";
import { BASE_PATH } from "@/lib/env";

const ICONS = {
  home: IconHome,
  heart: IconHeart,
  leaf: IconLeaf,
  pulse: IconPulse,
  users: IconUsers,
};

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh flex flex-col lg:flex-row bg-bg">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-72 xl:w-80 shrink-0 flex-col border-r border-line bg-surface sticky top-0 h-dvh overflow-y-auto">
        <Link href="/" className="flex items-center gap-2.5 px-6 py-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE_PATH}/logo-mark.png`}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full ring-1 ring-accent/50"
          />
          <span className="font-display text-xl font-semibold">{site.name}</span>
        </Link>
        <nav className="px-3 pb-8 space-y-6">
          {SITE_MAP.map((group) => (
            <div key={group.title}>
              <p className="px-3 pb-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-muted">
                {group.title}
              </p>
              <ul>
                {group.links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          active
                            ? "bg-primary-tint text-primary-700 font-semibold"
                            : "text-ink-soft hover:bg-surface-2"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <Link
            href="/care/crisis"
            className="btn btn-danger w-full text-sm"
            aria-label="Crisis support"
          >
            <IconShield width={18} height={18} />
            Need help now
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="lg:hidden sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
          <div className="flex items-center justify-between px-4 h-14">
            <Link href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE_PATH}/logo-mark.png`}
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full ring-1 ring-accent/50"
              />
              <span className="font-display text-lg font-semibold">
                {site.name}
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/care/crisis"
                className="rounded-full bg-danger-tint px-3 py-1.5 text-xs font-semibold text-danger"
              >
                Help now
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-label="All sections"
                className="rounded-full border border-line-strong p-2 text-ink-soft"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden
                >
                  {menuOpen ? (
                    <path d="M6 6l12 12M18 6 6 18" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="max-h-[70dvh] overflow-y-auto border-t border-line px-4 py-4 space-y-5 animate-fade-up">
              {SITE_MAP.map((group) => (
                <div key={group.title}>
                  <p className="pb-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted">
                    {group.title}
                  </p>
                  <ul className="grid grid-cols-2 gap-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block rounded-lg px-2.5 py-2 text-sm text-ink-soft hover:bg-surface-2"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </header>

        <main id="main" className="flex-1 pb-24 lg:pb-10">
          {children}
        </main>

        <footer className="hidden lg:block border-t border-line px-8 py-6 text-xs text-muted">
          {site.name} — {site.tagline}. Education and self-help support; not a
          substitute for professional medical care.
        </footer>
      </div>

      {/* Mobile bottom tab bar */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-line bg-surface/95 backdrop-blur safe-bottom"
        aria-label="Primary"
      >
        <ul className="grid grid-cols-5">
          {TABS.map((tab) => {
            const Icon = ICONS[tab.icon];
            const active = new RegExp(tab.match).test(pathname);
            return (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex flex-col items-center gap-1 py-2.5 text-[0.68rem] font-medium transition-colors ${
                    active ? "text-primary" : "text-muted"
                  }`}
                >
                  <Icon width={21} height={21} />
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
