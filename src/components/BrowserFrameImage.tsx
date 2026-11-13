"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
};

export function BrowserFrameImage({
  src,
  alt,
  priority = false,
  sizes,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
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
    </>
  );
}
