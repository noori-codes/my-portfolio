import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 font-mono text-sm text-muted">
        <span className="text-accent">imx@portfolio</span>:~$ cd /
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex bg-accent px-5 py-3 font-mono text-sm font-medium text-[#04140c] transition-colors hover:bg-accent-dim hover:text-foreground"
      >
        Back home
      </Link>
    </div>
  );
}
