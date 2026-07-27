"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {status === "sent" && (
        <p
          role="status"
          className="border border-accent/30 bg-accent-glow px-4 py-3 font-mono text-sm text-accent"
        >
          Opening your email client… If nothing opens, write me at{" "}
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
          className="border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
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
          className="border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
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
          className="resize-y border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40"
          placeholder="Tell me about your project…"
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary mt-2 w-fit"
      >
        Send message
      </button>
    </form>
  );
}
