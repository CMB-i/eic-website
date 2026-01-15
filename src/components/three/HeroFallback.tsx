"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function HeroFallback({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-4xl border border-border bg-surface",
        "p-10 md:p-12",
        className,
      )}
      aria-label="EIC hero visual"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-28 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[oklch(0.7_0.15_260_/_14%)] blur-3xl" />
        <div className="absolute -right-24 top-6 h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
      </div>

      <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Reduced-motion / low-power fallback
          </div>
          <div className="text-balance text-3xl font-semibold tracking-tight text-text md:text-4xl">
            Futuristic energy, minimal motion.
          </div>
          <p className="max-w-prose text-sm leading-6 text-muted">
            Your settings prefer less animation or your device is in a low-power mode. We’ll keep
            the experience premium without running the 3D canvas.
          </p>
        </div>

        <WireOrb />
      </div>
    </div>
  );
}

function WireOrb() {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[320px] place-items-center">
      <svg
        viewBox="0 0 240 240"
        className="h-full w-full"
        role="img"
        aria-label="Abstract orb illustration"
      >
        <defs>
          <radialGradient id="g" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="rgba(255,219,102,0.6)" />
            <stop offset="55%" stopColor="rgba(255,219,102,0.12)" />
            <stop offset="100%" stopColor="rgba(255,219,102,0)" />
          </radialGradient>
        </defs>
        <circle cx="120" cy="120" r="88" fill="url(#g)" />
        <circle
          cx="120"
          cy="120"
          r="84"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
        />
        <circle
          cx="120"
          cy="120"
          r="62"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.25"
        />
        <path
          d="M32 120c18-44 56-70 88-70s70 26 88 70"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.25"
        />
        <path
          d="M32 120c18 44 56 70 88 70s70-26 88-70"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.25"
        />
        <path
          d="M120 32c44 18 70 56 70 88s-26 70-70 88"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.25"
        />
        <path
          d="M120 32c-44 18-70 56-70 88s26 70 70 88"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.25"
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-glow/25" />
    </div>
  );
}

