import * as React from "react";
import { cn } from "@/lib/utils";

type PageLeadImageProps = {
  title: string;
  caption: string;
  meta?: string;
  tone?: "warm" | "neutral" | "violet";
  className?: string;
};

const TONE_CLASS = {
  warm: "bg-[linear-gradient(135deg,oklch(0.98_0.01_95),oklch(0.94_0.03_58)_35%,oklch(0.84_0.07_32)_100%)] dark:bg-[linear-gradient(135deg,oklch(0.24_0.02_285),oklch(0.31_0.05_20)_42%,oklch(0.37_0.07_28)_100%)]",
  neutral:
    "bg-[linear-gradient(135deg,oklch(0.99_0.002_95),oklch(0.95_0.01_285)_40%,oklch(0.88_0.02_260)_100%)] dark:bg-[linear-gradient(135deg,oklch(0.24_0.015_290),oklch(0.29_0.02_280)_45%,oklch(0.33_0.02_250)_100%)]",
  violet:
    "bg-[linear-gradient(135deg,oklch(0.985_0.004_95),oklch(0.94_0.02_320)_35%,oklch(0.87_0.03_285)_100%)] dark:bg-[linear-gradient(135deg,oklch(0.24_0.015_290),oklch(0.3_0.03_320)_42%,oklch(0.35_0.03_280)_100%)]",
} as const;

export function PageLeadImage({
  title,
  caption,
  meta,
  tone = "neutral",
  className,
}: PageLeadImageProps) {
  return (
    <figure
      className={cn(
        "relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border/45",
        className,
      )}
    >
      <div
        className={cn(
          "aspect-[21/8] min-h-[300px] w-full md:min-h-[380px] lg:min-h-[420px]",
          TONE_CLASS[tone],
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_28%,rgba(255,255,255,0.58),transparent_20%),radial-gradient(circle_at_80%_34%,rgba(255,255,255,0.18),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.34)_100%)] dark:bg-[radial-gradient(circle_at_20%_28%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_80%_34%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.48)_100%)]" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="section-frame px-5 pb-7 md:px-8 md:pb-9 lg:px-10">
          <figcaption className="max-w-[48rem]">
            <div className="text-xs uppercase tracking-[0.18em] text-white/72 dark:text-white/68">
              {title}
              {meta ? ` · ${meta}` : ""}
            </div>
            <div className="mt-2 text-sm leading-7 text-white/90 dark:text-white/86 md:text-base">
              {caption}
            </div>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
