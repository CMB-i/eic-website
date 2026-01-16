"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

export type StickyStep = {
  title: string;
  body: string;
};

type StickyStepsProps = {
  steps: [StickyStep, StickyStep, StickyStep];
  className?: string;
  heightVh?: number; // outer height (defaults 220)
};

export function StickySteps({ steps, className, heightVh = 220 }: StickyStepsProps) {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);

  // Reduced motion: no pinning; render stacked with simple reveals.
  if (reduced) {
    return (
      <section className={cn("space-y-4", className)}>
        {steps.map((s) => (
          <ScrollReveal key={s.title} amount={0.2} blurPx={0}>
            <StepCard title={s.title} body={s.body} />
          </ScrollReveal>
        ))}
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className={cn("relative", className)}
      style={{ height: `${heightVh}vh` }}
    >
      <div className="sticky top-0 h-[100vh]">
        <StickyInner steps={steps} targetRef={ref} />
      </div>
    </section>
  );
}

function StickyInner({
  steps,
  targetRef,
}: {
  steps: [StickyStep, StickyStep, StickyStep];
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = React.useState<0 | 1 | 2>(0);
  const activeRef = React.useRef<0 | 1 | 2>(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const current = activeRef.current;
    let next = current;

    if (current === 0 && v > 0.36) next = 1;
    else if (current === 1 && v < 0.30) next = 0;
    else if (current === 1 && v > 0.70) next = 2;
    else if (current === 2 && v < 0.62) next = 1;

    if (next === current) return;
    activeRef.current = next;
    setActive(next);
  });

  return (
    <div className="grid h-full place-items-center px-2">
      <div className="w-full max-w-4xl">
        <div className="relative h-[420px] md:h-[460px]">
          {/* Stage: only ONE step visible at a time (no stacking / ghosting). */}
          <div className="relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                style={{ willChange: "transform, opacity" }}
              >
                <StepCard title={steps[active].title} body={steps[active].body} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress indicator */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2">
            <div className="relative flex items-center gap-2 rounded-full border border-border bg-background/40 px-2 py-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-muted/40" />
                  {active === i && (
                    <motion.span
                      layoutId="stickyStepDot"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-border bg-surface p-8 md:p-10 [contain:paint]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_18%,oklch(from_var(--accent)_l_c_h_/_10%),transparent_55%),radial-gradient(900px_circle_at_82%_78%,oklch(0.7_0.15_260_/_10%),transparent_55%)]" />
      <div className="relative">
        <div className="text-xs font-medium text-muted">From idea to launch</div>
        <div className="mt-3 text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {title}
        </div>
        <p className="mt-3 max-w-prose text-sm leading-6 text-muted md:text-base">{body}</p>
      </div>
    </div>
  );
}

