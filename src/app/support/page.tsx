import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer, Grid, LinkCard, Page, PageHeader, SectionTitle } from "@/components/ui";
import { SUPPORT_SECTIONS } from "@/content/registry";
import { CONDITIONS } from "@/content/conditions";

export const metadata: Metadata = {
  title: "Emotional support",
  description:
    "Support for patients, caregivers and families — psychological modules, anticipatory grief, bereavement and condition-specific guidance.",
};

export default function SupportHubPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Emotional support"
        title="Support"
        intro="The same illness lands differently on the person who has it, the person caring for them, and the people who love them both. Start wherever you are."
      />

      <section>
        <SectionTitle title="Who is this for?" />
        <Grid cols={3}>
          {["patient", "caregiver", "family"].map((key) => {
            const section = SUPPORT_SECTIONS[key];
            return (
              <LinkCard
                key={key}
                href={`/support/${key}`}
                meta={section.eyebrow}
                title={section.title}
                description={section.intro}
              />
            );
          })}
        </Grid>
      </section>

      <section>
        <SectionTitle
          title="Psychological modules"
          hint="Twelve short self-guided courses"
          action={{ href: "/support/modules", label: "See all" }}
        />
        <Grid cols={3}>
          {SUPPORT_SECTIONS.modules.topics.slice(0, 6).map((topic) => (
            <LinkCard
              key={topic.slug}
              href={`/support/modules/${topic.slug}`}
              title={topic.title}
              description={topic.summary}
            />
          ))}
        </Grid>
      </section>

      <section>
        <SectionTitle
          title="Grief"
          hint="Before a death, after one, and for the people paid to be there"
        />
        <Grid cols={3}>
          <LinkCard
            href="/support/anticipatory-grief"
            title="Anticipatory grief"
            description="Grieving someone who is still here — guilt, anger, fear, difficult conversations, legacy and goodbye."
          />
          <LinkCard
            href="/support/bereavement"
            title="Loss & bereavement"
            description="Understanding grief, myths, anniversaries, children's grief, men's grief, complicated grief and purpose after loss."
          />
          <LinkCard
            href="/support/caregiver/caregiver-grief"
            meta="Caregivers"
            title="Grief while caring"
            description="Losing them in instalments, what happens when caring ends, and cumulative loss in hospice and professional care."
          />
        </Grid>
      </section>

      <section>
        <SectionTitle
          title="By medical condition"
          hint="Emotional, family and caregiver challenges for each"
          action={{ href: "/support/conditions", label: "See all" }}
        />
        <div className="flex flex-wrap gap-2">
          {CONDITIONS.map((condition) => (
            <Link
              key={condition.slug}
              href={`/support/conditions/${condition.slug}`}
              className="btn btn-ghost text-sm"
            >
              {condition.name}
            </Link>
          ))}
        </div>
      </section>

      <Disclaimer />
    </Page>
  );
}
