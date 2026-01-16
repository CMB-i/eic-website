"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AsTag = "h1" | "h2" | "h3" | "p";

type StaggerHeadingProps = {
  text: string;
  className?: string;
  as?: AsTag;
  delay?: number;
};

export function StaggerHeading({
  text,
  className,
  as = "h1",
  delay = 0,
}: StaggerHeadingProps) {
  const reduced = useReducedMotion();
  const words = React.useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = (motion as unknown as Record<AsTag, typeof motion.h1>)[as];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.09,
          },
        },
      }}
    >
      {words.map((w, idx) => (
        <motion.span
          key={`${w}-${idx}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
            },
          }}
        >
          {w}
          {idx < words.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </MotionTag>
  );
}

