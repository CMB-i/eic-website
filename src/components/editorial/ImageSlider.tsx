"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  id: string;
  title: string;
  meta: string;
  caption: string;
};

export function ImageSlider({ slides }: { slides: readonly Slide[] }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const next = React.useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const previous = React.useCallback(() => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  React.useEffect(() => {
    const timer = window.setInterval(next, 4200);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <div className="grid gap-3">
      <div className="overflow-hidden rounded-[1.35rem]">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <article key={slide.id} className="min-w-full">
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_42%,rgba(0,0,0,0.14)_100%)] md:min-h-[420px]">
                <div className="absolute inset-x-6 top-6 text-[11px] uppercase tracking-[0.18em] text-white/66">
                  {slide.meta}
                </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,244,236,0.18),transparent_22%),radial-gradient(circle_at_78%_30%,rgba(255,194,132,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.26)_100%)]" />
                <div className="absolute inset-x-6 bottom-6">
                  <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {slide.title}
                  </div>
                  <p className="mt-2 max-w-[30ch] text-sm leading-7 text-white/76">{slide.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to ${slide.title}`}
              onClick={() => setActiveIndex(index)}
              className={
                index === activeIndex
                  ? "h-2.5 w-7 rounded-full bg-text transition-all"
                  : "h-2.5 w-2.5 rounded-full bg-border transition-all hover:bg-text/40"
              }
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white/86 transition-colors hover:bg-white/12"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white/86 transition-colors hover:bg-white/12"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
