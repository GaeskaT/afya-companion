import type { Metadata } from "next";
import Link from "next/link";
import { RECIPES } from "@/content/nutrition/recipes";
import { Disclaimer, Page, PageHeader, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Healthy recipes",
  description:
    "Recipes with preparation time, ingredients, nutrition, cost per serving, disease suitability and local substitutions.",
};

export default function RecipesPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Nutrition"
        title="Recipes"
        intro="Built for real conditions: fortified for weight loss, soft for sore mouths and swallowing problems, low-salt for blood pressure, renal-friendly, and cheap enough to actually cook."
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {RECIPES.map((recipe) => (
          <Link key={recipe.slug} href={`/nutrition/recipes/${recipe.slug}`} className="card p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold leading-snug">{recipe.name}</p>
              <span className="shrink-0 text-xs text-muted">{recipe.minutes} min</span>
            </div>
            <p className="mt-1 text-sm text-muted">{recipe.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {recipe.suitableFor.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">
              {recipe.nutrition.kcal} kcal · {recipe.nutrition.protein} g protein ·
              about {recipe.costPerServing} per serving
            </p>
          </Link>
        ))}
      </div>

      <Disclaimer />
    </Page>
  );
}
