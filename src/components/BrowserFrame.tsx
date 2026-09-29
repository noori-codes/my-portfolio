"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  url?: string | null;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspectClassName?: string;
  children?: ReactNode;
};

function displayUrl(url?: string | null) {
  if (!url) return "imx.local/project";
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 55vw",
  className = "",
  aspectClassName = "aspect-4/3 sm:aspect-16/10",
  children,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`browser-frame group/frame ${className}`}>
      <div className="browser-frame__chrome" aria-hidden>
        <div className="browser-frame__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-frame__url">
          <span className="browser-frame__lock" />
          {displayUrl(url)}
        </div>
      </div>

      <div
        className={`browser-frame__viewport relative overflow-hidden bg-surface ${aspectClassName}`}
      >
        <div
          className={`browser-frame__shimmer pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        />
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          className={`object-cover object-top transition-[transform,opacity] duration-700 ease-out group-hover/frame:scale-[1.035] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent"
          aria-hidden
        />
        {children}
      </div>
    </div>
  );
}
