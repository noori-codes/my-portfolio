"use client";

import {
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function MagneticMedia({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-2px)`;
  }

  function onLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
  }

  return (
    <div
      ref={ref}
      className={`magnetic-media ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
