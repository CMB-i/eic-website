"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import * as React from "react";
import { cn } from "@/lib/utils";
import { titleFromPathname } from "@/lib/nav";
import {
  Handshake,
  Mail,
  Menu,
  Moon,
  Search,
  Sun,
  UserPlus,
} from "lucide-react";

type TopPillBarProps = {
  onOpenMobileMenu: () => void;
};

const LS_THEME = "eic.theme";
type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

function applyTheme(next: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = next;
  try {
    window.localStorage.setItem(LS_THEME, next);
  } catch {
    // ignore
  }
}

export function TopPillBar({ onOpenMobileMenu }: TopPillBarProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const title = titleFromPathname(pathname);

  const [theme, setTheme] = React.useState<Theme>("dark");

  const { scrollY } = useScroll();
  const bgA = useTransform(scrollY, [0, 120], [0.7, 0.45]);
  const borderA = useTransform(scrollY, [0, 120], [0.75, 0.55]);
  const shadowA = useTransform(scrollY, [0, 120], [0.22, 0.14]);

  const backgroundColor = useTransform(bgA, (a) => `oklch(from var(--surface) l c h / ${a})`);
  const borderColor = useTransform(borderA, (a) => `oklch(from var(--border) l c h / ${a})`);
  const boxShadow = useTransform(
    shadowA,
    (a) => `0 18px 60px oklch(0.02 0.01 265 / ${a})`,
  );

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LS_THEME) as Theme | null;
      const initial = saved === "light" || saved === "dark" ? saved : getSystemTheme();
      setTheme(initial);
      applyTheme(initial);
    } catch {
      const initial = getSystemTheme();
      setTheme(initial);
      applyTheme(initial);
    }
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <motion.div
      className="fixed left-0 right-0 top-4 z-40 px-4"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0.2 : 0.5, delay: reduced ? 0 : 0.22 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className={cn(
            "rounded-full border",
            "backdrop-blur-[14px]",
            "px-3 py-2.5",
          )}
          style={{
            backgroundColor,
            borderColor,
            boxShadow,
          }}
        >
          <div className="flex items-center gap-2">
            {/* Mobile menu button (desktop collapse toggle lives in Sidebar header) */}
            <button
              type="button"
              className={cn(
                "inline-flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-border",
                "bg-surface/40 text-text/80 hover:text-text",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
              )}
              aria-label="Open menu"
              onClick={onOpenMobileMenu}
            >
              <Menu className="h-4 w-4" />
            </button>

            <div className="min-w-0 px-1">
              <div className="truncate text-sm font-semibold tracking-tight text-text">
                {title}
              </div>
              <div className="truncate text-xs text-muted">
                Shockingly smooth UI
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              {/* Quick actions */}
              <div className="hidden items-center gap-2 md:flex">
                <PillAction icon={UserPlus} label="Join" />
                <PillAction icon={Handshake} label="Partner" />
                <PillAction icon={Mail} label="Contact" />
              </div>

              <button
                type="button"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border",
                  "bg-surface/40 text-text/80 hover:text-text",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
                )}
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              <button
                type="button"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border",
                  "bg-surface/40 text-text/80 hover:text-text",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
                )}
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PillAction({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button
      type="button"
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-border px-3 py-2",
        "bg-surface/40 text-sm font-medium text-text/85 hover:text-text",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
      )}
      aria-label={label}
    >
      <Icon className="h-4 w-4 text-text/75 group-hover:text-text" />
      <span className="text-sm">{label}</span>
    </button>
  );
}

