import * as React from "react";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={cn("border-t border-border/65", className)}>
      {items.map((item, index) => (
        <details
          key={item.question}
          className={cn(
            "group py-5 md:py-6",
            index !== items.length - 1 && "border-b border-border/55",
          )}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
            <span className="max-w-[50rem] text-base font-semibold text-text md:text-lg">
              {item.question}
            </span>
            <span className="mt-1 text-sm text-muted transition-transform duration-200 ease-out group-open:rotate-90">
              →
            </span>
          </summary>
          <p className="mt-3 max-w-[60ch] text-sm leading-7 text-muted md:mt-4">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
