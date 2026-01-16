import type { Variants } from "framer-motion";

export function pageVariants(opts: { reduced: boolean; supportsClipPath: boolean }): Variants {
  const { reduced, supportsClipPath } = opts;

  if (reduced) {
    return {
      initial: { opacity: 0.92 },
      animate: { opacity: 1, transition: { duration: 0.2 } },
      exit: { opacity: 0, transition: { duration: 0.18 } },
    };
  }

  if (!supportsClipPath) {
    return {
      initial: { opacity: 0.92, y: 8 },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.32, ease: [0.2, 0.8, 0.2, 1] },
      },
      exit: {
        opacity: 0,
        y: -6,
        transition: { duration: 0.24, ease: [0.2, 0.8, 0.2, 1] },
      },
    };
  }

  // Masked (clip-path) center-out reveal (disabled by default).
  return {
    initial: { opacity: 0.92, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      clipPath: "circle(150% at 50% 40%)",
      transition: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -6,
      clipPath: "circle(0% at 50% 40%)",
      transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] },
    },
  };
}

export function fadeUp(reduced: boolean, y = 12): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 1 },
      show: { opacity: 1 },
    };
  }
  // Don't hide content; animate only position (or subtle opacity enhancement).
  return {
    hidden: { opacity: 0.92, y },
    show: { opacity: 1, y: 0 },
  };
}

export function stagger(reduced: boolean, staggerChildren = 0.08): Variants {
  if (reduced) {
    return {
      hidden: {},
      show: {},
    };
  }
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: 0, // No delays.
      },
    },
  };
}

