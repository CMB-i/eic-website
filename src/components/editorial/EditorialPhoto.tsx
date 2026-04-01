import * as React from "react";
import { cn } from "@/lib/utils";

type EditorialPhotoProps = {
  title: string;
  caption: string;
  meta?: string;
  className?: string;
  tone?: "warm" | "neutral" | "violet";
  compact?: boolean;
};

const TONE_CLASS = {
  warm: "bg-[linear-gradient(140deg,oklch(0.98_0.01_95),oklch(0.92_0.03_55)_42%,oklch(0.82_0.07_35)_100%)] dark:bg-[linear-gradient(140deg,oklch(0.24_0.02_285),oklch(0.3_0.04_20)_45%,oklch(0.34_0.06_28)_100%)]",
  neutral:
    "bg-[linear-gradient(140deg,oklch(0.99_0.002_95),oklch(0.94_0.01_285)_48%,oklch(0.88_0.02_260)_100%)] dark:bg-[linear-gradient(140deg,oklch(0.24_0.015_290),oklch(0.28_0.02_280)_45%,oklch(0.32_0.02_250)_100%)]",
  violet:
    "bg-[linear-gradient(140deg,oklch(0.98_0.004_95),oklch(0.93_0.02_320)_40%,oklch(0.86_0.03_285)_100%)] dark:bg-[linear-gradient(140deg,oklch(0.24_0.015_290),oklch(0.3_0.03_320)_42%,oklch(0.34_0.03_280)_100%)]",
} as const;

export function EditorialPhoto({
  title,
  caption,
  meta,
  className,
  tone = "neutral",
  compact = false,
}: EditorialPhotoProps) {
  return (
    <figure
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-border/45 bg-surface-elevated",
        compact ? "aspect-[4/3]" : "aspect-[16/10]",
        className,
      )}
    >
      <div className={cn("absolute inset-0", TONE_CLASS[tone])} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.7),transparent_22%),radial-gradient(circle_at_78%_34%,rgba(255,255,255,0.35),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_78%_34%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-6 top-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-text/70 dark:text-text/75">
        <span>{title}</span>
        {meta ? <span>{meta}</span> : null}
      </div>
      <div className="absolute inset-x-6 bottom-6">
        <figcaption className="max-w-[34ch] text-sm leading-6 text-text/85 dark:text-text/88">
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}
