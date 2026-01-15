import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { initiatives } from "@/data/initiatives";
import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/ScrollReveal";
import { BentoCard } from "@/components/ui/BentoCard";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export default function InitiativesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12">
      <section className="space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
            <Rocket className="h-3.5 w-3.5 text-accent" />
            Initiatives
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <StaggerHeading
            as="h1"
            className="text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl"
            text="Programs built for momentum."
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-muted md:text-base">
            Placeholder programs. Replace descriptions and add real CTAs over time. The layout is
            designed for scalable content: tags, status, and clean bento grids.
          </p>
        </ScrollReveal>
      </section>

      <section className="space-y-6">
        <HeaderKick title="All initiatives" subtitle="Staggered reveal + hover lift + sheen." />
        <ScrollRevealGroup className="grid gap-4 md:grid-cols-2" staggerChildren={0.08}>
          {initiatives.map((i) => (
            <ScrollReveal key={i.id}>
              <BentoCard>
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-background/40">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="truncate text-base font-semibold text-text">{i.title}</div>
                      <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[11px] text-muted">
                        {i.status}
                      </span>
                      <span className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[11px] text-muted">
                        {i.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">{i.blurb}</p>
                    <div className="mt-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-text/80 hover:text-text"
                      >
                        Get involved <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
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

