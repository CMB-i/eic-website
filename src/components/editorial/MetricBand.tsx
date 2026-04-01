import * as React from "react";
import { cn } from "@/lib/utils";

type Metric = {
  value: string;
  label: string;
};

type MetricBandProps = {
  items: readonly Metric[];
  className?: string;
};

export function MetricBand({ items, className }: MetricBandProps) {
  return (
    <section
      className={cn(
        "border-y border-border/70 py-5",
        className,
      )}
    >
      <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              "flex items-end gap-4 xl:border-l xl:border-border/60 xl:pl-5",
              index === 0 && "xl:border-l-0 xl:pl-0",
            )}
          >
            <div>
              <div className="text-3xl font-semibold text-text md:text-4xl">{item.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
