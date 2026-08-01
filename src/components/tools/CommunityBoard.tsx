"use client";

import { useState } from "react";
import { Callout } from "@/components/ui";
import { COMMUNITY_RULES, COMMUNITY_SPACES } from "@/content/counselling";
import { DEMO_NOTE, IS_DEMO } from "@/lib/env";

/** Seeded posts so a new space is never an empty, discouraging room. */
const SEED: Record<string, { name: string; when: string; text: string }[]> = {
  patients: [
    {
      name: "Anonymous",
      when: "2 days ago",
      text: "Third cycle done. Nobody warned me that finishing treatment would be the frightening part — everyone else thinks it's over and I'm the most scared I've been.",
    },
    {
      name: "R.",
      when: "5 days ago",
      text: "Practical thing that helped: I take a written list of three questions to every appointment. I forget everything the moment they start talking otherwise.",
    },
  ],
  caregivers: [
    {
      name: "Anonymous",
      when: "yesterday",
      text: "I resented my husband today. He didn't do anything wrong. He's dying and I was angry that I couldn't go to my friend's birthday. Saying it here because I can't say it at home.",
    },
    {
      name: "Anonymous",
      when: "4 days ago",
      text: "Asked for respite for the first time in two years. Four hours. I slept for three of them and cried for one. Ask sooner than I did.",
    },
  ],
  family: [
    {
      name: "T.",
      when: "3 days ago",
      text: "How do you tell an eight-year-old? We used the real words in the end, like the guidance here says. She asked if it was because she was naughty. I'm glad we asked instead of assuming.",
    },
  ],
  bereaved: [
    {
      name: "Anonymous",
      when: "6 days ago",
      text: "Eleven months. Everyone stopped asking at about month three. It's worse now than it was then and I didn't expect that.",
    },
  ],
  stories: [
    {
      name: "M.",
      when: "last week",
      text: "Four years on from a diagnosis I was told I'd not see out. I'm not a miracle and I'm not brave. I just kept turning up. If you're reading this at 3am: keep turning up.",
    },
  ],
  memorial: [
    {
      name: "For Grace",
      when: "2 weeks ago",
      text: "My mother. Fed everyone who came to her door for sixty years. Ovarian cancer, and she was still asking whether we'd eaten in the last week of it.",
    },
  ],
};

export function CommunityBoard() {
  const [space, setSpace] = useState(COMMUNITY_SPACES[0].slug);
  const [text, setText] = useState("");
  const [alias, setAlias] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const current = COMMUNITY_SPACES.find((s) => s.slug === space)!;
  const posts = SEED[space] ?? [];

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (text.trim().length < 5) return;
    setState("sending");

    if (IS_DEMO) {
      setState("sent");
      setText("");
      return;
    }

    try {
      const response = await fetch("/api/community", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ space, alias, text }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Could not post.");
      setState("sent");
      setText("");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Could not post.");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {COMMUNITY_SPACES.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => {
              setSpace(s.slug);
              setState("idle");
            }}
            className={`btn text-sm ${s.slug === space ? "btn-primary" : "btn-ghost"}`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted">{current.blurb}</p>

      <ul className="space-y-3">
        {posts.map((post, i) => (
          <li key={i} className="card p-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-semibold">{post.name}</p>
              <p className="text-xs text-muted">{post.when}</p>
            </div>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
              {post.text}
            </p>
          </li>
        ))}
      </ul>

      <form onSubmit={submit} className="card space-y-3 p-4">
        <p className="font-semibold">Post to {current.name}</p>
        <input
          className="field"
          value={alias}
          placeholder="A name to post under (anything — or leave blank for Anonymous)"
          onChange={(e) => setAlias(e.target.value)}
        />
        <textarea
          className="field"
          rows={4}
          value={text}
          placeholder="Write as much or as little as you want."
          onChange={(e) => setText(e.target.value)}
        />
        {state === "sent" && (
          <Callout tone={IS_DEMO ? "info" : "good"}>
            {IS_DEMO
              ? DEMO_NOTE
              : "Sent for moderation. Every post is read by a moderator before it appears — usually within a day."}
          </Callout>
        )}
        {state === "error" && <Callout tone="warn">{error}</Callout>}
        <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Submit for moderation"}
        </button>
      </form>

      <section className="card p-4">
        <p className="font-semibold">House rules</p>
        <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
          {COMMUNITY_RULES.map((rule) => (
            <li key={rule}>· {rule}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
