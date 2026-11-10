import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col justify-center py-20">
      <div className="page-shell">
        <p className="section-label">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
          Page not found
        </h1>
        <p className="section-lede mt-5">
          That route doesn&apos;t exist—or it moved. Try one of these instead.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
          <Link
            href="/work"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            View work →
          </Link>
          <Link
            href="/contact"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Contact →
          </Link>
        </div>

        <p className="mt-14 font-mono text-xs text-muted-dim">
          <span className="text-accent">{site.brand.toLowerCase()}</span>
          <span className="text-muted-dim"> · lost route</span>
        </p>
      </div>
    </div>
  );
}
