import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Home,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: "/" | "/about" | "/events" | "/team" | "/gallery" | "/contact" | "/entrepx";
  icon: LucideIcon;
  description?: string;
  featured?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/", icon: Home, description: "Overview" },
  { title: "Events", href: "/events", icon: CalendarDays, description: "Schedule" },
  { title: "Team", href: "/team", icon: Users, description: "People" },
  {
    title: "EntrepX",
    href: "/entrepx",
    icon: Sparkles,
    description: "Flagship event",
    featured: true,
  },
  { title: "Contact", href: "/contact", icon: Mail, description: "Get in touch" },
];

export const PRIMARY_NAV_ITEMS = NAV_ITEMS.filter((item) => item.href !== "/");

const TITLE_MAP: Record<NavItem["href"], string> = {
  "/": "Home",
  "/about": "About",
  "/events": "Events",
  "/team": "Team",
  "/gallery": "Gallery",
  "/entrepx": "EntrepX",
  "/contact": "Contact",
};

export function titleFromPathname(pathname: string): string {
  if (pathname === "/") return TITLE_MAP["/"];
  const seg = `/${pathname.split("/").filter(Boolean)[0]}` as NavItem["href"];
  return TITLE_MAP[seg] ?? "EIC";
}

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
