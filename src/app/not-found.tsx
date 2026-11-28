import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70vh] flex-col justify-center py-20">
      <p className="section-kicker">404</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-md font-serif text-lg text-muted">
        That route doesn&apos;t exist—or it moved. Head back to work or home.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/work" className="btn btn-outline">
          Work
        </Link>
      </div>
    </div>
  );
}
