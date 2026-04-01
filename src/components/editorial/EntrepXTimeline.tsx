"use client";

import * as React from "react";
import { Timeline, type TimelineItem } from "@/components/editorial/Timeline";

type TimelineDay = {
  id: string;
  label: string;
  title: string;
  intro: string;
  items: readonly TimelineItem[];
};

export function EntrepXTimeline({ days }: { days: readonly TimelineDay[] }) {
  const [activeDay, setActiveDay] = React.useState(days[0]?.id ?? "");
  const currentDay = days.find((day) => day.id === activeDay) ?? days[0];

  if (!currentDay) return null;

  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap gap-3">
        {days.map((day) => (
          <button
            key={day.id}
            type="button"
            onClick={() => setActiveDay(day.id)}
            className={
              day.id === activeDay
                ? "inline-flex h-11 items-center rounded-full bg-text px-5 text-sm font-medium text-background transition-colors"
                : "inline-flex h-11 items-center rounded-full border border-border bg-surface px-5 text-sm font-medium text-text/84 transition-colors hover:bg-surface-elevated hover:text-text"
            }
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="rounded-[1.75rem] border border-border/55 bg-surface/62 p-6 md:p-8">
        <div className="max-w-[40rem]">
          <div className="text-xs uppercase tracking-[0.18em] text-muted">{currentDay.label}</div>
          <div className="mt-3 text-2xl font-semibold tracking-tight text-text md:text-3xl">
            {currentDay.title}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">{currentDay.intro}</p>
        </div>

        <div className="mt-8">
          <Timeline items={currentDay.items} />
        </div>
      </div>
    </div>
  );
}
