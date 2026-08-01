import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { THERAPEUTIC_DIETS, findDiet } from "@/content/nutrition/diets";
import { RECIPES } from "@/content/nutrition/recipes";
import { Bullets, Callout, Card, Disclaimer, Page, PageHeader, Tag } from "@/components/ui";

export function generateStaticParams() {
  return THERAPEUTIC_DIETS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const diet = findDiet(slug);
  if (!diet) return {};
  return { title: diet.name, description: diet.purpose };
}

export default async function DietPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const diet = findDiet(slug);
  if (!diet) notFound();

  const related = RECIPES.filter((recipe) =>
    recipe.suitableFor.some((tag) =>
      diet.name.toLowerCase().includes(tag.split(" ")[0].toLowerCase()),
    ),
  ).slice(0, 3);

  return (
    <Page>
      <div>
        <Link
          href="/nutrition/diets"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← All diet plans
        </Link>
      </div>

      <PageHeader eyebrow="Therapeutic diet" title={diet.name} intro={diet.purpose}>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {diet.conditions.map((condition) => (
            <Tag key={condition}>{condition}</Tag>
          ))}
        </div>
      </PageHeader>

      <section className="space-y-3">
        <h2 className="text-lg">Principles</h2>
        <Bullets items={diet.principles} />
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <p className="font-semibold text-good">Include</p>
          <div className="mt-3">
            <Bullets items={diet.includes} />
          </div>
        </Card>
        <Card>
          <p className="font-semibold text-warn">Avoid or limit</p>
          <div className="mt-3">
            <Bullets items={diet.avoid} />
          </div>
        </Card>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg">A sample day</h2>
        <Card>
          <ul className="divide-y divide-line">
            {diet.sampleDay.map((meal) => (
              <li key={meal.meal} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:gap-4">
                <span className="w-40 shrink-0 text-sm font-semibold">{meal.meal}</span>
                <span className="text-sm text-ink-soft">{meal.items}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <Callout tone="warn" title="Cautions">
        <ul className="mt-1 space-y-1">
          {diet.cautions.map((caution) => (
            <li key={caution}>· {caution}</li>
          ))}
        </ul>
      </Callout>

      {related.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg">Recipes that fit</h2>
          <div className="flex flex-wrap gap-2">
            {related.map((recipe) => (
              <Link
                key={recipe.slug}
                href={`/nutrition/recipes/${recipe.slug}`}
                className="btn btn-soft text-sm"
              >
                {recipe.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-2">
        <Link href="/care/dietitian" className="btn btn-soft text-sm">
          Book a dietitian
        </Link>
        <Link href="/nutrition/assessment" className="btn btn-soft text-sm">
          Personalise this
        </Link>
      </div>

      <Disclaimer />
    </Page>
  );
}
