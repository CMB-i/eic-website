"use client";

import Image from "next/image";
import * as React from "react";

type Speaker = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export function SpeakerCarousel({
  speakers,
}: {
  speakers: readonly Speaker[];
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % speakers.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [speakers.length]);

  return (
    <div className="grid gap-5">
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:gap-6"
          style={{
            transform: `translateX(calc(-${activeIndex} * (248px + 1.25rem)))`,
          }}
        >
          {[...speakers, ...speakers].map((speaker, index) => (
            <article
              key={`${speaker.id}-${index}`}
              className="group w-[248px] shrink-0 overflow-hidden rounded-[1.55rem] border border-border/50 bg-background/72 transition-transform duration-300 hover:scale-[1.03] hover:bg-surface/82 md:w-[256px]"
            >
              <div className="relative aspect-[4/4.9] overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(min-width: 768px) 256px, 248px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.72)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-xl font-semibold tracking-tight text-white">
                    {speaker.name}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-white/76">{speaker.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {speakers.map((speaker, index) => (
          <button
            key={speaker.id}
            type="button"
            aria-label={`Go to ${speaker.name}`}
            onClick={() => setActiveIndex(index)}
            className={
              index === activeIndex
                ? "h-2.5 w-7 rounded-full bg-text transition-all"
                : "h-2.5 w-2.5 rounded-full bg-border transition-all hover:bg-text/40"
            }
          />
        ))}
      </div>
    </div>
  );
}
