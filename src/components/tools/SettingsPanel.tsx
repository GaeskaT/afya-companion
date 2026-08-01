"use client";

import { useState } from "react";
import { Callout } from "@/components/ui";
import { clearAllLocal, readLocal, useLocalState } from "@/lib/storage";
import { KEYS, type Profile } from "@/lib/records";

export function SettingsPanel() {
  const [profile, setProfile] = useLocalState<Profile>(KEYS.profile, {
    name: "",
    role: "patient",
    condition: "",
  });
  const [confirming, setConfirming] = useState(false);
  const [note, setNote] = useState("");

  function exportData() {
    const dump: Record<string, unknown> = {};
    Object.values(KEYS).forEach((key) => {
      dump[key] = readLocal(key, null);
    });
    const blob = new Blob([JSON.stringify(dump, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `carecircle-export-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setNote("Exported. Keep the file somewhere private — it contains everything you have written.");
  }

  return (
    <div className="space-y-6">
      <section className="card space-y-3 p-4 sm:p-5">
        <p className="font-semibold">About you</p>
        <p className="text-sm text-muted">
          Optional, and only used to tailor what the app shows you. It stays on
          this device.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="label" htmlFor="p-name">
              Name
            </label>
            <input
              id="p-name"
              className="field"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="p-role">
              You are
            </label>
            <select
              id="p-role"
              className="field"
              value={profile.role}
              onChange={(e) =>
                setProfile({ ...profile, role: e.target.value as Profile["role"] })
              }
            >
              <option value="patient">The patient</option>
              <option value="caregiver">A caregiver</option>
              <option value="family">A family member</option>
            </select>
          </div>
          <div>
            <label className="label" htmlFor="p-condition">
              Main condition
            </label>
            <input
              id="p-condition"
              className="field"
              value={profile.condition}
              onChange={(e) => setProfile({ ...profile, condition: e.target.value })}
            />
          </div>
        </div>
      </section>

      <section className="card space-y-3 p-4 sm:p-5">
        <p className="font-semibold">Your data</p>
        <p className="text-sm text-ink-soft">
          Check-ins, journals, screening scores, food and fluid records, goals
          and your safety plan are stored in this browser only. They are never
          uploaded. Clearing your browser data, or using a different device,
          means starting again — so export a copy if it matters to you.
        </p>
        <p className="text-sm text-ink-soft">
          The two exceptions, which say so on screen: appointment requests and
          community posts are sent to the service.
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-soft" onClick={exportData}>
            Export everything as a file
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => window.print()}
          >
            Print this page
          </button>
          {!confirming ? (
            <button
              type="button"
              className="btn btn-ghost text-danger"
              onClick={() => setConfirming(true)}
            >
              Delete everything
            </button>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  clearAllLocal();
                  setConfirming(false);
                  setNote("All local data deleted from this device.");
                }}
              >
                Yes, delete permanently
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setConfirming(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        {note && <Callout tone="info">{note}</Callout>}
      </section>

      <section className="card space-y-2 p-4 sm:p-5">
        <p className="font-semibold">Install on your phone</p>
        <ul className="space-y-1.5 text-sm text-ink-soft">
          <li>
            · <strong>Android / Chrome:</strong> menu → Add to home screen.
          </li>
          <li>
            · <strong>iPhone / Safari:</strong> Share → Add to Home Screen.
          </li>
          <li>
            · <strong>Desktop:</strong> the install icon in the address bar.
          </li>
        </ul>
        <p className="text-sm text-muted">
          Installed, CareCircle opens full screen and the crisis page, breathing
          exercises and home screen keep working without a signal.
        </p>
      </section>
    </div>
  );
}
