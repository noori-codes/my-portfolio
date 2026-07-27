import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="section-label">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 font-mono text-sm text-muted">
        <span className="text-accent">imx@portfolio</span>:~$ cd /
      </p>
      <Link
        href="/"
        className="btn btn-primary mt-8"
      >
        Back home
      </Link>
    </div>
  );
}
