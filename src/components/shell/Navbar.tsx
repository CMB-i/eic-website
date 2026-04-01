"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { isActivePath, PRIMARY_NAV_ITEMS } from "@/lib/nav";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { ThemeToggle } from "./ThemeToggle";
import { EicMark } from "@/components/brand/EicMark";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const menuId = React.useId();
  const usesDarkHeroTopState = pathname === "/" || pathname.startsWith("/entrepx");
  const isDarkTopState = usesDarkHeroTopState && !isScrolled;

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const updateState = () =>
      setIsScrolled((current) => {
        const y = window.scrollY;
        if (current) return y > 18;
        return y > 52;
      });
    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    return () => window.removeEventListener("scroll", updateState);
  }, []);

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const shellStyle = isScrolled
    ? {
        backgroundColor: "var(--nav-scrolled-bg)",
        borderColor: "var(--nav-scrolled-border)",
        boxShadow: "var(--nav-scrolled-shadow)",
        backdropFilter: "blur(8px)",
      }
    : isDarkTopState
      ? {
          backgroundColor: "color-mix(in srgb, black 18%, transparent)",
          borderColor: "color-mix(in srgb, white 10%, transparent)",
          boxShadow: "0 8px 24px oklch(0.12 0.01 280 / 0.06)",
          backdropFilter: "blur(9px)",
        }
      : {
          backgroundColor: "var(--nav-top-bg)",
          borderColor: "var(--nav-top-border)",
          boxShadow: "var(--nav-top-shadow)",
          backdropFilter: "blur(7px)",
        };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto transition-[max-width,border-radius] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isScrolled ? "max-w-[72rem]" : "max-w-none",
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center gap-4 border px-3 transition-[background-color,border-color,box-shadow,border-radius,backdrop-filter] duration-560 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-4",
            isScrolled ? "rounded-2xl" : "rounded-[1rem]",
          )}
          style={shellStyle}
        >
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-full px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60"
            aria-label="EIC home"
          >
            <EicMark size="md" />
            <span className="min-w-0">
              <span
                className={cn(
                  "block truncate text-sm font-semibold tracking-[0.16em]",
                  isDarkTopState ? "text-white" : "text-text",
                )}
              >
                ENTREPRENEURSHIP & INNOVATION CELL
              </span>
              <span
                className={cn(
                  "block truncate text-[11px] uppercase tracking-[0.22em]",
                  isDarkTopState ? "text-white/62" : "text-muted",
                )}
              >
                Mahindra University
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
            {PRIMARY_NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/40",
                    item.featured && "font-medium tracking-[0.01em]",
                    isDarkTopState && active && item.featured && "bg-white/10 text-accent",
                    isDarkTopState && active && !item.featured && "bg-white/10 text-white",
                    isDarkTopState && !active && item.featured && "text-accent/90 hover:text-accent",
                    isDarkTopState && !active && !item.featured && "text-white/72 hover:text-white",
                    !isDarkTopState && active && item.featured && "bg-surface text-accent",
                    !isDarkTopState && active && !item.featured && "bg-surface text-text",
                    !isDarkTopState && !active && item.featured && "text-accent/88 hover:text-accent",
                    !isDarkTopState && !active && !item.featured && "text-muted hover:text-text",
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <MagneticCTA href="https://forms.office.com/r/Bbj4A1H4Xr" className="accent-cta">
              Register for EntrepX
            </MagneticCTA>
          </div>

          <button
            type="button"
            className={cn(
              "ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              isDarkTopState
                ? "border-white/12 bg-white/6 text-white"
                : "border border-border bg-surface text-text",
              "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/40",
            )}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {menuOpen ? (
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="mt-3 rounded-2xl border border-border bg-surface p-4 shadow-[0_10px_28px_oklch(0.12_0.01_280_/_0.08)] lg:hidden"
          >
            <nav aria-label="Mobile" className="space-y-1">
              {PRIMARY_NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/40",
                      item.featured && "font-medium",
                      active && item.featured && "bg-surface-elevated text-accent",
                      active && !item.featured && "bg-surface-elevated text-text",
                      !active && item.featured && "text-accent/88 hover:bg-surface-elevated hover:text-accent",
                      !active && !item.featured && "text-muted hover:bg-surface-elevated hover:text-text",
                    )}
                  >
                    <span>{item.title}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted/80">
                      {item.description}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-4">
              <ThemeToggle />
              <MagneticCTA href="/contact" className="accent-cta">
                Get Involved
              </MagneticCTA>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
