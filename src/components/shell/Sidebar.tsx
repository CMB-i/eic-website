"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";
import { isActivePath, NAV_ITEMS } from "@/lib/nav";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type SidebarProps = {
  isCollapsed: boolean;
  onCollapsedChange: (next: boolean) => void;
  isDrawerOpen: boolean;
  onDrawerOpenChange: (open: boolean) => void;
};

export function Sidebar({
  isCollapsed,
  onCollapsedChange,
  isDrawerOpen,
  onDrawerOpenChange,
}: SidebarProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // Close the mobile drawer on route change.
  React.useEffect(() => {
    if (isDrawerOpen) onDrawerOpenChange(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close on Escape when the drawer is open.
  React.useEffect(() => {
    if (!isDrawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDrawerOpenChange(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDrawerOpen, onDrawerOpenChange]);

  const width = isCollapsed ? 92 : 280;

  const AsideContents = (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between gap-3 px-3 pt-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "grid h-9 w-9 place-items-center rounded-2xl border border-border bg-surface",
              "ring-1 ring-glow/20",
            )}
          >
            <span className="text-sm font-semibold tracking-tight text-text">EIC</span>
          </div>
          <motion.div
            animate={{ opacity: isCollapsed ? 0 : 1, x: isCollapsed ? -6 : 0 }}
            transition={{ duration: reduced ? 0.15 : 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className={cn("min-w-0", isCollapsed && "pointer-events-none")}
          >
            <div className="truncate text-sm font-semibold text-text">
              Entrepreneurship &amp; Innovation Cell
            </div>
            <div className="truncate text-xs text-muted">Futuristic template</div>
          </motion.div>
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop collapse toggle lives in the sidebar header (not in the top pill). */}
          <button
            type="button"
            className={cn(
              "hidden md:inline-flex h-9 w-9 items-center justify-center rounded-xl",
              "border border-border bg-surface/60 text-text/80 hover:text-text",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
            )}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-pressed={isCollapsed}
            onClick={() => onCollapsedChange(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>

          {/* Mobile close button (inside drawer) */}
          <button
            type="button"
            className={cn(
              "inline-flex md:hidden h-9 w-9 items-center justify-center rounded-xl",
              "border border-border bg-surface/60 text-text/80 hover:text-text",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
            )}
            aria-label="Close menu"
            onClick={() => onDrawerOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-2 pb-4">
        {NAV_ITEMS.map((item) => {
          const active = isActivePath(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.title}
              title={item.title}
              className={cn(
                "group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm",
                "outline-none transition-colors",
                active ? "text-text" : "text-text/75 hover:text-text",
                "hover:bg-surface/60",
                "focus-visible:ring-2 focus-visible:ring-glow/60",
              )}
            >
              {/* Active pill glides between items */}
              {active && (
                <motion.span
                  layoutId="navActivePill"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  className="absolute inset-0 rounded-2xl bg-surface ring-1 ring-glow/20"
                  style={{ zIndex: 0 }}
                />
              )}

              <span
                className={cn(
                  "relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-2xl border",
                  active ? "border-border bg-background/40" : "border-transparent bg-transparent",
                )}
              >
                <Icon className="h-4 w-4" />
              </span>

              <motion.span
                animate={{ opacity: isCollapsed ? 0 : 1, x: isCollapsed ? -8 : 0 }}
                transition={{
                  duration: reduced ? 0.15 : 0.22,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className={cn("relative z-10 min-w-0 truncate", isCollapsed && "pointer-events-none")}
              >
                {item.title}
              </motion.span>

              {!isCollapsed && (
                <span className="relative z-10 ml-auto hidden text-xs text-muted group-hover:block">
                  {item.description ?? ""}
                </span>
              )}

              {/* Sheen */}
              <span
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-2xl opacity-0",
                  "bg-[linear-gradient(110deg,transparent,rgba(255,219,102,0.18),transparent)]",
                  "group-hover:opacity-100 transition-opacity duration-300",
                )}
                style={{ zIndex: 1 }}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        className={cn(
          "hidden md:block h-screen sticky top-0 shrink-0 border-r border-border/70",
          "bg-background/40",
        )}
        initial={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
        animate={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
        transition={{ duration: reduced ? 0.2 : 0.45, delay: reduced ? 0 : 0.12 }}
        style={{ width }}
      >
        <div className="h-full px-1.5 py-1.5">{AsideContents}</div>
      </motion.aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.12 : 0.22 }}
            aria-hidden={!isDrawerOpen}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/45"
              aria-label="Close menu"
              onClick={() => onDrawerOpenChange(false)}
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className={cn(
                "absolute left-0 top-0 h-full w-[min(86vw,320px)] border-r border-border",
                "bg-background",
              )}
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: reduced ? 0.16 : 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="flex h-full flex-col px-2 py-2">
                <div className="flex-1 overflow-auto">{AsideContents}</div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

