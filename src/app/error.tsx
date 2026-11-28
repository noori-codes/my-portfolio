"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page-shell flex min-h-[70vh] flex-col justify-center py-20">
      <p className="section-kicker">Error</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-5 max-w-md font-serif text-lg text-muted">
        Refresh and try again. If it keeps happening, write me directly.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <button type="button" onClick={reset} className="btn btn-primary">
          Try again
        </button>
        <Link href="/" className="btn btn-outline">
          Home
        </Link>
      </div>
    </div>
  );
}
