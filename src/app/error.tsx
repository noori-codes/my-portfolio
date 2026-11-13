"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/lib/site";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col justify-center py-20">
      <div className="page-shell">
        <p className="section-label">Error</p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
          Something broke
        </h1>
        <p className="section-lede mt-5">
          That page hit an unexpected error. Try again, or jump somewhere safe.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button type="button" onClick={reset} className="btn btn-primary">
            Try again
          </button>
          <Link
            href="/"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            Back home →
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
          <span className="text-muted-dim"> · recover</span>
          {error.digest ? (
            <span className="text-muted-dim"> · {error.digest}</span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
