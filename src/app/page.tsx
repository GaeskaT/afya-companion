import Link from "next/link";
import { CheckInForm } from "@/components/tools/CheckInForm";
import { HomeSnapshot } from "@/components/tools/HomeSnapshot";
import { Card, Disclaimer, Grid, LinkCard, Page, SectionTitle } from "@/components/ui";
import { AFFIRMATIONS, pickForDay } from "@/content/daily";
import { todayKey } from "@/lib/dates";
import { site } from "@/lib/site";
import { IconShield, IconWind } from "@/components/icons";

export default function HomePage() {
  const affirmation = pickForDay(AFFIRMATIONS, todayKey());

  return (
    <Page>
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {new Date().toLocaleDateString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>
        <h1 className="text-[1.7rem] lg:text-4xl">Today</h1>
        <p className="max-w-2xl text-ink-soft">
          {site.name} supports the emotional and nutritional wellbeing of
          patients, caregivers and families — through every stage of illness.
        </p>
      </header>

      <Card className="bg-primary-tint border-transparent">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-700">
          Today&apos;s reminder
        </p>
        <p className="mt-2 font-display text-xl leading-snug text-primary-700">
          {affirmation}
        </p>
      </Card>

      <section>
        <SectionTitle
          title="Your check-in"
          hint="One minute. It stays on this device."
          action={{ href: "/tools/check-in", label: "Full check-in" }}
        />
        <CheckInForm compact />
      </section>

      <HomeSnapshot />

      <section>
        <SectionTitle title="Right now" hint="For when today is hard" />
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/tools/breathing" className="card flex items-center gap-3 p-4">
            <span className="rounded-full bg-primary-tint p-2.5 text-primary-700">
              <IconWind />
            </span>
            <span>
              <span className="block font-semibold">Breathe for two minutes</span>
              <span className="block text-sm text-muted">
                Guided breathing and relaxation
              </span>
            </span>
          </Link>
          <Link
            href="/care/crisis"
            className="card flex items-center gap-3 border-transparent bg-danger-tint p-4"
          >
            <span className="rounded-full bg-surface p-2.5 text-danger">
              <IconShield />
            </span>
            <span>
              <span className="block font-semibold text-danger">
                I need help now
              </span>
              <span className="block text-sm text-danger/80">
                Crisis support and safety planning
              </span>
            </span>
          </Link>
        </div>
      </section>

      <section>
        <SectionTitle
          title="Who are you here for?"
          hint="The same illness lands differently on each person."
        />
        <Grid cols={3}>
          <LinkCard
            href="/support/patient"
            meta="Patient"
            title="Support for me"
            description="Mood, anxiety, pain, sleep, hope, identity and goals."
          />
          <LinkCard
            href="/support/caregiver"
            meta="Caregiver"
            title="Support for the carer"
            description="Strain, burnout, compassion fatigue, asking for help."
          />
          <LinkCard
            href="/support/family"
            meta="Family"
            title="Support for the family"
            description="Understanding the diagnosis, talking, children, conflict, money."
          />
        </Grid>
      </section>

      <section>
        <SectionTitle title="Explore" />
        <Grid cols={3}>
          <LinkCard
            href="/support/modules"
            title="Psychological modules"
            description="Twelve short courses: stress, anxiety, depression, acceptance, coping, resilience, hope, meaning."
          />
          <LinkCard
            href="/support/anticipatory-grief"
            title="Anticipatory grief"
            description="Grieving before the loss — and how to use the time that remains."
          />
          <LinkCard
            href="/support/bereavement"
            title="Loss & bereavement"
            description="After a death: grief, anniversaries, children, complicated grief, purpose."
          />
          <LinkCard
            href="/nutrition"
            title="Nutrition & dietetics"
            description="Condition-specific eating, therapeutic diets, recipes, trackers and a dietitian clinic."
          />
          <LinkCard
            href="/tools/screening"
            title="Screening questionnaires"
            description="Validated checks for depression, anxiety, stress, burden, burnout, sleep, wellbeing and grief."
          />
          <LinkCard
            href="/care/counselling"
            title="Counselling & care team"
            description="One-to-one, family, couple, caregiver, children's, bereavement and group support."
          />
        </Grid>
      </section>

      <Disclaimer />
    </Page>
  );
}
