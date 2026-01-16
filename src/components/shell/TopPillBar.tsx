// src/components/shell/TopPillBar.tsx
"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { titleFromPathname } from "@/lib/nav";
import { Handshake, Mail, Menu, Moon, Search, Sun, UserPlus } from "lucide-react";

type TopPillBarProps = {
  onOpenMobileMenu: () => void;
};

const LS_THEME = "eic.theme";
type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  const t = document.documentElement.dataset.theme;
  return t === "light" || t === "dark" ? t : "dark";
}

function persistTheme(next: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = next;
  try {
    window.localStorage.setItem(LS_THEME, next);
  } catch {
    // ignore
  }
}

export function TopPillBar({ onOpenMobileMenu }: TopPillBarProps) {
  const [enhanced, setEnhanced] = React.useState(false);
  React.useEffect(() => setEnhanced(true), []);

  return enhanced ? (
    <TopPillBarEnhanced onOpenMobileMenu={onOpenMobileMenu} />
  ) : (
    <TopPillBarStatic onOpenMobileMenu={onOpenMobileMenu} />
  );
}

function TopPillBarStatic({ onOpenMobileMenu }: TopPillBarProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const title = titleFromPathname(pathname);

  // Keep only for icon rendering; DO NOT apply theme here (layout.tsx should do that pre-hydration).
  const [theme, setThemeState] = React.useState<Theme>("dark");

  React.useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  const toggleTheme = React.useCallback(() => {
    const current = getCurrentTheme();
    const next: Theme = current === "dark" ? "light" : "dark";
    persistTheme(next);
    setThemeState(next);
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className={cn("rounded-full border backdrop-blur-[14px] px-3 py-2.5")}
          style={{
            backgroundColor: "oklch(from var(--surface) l c h / 0.68)",
            borderColor: "oklch(from var(--border) l c h / 0.72)",
            boxShadow: "0 18px 60px oklch(0.02 0.01 265 / 0.20)",
          }}
        >
          <div className="flex items-center gap-2">
            {/* Mobile menu button only */}
            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border",
                "bg-surface/40 text-text/80 hover:text-text md:hidden",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
              )}
              aria-label="Open menu"
              onClick={onOpenMobileMenu}
            >
              <Menu className="h-4 w-4" />
            </button>

            <div className="min-w-0 px-1">
              <div className="truncate text-sm font-semibold tracking-tight text-text">{title}</div>
              <div className="truncate text-xs text-muted">Shockingly smooth UI</div>
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
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopPillBarEnhanced({ onOpenMobileMenu }: TopPillBarProps) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const title = titleFromPathname(pathname);

  const [theme, setThemeState] = React.useState<Theme>("dark");
  React.useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  const toggleTheme = React.useCallback(() => {
    const current = getCurrentTheme();
    const next: Theme = current === "dark" ? "light" : "dark";
    persistTheme(next);
    setThemeState(next);
  }, []);

  const { scrollY } = useScroll();
  const bgA = useTransform(scrollY, [0, 120], [0.7, 0.45]);
  const borderA = useTransform(scrollY, [0, 120], [0.75, 0.55]);
  const shadowA = useTransform(scrollY, [0, 120], [0.22, 0.14]);

  const backgroundColor = useTransform(bgA, (a) => `oklch(from var(--surface) l c h / ${a})`);
  const borderColor = useTransform(borderA, (a) => `oklch(from var(--border) l c h / ${a})`);
  const boxShadow = useTransform(shadowA, (a) => `0 18px 60px oklch(0.02 0.01 265 / ${a})`);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className={cn("rounded-full border backdrop-blur-[14px] px-3 py-2.5")}
          style={{ backgroundColor, borderColor, boxShadow }}
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border",
                "bg-surface/40 text-text/80 hover:text-text md:hidden",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
              )}
              aria-label="Open menu"
              onClick={onOpenMobileMenu}
            >
              <Menu className="h-4 w-4" />
            </button>

            <div className="min-w-0 px-1">
              <div className="truncate text-sm font-semibold tracking-tight text-text">{title}</div>
              <div className="truncate text-xs text-muted">Shockingly smooth UI</div>
            </div>

            <div className="ml-auto flex items-center gap-2">
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
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
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
