import * as React from "react";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/70 bg-surface",
        "p-5 shadow-[0_6px_18px_oklch(0.16_0.01_280_/_0.03)] transition-colors duration-200",
        "hover:border-border/85 hover:bg-surface-elevated",
        className,
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
