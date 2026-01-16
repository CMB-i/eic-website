"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageVariants } from "./variants";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  // Defer animations until after first paint.
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Disable clip-path by default (can cause "blank until scroll").
  const useClip = false;

  const variants = pageVariants({
    reduced: Boolean(reduced),
    supportsClipPath: useClip,
  });

  // Render without animation wrapper until mounted.
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
