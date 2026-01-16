"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";
import { isActivePath, NAV_ITEMS } from "@/lib/nav";
import { Menu, X } from "lucide-react";

type SidebarProps =
  | {
      variant: "desktop";
      collapsed: boolean;
      onCollapsedChange: (next: boolean) => void;
    }
  | {
      variant: "drawer";
      collapsed: false;
      open: boolean;
      onOpenChange: (open: boolean) => void;
    };

export function Sidebar(props: SidebarProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // `collapsed` only affects desktop sidebar. Drawer is always expanded.
  const collapsed = props.variant === "desktop" ? props.collapsed : false;
  const width = collapsed ? 92 : 280;

  // Drawer UX: close on route change and Escape.
  React.useEffect(() => {
    if (props.variant !== "drawer") return;
    if (!props.open) return;
    props.onOpenChange(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  React.useEffect(() => {
    if (props.variant !== "drawer") return;
    if (!props.open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") props.onOpenChange(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [props]);

  const Content = ({ onClose }: { onClose?: () => void }) => (
    <div className="flex h-full flex-col gap-4">
      {/* Header */}
      <div className="px-3 pt-4">
        {/* Header control: ONLY a single hamburger toggle (desktop md+). */}
        <button
          type="button"
          className={cn(
            "hidden md:inline-flex h-9 w-9 items-center justify-center rounded-xl",
            "border border-border bg-surface/60 text-text/80 hover:text-text",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-pressed={collapsed}
          onClick={() => {
            if (props.variant !== "desktop") return;
            props.onCollapsedChange(!collapsed);
          }}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {/* Nav */}
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
                animate={{ opacity: collapsed ? 0 : 1, x: collapsed ? -8 : 0 }}
                transition={{
                  duration: reduced ? 0.18 : 0.35,
                  delay: 0, // No delays.
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className={cn("relative z-10 min-w-0 truncate", collapsed && "pointer-events-none")}
              >
                {item.title}
              </motion.span>

              {!collapsed && (
                <span className="relative z-10 ml-auto hidden text-xs text-muted group-hover:block">
                  {item.description ?? ""}
                </span>
              )}

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

  if (props.variant === "desktop") {
    return (
      <motion.aside
        className={cn(
          "hidden md:block h-screen sticky top-0 shrink-0 border-r border-border/70",
          "bg-background/40",
        )}
        initial={false}
        animate={{ width }}
        transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="h-full px-1.5 py-1.5">
          <Content />
        </div>
      </motion.aside>
    );
  }

  // Drawer (z-50 container, backdrop click closes).
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.12 : 0.22 }}
          aria-hidden={!props.open}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Close menu"
            onClick={() => props.onOpenChange(false)}
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
            {/* Drawer close control (kept functional; no logo/title in the sidebar). */}
            <button
              type="button"
              className={cn(
                "absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border",
                "bg-surface/60 text-text/80 hover:text-text",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
              )}
              aria-label="Close menu"
              onClick={() => props.onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex h-full flex-col px-2 py-2">
              <div className="flex-1 overflow-auto">
                <Content />
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

