import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BentoCard } from "./BentoCard";
import type { Person } from "@/data/team";

type TeamCardProps = {
  person: Person;
  size?: "default" | "large";
  className?: string;
};

export function TeamCard({ person, size = "default", className }: TeamCardProps) {
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("") || "?";

  const avatarSize = size === "large" ? "h-16 w-16 md:h-20 md:w-20" : "h-12 w-12";
  const textSize = size === "large" ? "text-base md:text-lg" : "text-sm md:text-base";

  return (
    <BentoCard className={cn("group", className)}>
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className={cn("shrink-0", avatarSize)}>
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              width={80}
              height={80}
              sizes={size === "large" ? "(min-width: 768px) 80px, 64px" : "48px"}
              className="h-full w-full rounded-full border border-border object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center rounded-full border border-border bg-background/40">
              <span
                className={cn(
                  "font-semibold text-text",
                  size === "large" ? "text-lg md:text-xl" : "text-sm md:text-base",
                )}
              >
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1 space-y-1.5">
          {/* Name */}
          <div className={cn("font-semibold tracking-tight text-text", textSize)}>
            {person.name}
          </div>

          {/* Role */}
          <div className="text-xs text-muted md:text-sm">{person.role}</div>

          {/* Domain tag */}
          {person.domain && (
            <div className="inline-flex items-center">
              <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[11px] font-medium text-muted md:text-xs">
                {person.domain}
              </span>
            </div>
          )}

          {/* Pillars */}
          {person.pillars.length > 0 && (
            <div className="text-xs leading-5 text-muted md:text-sm">
              {person.pillars.join(" · ")}
            </div>
          )}
        </div>
      </div>
    </BentoCard>
  );
}
