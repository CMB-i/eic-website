import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  GalleryHorizontalEnd,
  Home,
  Rocket,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: "/" | "/about" | "/initiatives" | "/events" | "/team" | "/gallery" | "/contact";
  icon: LucideIcon;
  description?: string;
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/", icon: Home, description: "Overview" },
  { title: "About", href: "/about", icon: Sparkles, description: "Mission & vision" },
  { title: "Initiatives", href: "/initiatives", icon: Rocket, description: "Programs" },
  { title: "Events", href: "/events", icon: CalendarDays, description: "Schedule" },
  { title: "Team", href: "/team", icon: Users, description: "People" },
  { title: "Gallery", href: "/gallery", icon: GalleryHorizontalEnd, description: "Highlights" },
  { title: "Contact", href: "/contact", icon: Mail, description: "Get in touch" },
];

const TITLE_MAP: Record<NavItem["href"], string> = {
  "/": "Home",
  "/about": "About",
  "/initiatives": "Initiatives",
  "/events": "Events",
  "/team": "Team",
  "/gallery": "Gallery",
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

