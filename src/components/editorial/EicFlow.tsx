import * as React from "react";
import { cn } from "@/lib/utils";

type FlowStep = {
  title: string;
  body: string;
};

type EicFlowProps = {
  steps: readonly FlowStep[];
  className?: string;
  tone?: "default" | "inverted";
};

export function EicFlow({
  steps,
  className,
  tone = "default",
}: EicFlowProps) {
  const inverted = tone === "inverted";
  const baseStroke = inverted ? "rgba(255,255,255,0.18)" : "rgba(24,24,27,0.12)";
  const strokeColor = inverted ? "rgba(255,248,242,0.98)" : "rgba(38,38,42,0.92)";
  const startGlow = inverted ? "rgba(255,242,230,0.72)" : "rgba(211,91,31,0.82)";
  const endGlow = inverted ? "rgba(255,180,110,0.98)" : "rgba(176,61,18,0.96)";
  const nodeHalo = inverted ? "rgba(255,206,156,0.14)" : "rgba(214,90,38,0.09)";
  const nodeOuter = inverted ? "rgba(255,255,255,0.42)" : "rgba(24,24,27,0.24)";
  const nodeInner = inverted ? "rgba(255,255,255,0.98)" : "rgba(24,24,27,0.94)";
  const curvePoints = [
    { x: 46, y: 172 },
    { x: 188, y: 126 },
    { x: 330, y: 72 },
  ] as const;
  const curvePath = "M46 172Q118 164 188 126T330 72";

  return (
    <div className={cn("space-y-5 md:space-y-6", className)}>
      <div className="relative">
        <svg
          viewBox="0 0 360 220"
          className="relative h-auto w-full"
          role="img"
          aria-label="Trajectory from Discover to Build to Launch"
        >
          <defs>
            <linearGradient id={`eic-flow-${tone}`} x1="10%" y1="90%" x2="92%" y2="18%">
              <stop offset="0%" stopColor={startGlow} />
              <stop offset="34%" stopColor={strokeColor} />
              <stop offset="100%" stopColor={endGlow} />
            </linearGradient>
          </defs>

          <path
            d={curvePath}
            fill="none"
            stroke={baseStroke}
            strokeLinecap="round"
            strokeWidth="5.5"
          />
          <path
            d={curvePath}
            fill="none"
            stroke={`url(#eic-flow-${tone})`}
            strokeLinecap="round"
            strokeWidth="3.4"
          />

          {curvePoints.map((point, index) => (
            <g key={steps[index]?.title ?? index}>
              <circle cx={point.x} cy={point.y} r="18" fill={nodeHalo} />
              <circle cx={point.x} cy={point.y} r="12" fill={nodeOuter} />
              <circle
                cx={point.x}
                cy={point.y}
                r="6.5"
                fill={inverted ? "rgba(10,10,12,0.78)" : "rgba(255,255,255,0.96)"}
                stroke={nodeInner}
                strokeWidth="1.8"
              />
              <circle cx={point.x} cy={point.y} r="3.2" fill={nodeInner} />
            </g>
          ))}
        </svg>
      </div>

      <div
        className={cn(
          "grid gap-4 border-t pt-4 md:grid-cols-3 md:gap-6",
          inverted ? "border-white/14" : "border-border/70",
        )}
      >
        {steps.map((step) => (
          <div key={step.title} className="space-y-1.5">
            <div
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.22em]",
                inverted ? "text-white/82" : "text-text/72",
              )}
            >
              {step.title}
            </div>
            <p
              className={cn(
                "max-w-[24ch] text-sm leading-6",
                inverted ? "text-white/84" : "text-muted",
              )}
            >
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
