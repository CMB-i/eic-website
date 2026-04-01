import * as React from "react";
import { EicMark } from "@/components/brand/EicMark";

export type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

export function Timeline({ items }: { items: readonly TimelineItem[] }) {
  return (
    <div className="relative pl-6 md:pl-8">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border/80 md:left-4" />
      <div className="grid gap-8">
        {items.map((item) => (
          <article key={`${item.year}-${item.title}`} className="relative grid gap-3 md:grid-cols-[110px_minmax(0,1fr)] md:gap-6">
            <div className="absolute -left-[1.05rem] top-1.5 md:-left-[1.32rem]">
              <EicMark size="sm" subtle />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted">{item.year}</div>
            <div className="border-t border-border/65 pt-4 md:pt-5">
              <div className="text-lg font-semibold text-text">{item.title}</div>
              <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
