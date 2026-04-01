"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import type { Person } from "@/data/team";

type TeamProfileCardProps = {
  person: Person;
  className?: string;
  priority?: boolean;
  size?: "default" | "large";
  muted?: boolean;
};

export function TeamProfileCard({
  person,
  className,
  priority,
  size = "default",
  muted = false,
}: TeamProfileCardProps) {
  const details = [person.domain, person.pillars[0], person.contribution].filter(Boolean);

  return (
    <article
      className={cn(
        "group relative mx-auto w-full overflow-hidden rounded-[1.5rem] bg-surface-elevated ring-1 ring-border/55",
        size === "large" ? "max-w-[17.75rem]" : "max-w-[15.5rem]",
        muted && "opacity-85",
        className,
      )}
    >
      <div className={cn("relative", size === "large" ? "aspect-[4/4.15]" : "aspect-[3/3.55]")}>
        <Image
          src={person.image ?? "/placeholders/portrait-stone.svg"}
          alt={person.name}
          fill
          priority={priority}
          sizes={
            size === "large"
              ? "(min-width: 1280px) 17.75rem, (min-width: 768px) 16rem, 100vw"
              : "(min-width: 1280px) 15.5rem, (min-width: 768px) 14rem, 100vw"
          }
          className={cn(
            "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]",
            muted && "grayscale-[0.18] saturate-[0.82]",
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.72)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="space-y-1 text-white">
            <div className="text-base font-semibold">{person.name}</div>
            <div className="text-sm text-white/74">{person.role}</div>
          </div>

          <div className="mt-3 overflow-hidden">
            <div className="translate-y-2 opacity-0 transition-all duration-[280ms] ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="border-t border-white/18 pt-3 text-sm text-white/78">
                {details.map((item, index) => (
                  <div key={`${item}-${index}`} className="leading-5">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
