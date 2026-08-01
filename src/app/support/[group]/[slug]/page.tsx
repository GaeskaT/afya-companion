import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUPPORT_SECTIONS } from "@/content/registry";
import { TopicArticle } from "@/components/TopicArticle";

export function generateStaticParams() {
  return Object.values(SUPPORT_SECTIONS).flatMap((section) =>
    section.topics.map((topic) => ({ group: section.slug, slug: topic.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string; slug: string }>;
}): Promise<Metadata> {
  const { group, slug } = await params;
  const topic = SUPPORT_SECTIONS[group]?.topics.find((t) => t.slug === slug);
  if (!topic) return {};
  return { title: topic.title, description: topic.summary };
}

export default async function SupportTopicPage({
  params,
}: {
  params: Promise<{ group: string; slug: string }>;
}) {
  const { group, slug } = await params;
  const section = SUPPORT_SECTIONS[group];
  const topic = section?.topics.find((t) => t.slug === slug);
  if (!section || !topic) notFound();

  return (
    <TopicArticle
      topic={topic}
      eyebrow={section.eyebrow}
      backHref={`/support/${section.slug}`}
      backLabel={section.title}
    />
  );
}
