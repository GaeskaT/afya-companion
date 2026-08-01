import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SCREENING_TOOLS, findTool } from "@/content/screening";
import { ScreeningRunner } from "@/components/tools/ScreeningRunner";
import { Page, PageHeader } from "@/components/ui";

export function generateStaticParams() {
  return SCREENING_TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = findTool(slug);
  if (!tool) return {};
  return { title: tool.fullName, description: tool.intro };
}

export default async function ScreeningToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = findTool(slug);
  if (!tool) notFound();

  return (
    <Page>
      <div>
        <Link
          href="/tools/screening"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← All questionnaires
        </Link>
      </div>
      <PageHeader eyebrow={tool.fullName} title={tool.name} intro={tool.intro} />
      <ScreeningRunner tool={tool} />
    </Page>
  );
}
