import type { Metadata } from "next";
import { CARE_TEAM } from "@/content/counselling";
import { Bullets, Card, Disclaimer, Page, PageHeader, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Your care team",
  description:
    "Who does what across the multidisciplinary team, and the right question to ask each of them.",
};

export default function CareTeamPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Multidisciplinary care"
        title="Your care team"
        intro="Serious illness is handled by a team, and most people only ever meet two or three of them. Knowing who does what is the difference between waiting six months and asking the right person on Tuesday."
      />

      <div className="space-y-3">
        {CARE_TEAM.map((professional) => (
          <Card key={professional.role}>
            <p className="font-semibold">{professional.role}</p>
            <p className="mt-1 text-sm text-muted">{professional.does}</p>
            <p className="mt-2 text-[0.95rem] text-ink-soft">
              <strong>Ask them about:</strong> {professional.askThemAbout}
            </p>
          </Card>
        ))}
      </div>

      <section>
        <SectionTitle title="Getting more from appointments" />
        <Bullets
          items={[
            "Write your three most important questions down before you go — anxiety erases them in the room.",
            "Take someone with you. A second pair of ears remembers what you will not.",
            "Ask them to write down the plan, or ask permission to record the conversation.",
            "Ask 'what is the aim of this treatment?' — cure, control or comfort. The answer shapes everything else.",
            "Ask 'what should make us call you, and on which number?'",
            "Say plainly if you have not understood. Clinicians routinely overestimate how clear they were.",
            "Ask about referral to psychology, dietetics, social work or palliative care — none of these require you to be at the end of anything.",
          ]}
        />
      </section>

      <section>
        <SectionTitle title="The one-page summary" hint="Worth an hour of anyone's time" />
        <Card>
          <p className="text-[0.95rem] leading-relaxed text-ink-soft">
            Keep one page at the front of a folder, or as a photo on your phone:
            diagnoses, current medicines and doses, allergies, key contacts, and
            the out-of-hours number. In every emergency and every new
            department, it saves hours — and in a crisis it is often the
            caregiver&apos;s single most useful possession.
          </p>
        </Card>
      </section>

      <Disclaimer />
    </Page>
  );
}
