"use client";

import Link from "next/link";

export function SectionNav({
  items,
}: {
  items: readonly { label: string; href: string }[];
}) {
  return (
    <section className="relative left-1/2 z-20 w-screen -translate-x-1/2 border-b border-border/60 bg-background/82 backdrop-blur-md">
      <div className="section-frame px-5 md:px-8 lg:px-10">
        <nav
          aria-label="EntrepX sections"
          className="flex gap-3 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex shrink-0 items-center rounded-full border border-border/55 bg-surface/72 px-4 py-2 text-sm text-text/84 transition-colors hover:bg-surface-elevated hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
