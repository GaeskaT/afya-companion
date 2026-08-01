import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NUTRITION_LIBRARY, findLibraryTopic } from "@/content/nutrition/library";
import { TopicArticle } from "@/components/TopicArticle";

export function generateStaticParams() {
  return NUTRITION_LIBRARY.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = findLibraryTopic(slug);
  if (!topic) return {};
  return { title: topic.title, description: topic.summary };
}

export default async function NutritionLibraryTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = findLibraryTopic(slug);
  if (!topic) notFound();

  return (
    <TopicArticle
      topic={topic}
      eyebrow="Nutrition education"
      backHref="/nutrition/library"
      backLabel="Education library"
    />
  );
}
