import Link from "next/link";
import { EicMark } from "@/components/brand/EicMark";
import { PRIMARY_NAV_ITEMS } from "@/lib/nav";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/eic_mahindrauni/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eic-mu" },
  { label: "Email", href: "mailto:eic@mahindrauniversity.edu.in" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-20 md:mt-24">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-surface/55 dark:to-surface/28" />

      <div className="border-t border-border/60 bg-[linear-gradient(180deg,rgba(0,0,0,0.012),rgba(0,0,0,0.03))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.012),rgba(255,255,255,0.022))]">
        <div className="w-full px-6 py-14 md:px-10 md:py-16 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-4">
                <EicMark size="lg" />
                <div>
                  <div className="text-sm leading-6 font-semibold tracking-[0.16em] text-text/85">
                    ENTREPRENEURSHIP & INNOVATION CELL
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted">
                    Mahindra University
                  </div>
                </div>
              </div>
            </div>

            <FooterGroup title="Navigation">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.title}
                </FooterLink>
              ))}
            </FooterGroup>

            <FooterGroup title="Social">
              {SOCIAL_LINKS.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterGroup>

            <FooterGroup title="Contact">
              <ul className="space-y-3 text-sm leading-6">
                <li className="text-text/85">eic@mahindrauniversity.edu.in</li>
                <li className="text-text/85">+91 84128 73562</li>
                <li className="text-muted">
                  AIC Mahindra University, e-Hub Foundation Technology Center, TECH MAHINDRA,
                  Mahindra University, Hyderabad
                </li>
              </ul>
            </FooterGroup>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <div>© 2026 Entrepreneurship & Innovation Cell</div>

            <Link
              href="https://github.com/CMB-i/eic-website"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1 text-muted transition-colors hover:text-text"
            >
              <span>Built for campus innovation at Mahindra University</span>
              <span className="opacity-70 transition-opacity group-hover:opacity-100">
                ↗ source code
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="text-xs uppercase tracking-[0.18em] text-muted">{title}</div>
      <div className="mt-3 space-y-3 text-sm leading-6 text-text/85">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-sm leading-6 text-text/85 transition-colors hover:text-text"
    >
      {children}
    </Link>
  );
}