import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONDITIONS, findCondition } from "@/content/conditions";
import { Bullets, Card, Disclaimer, Page, PageHeader } from "@/components/ui";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = findCondition(slug);
  if (!condition) return {};
  return {
    title: `${condition.name} — emotional support`,
    description: condition.blurb,
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = findCondition(slug);
  if (!condition) notFound();

  const sections = [
    { title: "Emotional challenges", items: condition.emotional },
    { title: "What the family faces", items: condition.family },
    { title: "What the caregiver faces", items: condition.caregiver },
    { title: "Practical coping strategies", items: condition.coping },
  ];

  return (
    <Page>
      <div>
        <Link
          href="/support/conditions"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← All conditions
        </Link>
      </div>

      <PageHeader
        eyebrow="Disease-specific support"
        title={condition.name}
        intro={condition.blurb}
      />

      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-lg">{section.title}</h2>
            <Bullets items={section.items} />
          </section>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-lg">Where to find support</h2>
        <Card>
          <Bullets items={condition.resources} />
        </Card>
      </section>

      <section className="flex flex-wrap gap-2">
        {condition.nutritionSlug && (
          <Link
            href={`/nutrition/conditions/${condition.nutritionSlug}`}
            className="btn btn-soft text-sm"
          >
            Nutrition for {condition.name.toLowerCase()}
          </Link>
        )}
        <Link href="/care/counselling" className="btn btn-soft text-sm">
          Counselling
        </Link>
        <Link href="/tools/screening" className="btn btn-soft text-sm">
          Screening questionnaires
        </Link>
        <Link href="/care/community" className="btn btn-soft text-sm">
          Peer support
        </Link>
      </section>

      <Disclaimer />
    </Page>
  );
}
