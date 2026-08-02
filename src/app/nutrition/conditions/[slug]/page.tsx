import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  NUTRITION_CONDITIONS,
  findNutritionCondition,
} from "@/content/nutrition/conditions";
import { CONDITIONS } from "@/content/conditions";
import { Bullets, Callout, Card, Disclaimer, Page, PageHeader } from "@/components/ui";

export function generateStaticParams() {
  return NUTRITION_CONDITIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = findNutritionCondition(slug);
  if (!condition) return {};
  return {
    title: `${condition.name} — nutrition`,
    description: condition.blurb,
  };
}

export default async function NutritionConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = findNutritionCondition(slug);
  if (!condition) notFound();

  const emotional = CONDITIONS.find((c) => c.nutritionSlug === condition.slug);

  return (
    <Page>
      <div>
        <Link
          href="/nutrition/conditions"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← All conditions
        </Link>
      </div>

      <PageHeader
        eyebrow="Nutrition"
        title={condition.name}
        intro={condition.blurb}
      />

      <section className="space-y-3">
        <h2 className="text-lg">What you are aiming for</h2>
        <Bullets items={condition.goals} />
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <p className="font-semibold text-good">Build meals around</p>
          <div className="mt-3">
            <Bullets items={condition.recommended} />
          </div>
        </Card>
        <Card>
          <p className="font-semibold text-warn">Limit or avoid</p>
          <div className="mt-3">
            <Bullets items={condition.limit} />
          </div>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="space-y-3">
          <h2 className="text-lg">Meal timing</h2>
          <Bullets items={condition.timing} />
        </section>
        <section className="space-y-3">
          <h2 className="text-lg">Portions</h2>
          <Bullets items={condition.portions} />
        </section>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg">A sample day</h2>
        <Card>
          <ul className="divide-y divide-line">
            {condition.sampleDay.map((meal) => (
              <li key={meal.meal} className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:gap-4">
                <span className="w-40 shrink-0 text-sm font-semibold">{meal.meal}</span>
                <span className="text-sm text-ink-soft">{meal.items}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Common myths</h2>
        <div className="space-y-3">
          {condition.myths.map((myth) => (
            <Card key={myth.myth}>
              <p className="font-semibold text-warn">&ldquo;{myth.myth}&rdquo;</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {myth.truth}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg">Treatment-related challenges</h2>
        <Bullets items={condition.challenges} />
      </section>

      <Callout tone="warn" title="See a registered dietitian if">
        <ul className="mt-1 space-y-1">
          {condition.seeDietitian.map((item) => (
            <li key={item}>· {item}</li>
          ))}
        </ul>
      </Callout>

      <section className="flex flex-wrap gap-2">
        {condition.slug === "diabetes" && (
          <Link href="/tools/glucose" className="btn btn-soft text-sm">
            Blood sugar monitor
          </Link>
        )}
        {(condition.slug === "hypertension" ||
          condition.slug === "heart-disease" ||
          condition.slug === "kidney-disease" ||
          condition.slug === "stroke-recovery") && (
          <Link href="/tools/blood-pressure" className="btn btn-soft text-sm">
            Blood pressure monitor
          </Link>
        )}
        <Link href="/care/dietitian" className="btn btn-soft text-sm">
          Book a dietitian
        </Link>
        <Link href="/nutrition/assessment" className="btn btn-soft text-sm">
          Build a personalised plan
        </Link>
        {emotional && (
          <Link
            href={`/support/conditions/${emotional.slug}`}
            className="btn btn-soft text-sm"
          >
            Emotional support for {emotional.name.toLowerCase()}
          </Link>
        )}
      </section>

      <Disclaimer />
    </Page>
  );
}
