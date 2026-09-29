"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type Props = {
  className?: string;
};

export function CopyEmail({ className = "" }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${className}`}>
      <a
        href={`mailto:${site.contact.email}`}
        className="text-sm break-all transition-colors hover:text-accent sm:text-base"
      >
        {site.contact.email}
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="shrink-0 font-mono text-[11px] tracking-wider text-muted-dim uppercase transition-colors hover:text-accent"
        aria-label={copied ? "Email copied" : "Copy email address"}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
