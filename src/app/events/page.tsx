import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { events } from "@/data/events";
import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/ScrollReveal";
import { BentoCard } from "@/components/ui/BentoCard";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export default function EventsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12">
      <section className="space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
            <CalendarDays className="h-3.5 w-3.5 text-accent" />
            Events
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <StaggerHeading
            as="h1"
            className="text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl"
            text="Momentum has a calendar."
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-muted md:text-base">
            Placeholder schedule. Replace with your real event pipeline: workshops, founder talks,
            build nights, and showcases.
          </p>
        </ScrollReveal>
      </section>

      <section className="space-y-6">
        <HeaderKick title="Upcoming" subtitle="Clean cards, clear hierarchy." />
        <ScrollRevealGroup className="grid gap-4 lg:grid-cols-3" staggerChildren={0.08}>
          {events.map((e) => (
            <ScrollReveal key={e.id}>
              <BentoCard>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/40 px-2 py-0.5">
                    {e.type}
                  </span>
                  <span className="truncate">{e.location}</span>
                </div>
                <div className="mt-3 text-base font-semibold text-text">{e.title}</div>
                <div className="mt-2 text-sm text-muted">{e.date}</div>
                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text/80 hover:text-text"
                  >
                    RSVP <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="text-xs text-muted">Placeholder</span>
                </div>
              </BentoCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </section>
    </div>
  );
}

function HeaderKick({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-semibold tracking-tight text-text">{title}</div>
      <div className="text-sm text-muted">{subtitle}</div>
    </div>
  );
}

// BentoCard is shared (`src/components/ui/BentoCard.tsx`).

