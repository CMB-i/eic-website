import * as React from "react";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Premium bento card:
 * - GPU-friendly hover lift (transform)
 * - Sheen sweep via ::after translate (no expensive filters)
 */
export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-4xl border border-border bg-surface",
        "p-5",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
        "group-hover:ring-1 group-hover:ring-glow/25",
        // Sheen sweep
        "after:pointer-events-none after:content-[''] after:absolute after:inset-0 after:opacity-0",
        "after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.38),transparent)]",
        "after:translate-x-[-60%] after:transition-[transform,opacity] after:duration-[600ms] after:ease-out",
        "group-hover:after:opacity-[0.25] group-hover:after:translate-x-[60%]",
        className,
      )}
    >
      {/* Subtle glows (cheap; no backdrop blur) */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-28 h-80 w-80 rounded-full bg-[oklch(0.7_0.15_260_/_10%)] blur-3xl" />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}

