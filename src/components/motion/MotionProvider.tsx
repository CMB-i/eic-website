"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageVariants } from "./variants";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  const supportsClipPath = React.useMemo(() => {
    if (typeof CSS === "undefined" || typeof CSS.supports !== "function") return false;
    try {
      return CSS.supports("clip-path: circle(50% at 50% 50%)");
    } catch {
      return false;
    }
  }, []);

  const variants = pageVariants({
    reduced: Boolean(reduced),
    supportsClipPath,
  });

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        style={{ willChange: "transform, opacity, clip-path" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

