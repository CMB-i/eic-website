"use client";

import type { Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "./variants";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Extra delay in seconds (per-instance).
   * Keep tiny; we also stagger via parent groups.
   */
  delay?: number;
  y?: number;
  blurPx?: number;
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 8,
  blurPx = 0, // No blur on initial load above fold.
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const base = fadeUp(Boolean(reduced), y) as Variants;
  const blur = reduced ? 0 : Math.max(0, Math.min(3, blurPx)); // Max 3px if needed.
  const variants: Variants =
    blur > 0
      ? ({
          hidden: { ...(base as any).hidden, filter: `blur(${blur}px)` },
          show: { ...(base as any).show, filter: "blur(0px)" },
        } satisfies Variants)
      : base;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{
        duration: reduced ? 0.22 : 0.32,
        delay: 0, // No delays.
        ease: [0.2, 0.8, 0.2, 1],
      }}
      style={{
        willChange: blur > 0 ? "transform, opacity, filter" : "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
};

export function ScrollRevealGroup({
  children,
  className,
  staggerChildren = 0.08,
  once = true,
}: ScrollRevealGroupProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={stagger(Boolean(reduced), staggerChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

