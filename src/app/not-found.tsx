import Link from "next/link";
import { Page, PageHeader } from "@/components/ui";

export default function NotFound() {
  return (
    <Page>
      <PageHeader
        eyebrow="Not found"
        title="That page isn't here"
        intro="The link may be out of date. Try one of these instead."
      />
      <div className="flex flex-wrap gap-2">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/support" className="btn btn-ghost">
          Support
        </Link>
        <Link href="/nutrition" className="btn btn-ghost">
          Nutrition
        </Link>
        <Link href="/tools" className="btn btn-ghost">
          Tools
        </Link>
        <Link href="/care/crisis" className="btn btn-ghost">
          Crisis support
        </Link>
      </div>
    </Page>
  );
}
