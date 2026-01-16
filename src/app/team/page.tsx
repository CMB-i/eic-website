import { Users } from "lucide-react";
import { team } from "@/data/team";
import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/ScrollReveal";
import { BentoCard } from "@/components/ui/BentoCard";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export default function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12">
      <section className="space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
            <Users className="h-3.5 w-3.5 text-accent" />
            Team
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <StaggerHeading
            as="h1"
            className="text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl"
            text="Builders behind the work."
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-muted md:text-base">
            Placeholder 
          </p>
        </ScrollReveal>
      </section>

      <section className="space-y-6">
        <HeaderKick title="Core team" subtitle="the skeleton of your cell" />
        <ScrollRevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.08}>
          {team.map((m) => (
            <ScrollReveal key={m.id}>
              <BentoCard>
                <div className="flex items-start gap-4">
                  <AvatarSeed seed={m.name} />
                  <div className="min-w-0">
                    <div className="truncate text-base font-semibold text-text">{m.name}</div>
                    <div className="mt-1 text-sm text-muted">{m.role}</div>
                    <div className="mt-3 text-sm leading-6 text-muted">{m.focus}</div>
                  </div>
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

function AvatarSeed({ seed }: { seed: string }) {
  const initials = seed
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-3xl border border-border bg-background/40">
      <span className="text-sm font-semibold text-text">{initials}</span>
    </div>
  );
}

