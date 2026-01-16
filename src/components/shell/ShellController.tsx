"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { Sidebar } from "./Sidebar";
import { TopPillBar } from "./TopPillBar";

const LS_SIDEBAR = "sidebarCollapsed";
const LS_INTRO = "eicIntroPlayed";

// Module-level callback for drawer open (avoids context/provider complexity).
let drawerOpenCallback: (() => void) | null = null;

export function setDrawerOpenCallback(cb: (() => void) | null) {
  drawerOpenCallback = cb;
}

export function openDrawer() {
  if (drawerOpenCallback) drawerOpenCallback();
}

export function ShellController() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const introTimerRef = React.useRef<number | null>(null);

  // Sync sidebar width to CSS variable for layout offset.
  React.useEffect(() => {
    const width = isCollapsed ? 92 : 280;
    const isMobile = typeof window !== "undefined" && window.matchMedia?.("(max-width: 767px)")?.matches;
    const sidebarW = isMobile ? "0px" : `${width}px`;
    document.documentElement.style.setProperty("--sidebar-w", sidebarW);
  }, [isCollapsed]);

  // Initialize from localStorage + intro logic.
  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LS_SIDEBAR);
      const introPlayed = window.localStorage.getItem(LS_INTRO) === "1";

      // User preference wins: if sidebarCollapsed already exists, do not run intro.
      if (saved != null) {
        setIsCollapsed(saved === "1");
        return;
      }

      // Intro guardrails: desktop only, not reduced motion, one-time.
      const isDesktop = window.matchMedia?.("(min-width: 768px)")?.matches ?? false;
      if (!isDesktop) return;
      if (introPlayed) return;
      if (reducedMotion) return;

      // Start expanded, stay open ~1600ms, then collapse over ~0.75s. Do NOT write sidebarCollapsed.
      setIsCollapsed(false);
      introTimerRef.current = window.setTimeout(() => {
        setIsCollapsed(true);
        try {
          window.localStorage.setItem(LS_INTRO, "1");
        } catch {}
      }, 1600);
    } catch {
      // ignore
    }
    return () => {
      if (introTimerRef.current != null) window.clearTimeout(introTimerRef.current);
      introTimerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  const onCollapsedChange = (next: boolean) => {
    if (introTimerRef.current != null) window.clearTimeout(introTimerRef.current);
    introTimerRef.current = null;
    setIsCollapsed(next);
    try {
      window.localStorage.setItem(LS_SIDEBAR, next ? "1" : "0");
    } catch {
      // ignore
    }
  };

  // Register drawer open callback.
  React.useEffect(() => {
    setDrawerOpenCallback(() => setIsDrawerOpen(true));
    return () => setDrawerOpenCallback(null);
  }, []);

  return (
    <>
      {/* Desktop sidebar (collapsible, persisted). */}
      <Sidebar variant="desktop" collapsed={isCollapsed} onCollapsedChange={onCollapsedChange} />

      {/* Mobile drawer sidebar (always expanded). */}
      <Sidebar
        variant="drawer"
        collapsed={false}
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
      />

      {/* Dev-only motion debug panel */}
      {process.env.NODE_ENV !== "production" && (
        <div className="fixed bottom-4 right-4 z-[60] rounded-2xl border border-border bg-surface/80 px-3 py-2 text-[11px] text-muted backdrop-blur">
          <div className="font-medium text-text">motion debug</div>
          <div>reducedMotion: {String(Boolean(reducedMotion))}</div>
          <div>collapsed: {String(isCollapsed)}</div>
          <div>drawerOpen: {String(isDrawerOpen)}</div>
          <div className="max-w-[280px] truncate">route: {pathname}</div>
        </div>
      )}
    </>
  );
}

// Separate component for TopPillBar that needs to be inside main content area.
export function TopPillBarWrapper() {
  return (
    <div className="sticky top-4 z-40 px-4 md:px-6 lg:px-8">
      <TopPillBar onOpenMobileMenu={openDrawer} />
    </div>
  );
}
