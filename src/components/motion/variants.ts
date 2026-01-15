import type { Variants } from "framer-motion";

export function pageVariants(opts: { reduced: boolean; supportsClipPath: boolean }): Variants {
  const { reduced, supportsClipPath } = opts;

  if (reduced) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.22 } },
      exit: { opacity: 0, transition: { duration: 0.18 } },
    };
  }

  if (!supportsClipPath) {
    return {
      initial: { opacity: 0, y: 10, scale: 0.99 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
      },
      exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] },
      },
    };
  }

  // Masked (clip-path) center-out reveal.
  return {
    initial: { opacity: 0, clipPath: "circle(0% at 50% 40%)" },
    animate: {
      opacity: 1,
      clipPath: "circle(150% at 50% 40%)",
      transition: { duration: 0.65, ease: [0.2, 0.8, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1] },
    },
  };
}

export function fadeUp(reduced: boolean, y = 12): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    };
  }
  return {
    hidden: { opacity: 0, y },
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
        delayChildren: 0.06,
      },
    },
  };
}

