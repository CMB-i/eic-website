"use client";

import { useEffect, useMemo, useState } from "react";

function getLowPowerHint(): boolean {
  if (typeof navigator === "undefined") return false;

  // Heuristics; all optional across browsers.
  const anyNav = navigator as unknown as {
    deviceMemory?: number;
    hardwareConcurrency?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };

  const saveData = Boolean(anyNav.connection?.saveData);
  const lowMemory = typeof anyNav.deviceMemory === "number" && anyNav.deviceMemory <= 4;
  const lowCpu =
    typeof anyNav.hardwareConcurrency === "number" && anyNav.hardwareConcurrency <= 4;
  const slowConn =
    typeof anyNav.connection?.effectiveType === "string" &&
    ["slow-2g", "2g"].includes(anyNav.connection.effectiveType);

  return saveData || lowMemory || lowCpu || slowConn;
}

function getReducedMotionMedia(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

/**
 * Central policy for "reduce motion" behavior across the site.
 * - Respects `prefers-reduced-motion`
 * - Adds a gentle "low power" heuristic for expensive features (e.g. 3D Canvas)
 */
export function useReducedMotionPref(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [lowPower, setLowPower] = useState(false);

  useEffect(() => {
    setPrefersReduced(getReducedMotionMedia());
    setLowPower(getLowPowerHint());

    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;

    const onChange = () => setPrefersReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return useMemo(() => prefersReduced || lowPower, [prefersReduced, lowPower]);
}

