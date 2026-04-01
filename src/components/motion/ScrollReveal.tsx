"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "./variants";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  once?: boolean;
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  y = 12,
  once = true,
  amount = 0.18,
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const variants = fadeUp(Boolean(reduced), y);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{
        duration: reduced ? 0.16 : 0.28,
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
  staggerChildren = 0.05,
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
