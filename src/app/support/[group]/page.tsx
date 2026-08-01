import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUPPORT_SECTIONS, SUPPORT_SECTION_KEYS } from "@/content/registry";
import { Disclaimer, Grid, LinkCard, Page, PageHeader } from "@/components/ui";

export function generateStaticParams() {
  return SUPPORT_SECTION_KEYS.map((group) => ({ group }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string }>;
}): Promise<Metadata> {
  const { group } = await params;
  const section = SUPPORT_SECTIONS[group];
  if (!section) return {};
  return { title: section.title, description: section.intro };
}

export default async function SupportSectionPage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;
  const section = SUPPORT_SECTIONS[group];
  if (!section) notFound();

  return (
    <Page>
      <PageHeader
        eyebrow={section.eyebrow}
        title={section.title}
        intro={section.intro}
      />
      <Grid cols={2}>
        {section.topics.map((topic) => (
          <LinkCard
            key={topic.slug}
            href={`/support/${section.slug}/${topic.slug}`}
            title={topic.title}
            description={topic.summary}
            meta={topic.cue}
          />
        ))}
      </Grid>
      <Disclaimer />
    </Page>
  );
}
