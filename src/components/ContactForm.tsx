"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const payload = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        throw new Error(payload?.error || "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {status === "sent" && (
        <p
          role="status"
          className="border border-accent/30 bg-accent-glow px-4 py-3 font-mono text-sm text-accent"
        >
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && error && (
        <p
          role="alert"
          className="border border-red-500/30 bg-red-500/10 px-4 py-3 font-mono text-sm text-red-300"
        >
          {error} You can also write me at{" "}
          <a href={`mailto:${site.contact.email}`} className="underline">
            {site.contact.email}
          </a>
          .
        </p>
      )}

      <label className="grid gap-1.5">
        <span className="font-mono text-xs tracking-wider text-muted uppercase">
          Name
        </span>
        <input
          name="name"
          required
          autoComplete="name"
          disabled={status === "sending"}
          className="border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 disabled:opacity-60"
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-1.5">
        <span className="font-mono text-xs tracking-wider text-muted uppercase">
          Email
        </span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={status === "sending"}
          className="border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 disabled:opacity-60"
          placeholder="you@email.com"
        />
      </label>

      <label className="grid gap-1.5">
        <span className="font-mono text-xs tracking-wider text-muted uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          disabled={status === "sending"}
          className="resize-y border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 disabled:opacity-60"
          placeholder="Tell me about your project…"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary mt-2 w-fit disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
