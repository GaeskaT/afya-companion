import Link from "next/link";
import type { Topic } from "@/content/types";
import { AUDIENCE_LABEL } from "@/content/types";
import { Bullets, Card, Disclaimer, PageHeader, Page, Steps } from "@/components/ui";

export function TopicArticle({
  topic,
  eyebrow,
  backHref,
  backLabel,
}: {
  topic: Topic;
  eyebrow?: string;
  backHref: string;
  backLabel: string;
}) {
  return (
    <Page>
      <div>
        <Link
          href={backHref}
          className="text-sm font-medium text-primary hover:underline"
        >
          ← {backLabel}
        </Link>
      </div>

      <PageHeader eyebrow={eyebrow} title={topic.title} intro={topic.summary}>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {topic.audience.map((a) => (
            <span key={a} className="chip">
              {AUDIENCE_LABEL[a]}
            </span>
          ))}
        </div>
      </PageHeader>

      <div className="space-y-6">
        {topic.blocks.map((block) => (
          <section key={block.heading} className="space-y-3">
            <h2 className="text-lg">{block.heading}</h2>
            {block.body?.map((p, i) => (
              <p key={i} className="text-[0.98rem] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            {block.list && <Bullets items={block.list} />}
            {block.steps && <Steps items={block.steps} />}
          </section>
        ))}
      </div>

      {topic.practices && topic.practices.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg">Try this</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {topic.practices.map((practice) => (
              <Card key={practice.title}>
                <p className="font-semibold">{practice.title}</p>
                {practice.minutes && (
                  <p className="mt-0.5 text-xs text-muted">
                    About {practice.minutes} minutes
                  </p>
                )}
                <div className="mt-3">
                  <Steps items={practice.steps} />
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {topic.related && topic.related.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg">Where to go next</h2>
          <div className="flex flex-wrap gap-2">
            {topic.related.map((link) => (
              <Link key={link.href} href={link.href} className="btn btn-soft text-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      <Disclaimer />
    </Page>
  );
}
