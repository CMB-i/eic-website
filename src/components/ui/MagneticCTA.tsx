"use client";

import Link from "next/link";
import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticCTAProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  /**
   * Max translation in px for the inner content.
   */
  clampPx?: number;
};

function isTouchLikeDevice(): boolean {
  if (typeof window === "undefined") return false;
  const nav = navigator as unknown as { maxTouchPoints?: number };
  return (
    (typeof nav.maxTouchPoints === "number" && nav.maxTouchPoints > 0) ||
    window.matchMedia?.("(hover: none)")?.matches === true
  );
}

export function MagneticCTA({ href, className, children, clampPx = 6 }: MagneticCTAProps) {
  const reduced = useReducedMotion();
  const [touchLike, setTouchLike] = React.useState(true);

  React.useEffect(() => {
    setTouchLike(isTouchLikeDevice());
  }, []);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, { stiffness: 250, damping: 18, mass: 0.25 });
  const y = useSpring(mvY, { stiffness: 250, damping: 18, mass: 0.25 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduced || touchLike) return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);

    const cx = Math.max(-1, Math.min(1, dx)) * clampPx;
    const cy = Math.max(-1, Math.min(1, dy)) * (clampPx * 0.7);
    mvX.set(cx);
    mvY.set(cy);
  };

  const onLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  return (
    <Link
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5",
        "text-sm font-medium transition-transform",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
        className,
      )}
    >
      <motion.span
        className="inline-flex items-center gap-2"
        style={reduced || touchLike ? undefined : { x, y, willChange: "transform" }}
      >
        {children}
      </motion.span>
    </Link>
  );
}

