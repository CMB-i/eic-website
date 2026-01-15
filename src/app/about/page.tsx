import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12">
      <section className="space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            About EIC
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StaggerHeading
            as="h1"
            className="text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl"
            text="Entrepreneurship & Innovation Cell (EIC)"
          />
        </ScrollReveal>

        <ScrollReveal>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-muted md:text-base">
            Placeholder content. Replace with your real story: mission, vision, and the culture you
            want to build. This template is engineered for premium motion and a clean, scalable
            layout system.
          </p>
        </ScrollReveal>
      </section>

      <section className="space-y-6">
        <HeaderKick title="Mission / Vision" subtitle="Two pillars. One direction." />
        <ScrollRevealGroup className="grid gap-4 md:grid-cols-2">
          <ScrollReveal>
            <BentoCard>
              <div className="text-base font-semibold text-text">Mission</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Enable student founders to ship real products—fast feedback loops, mentor support,
                and a builder-first community.
              </p>
            </BentoCard>
          </ScrollReveal>
          <ScrollReveal>
            <BentoCard>
              <div className="text-base font-semibold text-text">Vision</div>
              <p className="mt-2 text-sm leading-6 text-muted">
                A campus where innovation is a habit: prototypes are routine, collaboration is
                natural, and ideas scale into impact.
              </p>
            </BentoCard>
          </ScrollReveal>
        </ScrollRevealGroup>
      </section>

      <section className="space-y-6">
        <HeaderKick title="What we do" subtitle="Bento cards that scale with real content." />
        <ScrollRevealGroup className="grid gap-4 lg:grid-cols-3" staggerChildren={0.08}>
          {[
            {
              title: "Programs",
              body: "Initiatives that guide members from curiosity → prototypes → launches.",
            },
            { title: "Events", body: "Workshops, talks, and demo nights that keep momentum alive." },
            { title: "Community", body: "A high-trust builder network with repeatable rituals." },
          ].map((x) => (
            <ScrollReveal key={x.title}>
              <BentoCard>
                <div className="text-base font-semibold text-text">{x.title}</div>
                <p className="mt-2 text-sm leading-6 text-muted">{x.body}</p>
              </BentoCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </section>

      <section className="space-y-4">
        <ScrollReveal>
          <div className="rounded-4xl border border-border bg-surface p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-base font-semibold text-text">Ready to collaborate?</div>
                <div className="mt-1 text-sm text-muted">
                  Placeholder CTA — wire to real forms later.
                </div>
              </div>
              <MagneticCTA
                href="/contact"
                className={cn(
                  "bg-accent text-accent-foreground",
                  "shadow-[0_12px_40px_rgba(255,219,102,0.22)]",
                )}
              >
                Contact <ArrowRight className="h-4 w-4" />
              </MagneticCTA>
            </div>
          </div>
        </ScrollReveal>
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

// BentoCard is now shared (`src/components/ui/BentoCard.tsx`) for consistent sheen/hover.

