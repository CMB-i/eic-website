"use client";

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
  once?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 14,
  once = true,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const variants = fadeUp(Boolean(reduced), y);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={{
        duration: reduced ? 0.25 : 0.5,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      style={{ willChange: "transform, opacity" }}
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
  staggerChildren = 0.09,
  once = true,
}: ScrollRevealGroupProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={stagger(Boolean(reduced), staggerChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.22 }}
    >
      {children}
    </motion.div>
  );
}

