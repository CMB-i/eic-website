import * as React from "react";
import { cn } from "@/lib/utils";
type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "start" | "between";
};

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "between" && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="space-y-3">
        {label ? (
          <div className="text-xs uppercase tracking-[0.18em] text-muted">{label}</div>
        ) : null}
        <div className="text-2xl font-semibold text-text md:text-3xl">{title}</div>
      </div>
      {subtitle ? <p className="section-copy text-sm md:text-base">{subtitle}</p> : null}
    </div>
  );
}
