"use client";

import { useState } from "react";
import { Callout } from "@/components/ui";
import { uid, useLocalState } from "@/lib/storage";
import { KEYS, type BookingRecord } from "@/lib/records";

export function BookingForm({
  kind,
  services,
}: {
  kind: "counselling" | "dietitian";
  services: { slug: string; name: string }[];
}) {
  const [bookings, setBookings] = useLocalState<BookingRecord[]>(KEYS.bookings, []);
  const [service, setService] = useState(services[0]?.slug ?? "");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("patient");
  const [preferred, setPreferred] = useState("");
  const [notes, setNotes] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          kind,
          service,
          name,
          contact,
          role,
          preferred,
          notes,
          urgent,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Could not send the request.");
      setBookings([
        {
          id: uid(),
          service: services.find((s) => s.slug === service)?.name ?? service,
          kind,
          preferred,
          at: new Date().toISOString(),
          status: "requested",
        },
        ...bookings,
      ]);
      setState("sent");
      setName("");
      setContact("");
      setNotes("");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error ? err.message : "Could not send the request.");
    }
  }

  if (state === "sent") {
    return (
      <div className="space-y-4">
        <Callout tone="good" title="Request received">
          Someone from the {kind === "dietitian" ? "dietetic" : "counselling"} team
          will contact you using the details you gave. If your situation changes
          before then — or becomes urgent — use the crisis page or contact your
          care team directly.
        </Callout>
        <button type="button" className="btn btn-ghost" onClick={() => setState("idle")}>
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card space-y-4 p-4 sm:p-5">
      <div>
        <label className="label" htmlFor="service">
          What are you asking for?
        </label>
        <select
          id="service"
          className="field"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className="field"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="contact">
            Email or phone
          </label>
          <input
            id="contact"
            className="field"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="role">
            You are
          </label>
          <select
            id="role"
            className="field"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="patient">The patient</option>
            <option value="caregiver">A caregiver</option>
            <option value="family">A family member</option>
            <option value="bereaved">Recently bereaved</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="preferred">
            Preferred times
          </label>
          <input
            id="preferred"
            className="field"
            value={preferred}
            placeholder="e.g. weekday mornings, or after 6pm"
            onChange={(e) => setPreferred(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="notes">
          Anything you want them to know beforehand
        </label>
        <textarea
          id="notes"
          className="field"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={
            kind === "dietitian"
              ? "e.g. losing weight during chemotherapy; on dialysis; struggling to swallow"
              : "e.g. caring for my mother with dementia and I'm not coping"
          }
        />
      </div>

      <label className="flex items-start gap-2.5 text-sm">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4"
          checked={urgent}
          onChange={(e) => setUrgent(e.target.checked)}
        />
        <span>
          This feels urgent to me.{" "}
          <span className="text-muted">
            (This form is not monitored around the clock — if you are at risk
            now, use the crisis page or your local emergency number.)
          </span>
        </span>
      </label>

      <Callout tone="info">
        This request is sent to the service. Unlike the rest of the app, this
        form does leave your device — only send what you are comfortable
        sharing.
      </Callout>

      {state === "error" && <Callout tone="warn">{message}</Callout>}

      <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Request an appointment"}
      </button>
    </form>
  );
}
