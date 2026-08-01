import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RECIPES, findRecipe } from "@/content/nutrition/recipes";
import { Bullets, Callout, Card, Disclaimer, Page, PageHeader, Stat, Steps, Tag } from "@/components/ui";

export function generateStaticParams() {
  return RECIPES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = findRecipe(slug);
  if (!recipe) return {};
  return { title: recipe.name, description: recipe.blurb };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = findRecipe(slug);
  if (!recipe) notFound();

  return (
    <Page>
      <div>
        <Link
          href="/nutrition/recipes"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← All recipes
        </Link>
      </div>

      <PageHeader eyebrow="Recipe" title={recipe.name} intro={recipe.blurb}>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {recipe.suitableFor.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </PageHeader>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Preparation" value={recipe.minutes} unit="min" />
        <Stat label="Serves" value={recipe.serves} />
        <Stat label="Cost per serving" value={`~${recipe.costPerServing}`} hint={recipe.costTier === "low" ? "budget-friendly" : "moderate"} />
        <Stat label="Energy" value={recipe.nutrition.kcal} unit="kcal" hint="per serving" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-lg">Ingredients</h2>
          <Card>
            <Bullets items={recipe.ingredients} />
          </Card>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg">Method</h2>
          <Card>
            <Steps items={recipe.method} />
          </Card>
        </section>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg">Nutrition per serving</h2>
        <Card>
          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-5">
            <p>
              <strong>{recipe.nutrition.kcal}</strong> kcal
            </p>
            <p>
              <strong>{recipe.nutrition.protein} g</strong> protein
            </p>
            <p>
              <strong>{recipe.nutrition.carbs} g</strong> carbohydrate
            </p>
            <p>
              <strong>{recipe.nutrition.fat} g</strong> fat
            </p>
            <p>
              <strong>{recipe.nutrition.fibre} g</strong> fibre
            </p>
          </div>
          <p className="mt-3 text-sm text-muted">{recipe.nutrition.sodiumNote}</p>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Swaps and local substitutions</h2>
        <Bullets items={recipe.swaps} />
      </section>

      {recipe.notSuitable && (
        <Callout tone="warn" title="Check before using this if">
          <ul className="mt-1 space-y-1">
            {recipe.notSuitable.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </Callout>
      )}

      <Disclaimer />
    </Page>
  );
}
