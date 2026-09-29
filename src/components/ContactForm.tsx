"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "border border-border bg-surface/40 px-4 py-3.5 text-foreground outline-none transition-[border-color,background,box-shadow] duration-200 placeholder:text-muted-dim/80 hover:border-border hover:bg-surface/70 focus-visible:border-accent focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-accent/35 disabled:opacity-60";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function clearFeedback() {
    if (status === "sent" || status === "error") {
      setStatus("idle");
      setError(null);
    }
  }

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
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
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

      <label className="grid gap-2">
        <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
          Name
        </span>
        <input
          name="name"
          required
          autoComplete="name"
          disabled={status === "sending"}
          onChange={clearFeedback}
          className={fieldClass}
          placeholder="Your name"
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
          Email
        </span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={status === "sending"}
          onChange={clearFeedback}
          className={fieldClass}
          placeholder="you@email.com"
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          disabled={status === "sending"}
          onChange={clearFeedback}
          className={`resize-y ${fieldClass}`}
          placeholder="What are you building? Timeline, goals, anything useful…"
        />
      </label>

      <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="font-mono text-[11px] text-muted-dim">
          Usually replies within 1–2 days
        </p>
      </div>
    </form>
  );
}
