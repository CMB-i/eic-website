import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type EicMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  subtle?: boolean;
};

const SIZE_CLASSES = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
} as const;

export function EicMark({ className, size = "md", subtle = false }: EicMarkProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        SIZE_CLASSES[size],
        subtle ? "opacity-88" : "opacity-100",
        className,
      )}
    >
      <Image
        src="/images/brand/logo.png"
        alt="EIC Mahindra University"
        fill
        sizes={
          size === "lg"
            ? "48px"
            : size === "md"
              ? "40px"
              : "32px"
        }
        className={cn(
          "object-contain",
          subtle
            ? "brightness-[0.98] contrast-[1.02] dark:brightness-[1.06] dark:contrast-[1.04]"
            : "dark:brightness-[1.06] dark:contrast-[1.04]",
        )}
      />
    </span>
  );
}
