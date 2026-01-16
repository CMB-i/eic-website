"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { initiatives } from "@/data/initiatives";
import { events } from "@/data/events";
import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/ScrollReveal";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export default function HomePage() {
  const reduced = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12">
      <section
        className={cn(
          "relative overflow-hidden rounded-4xl border border-border bg-surface",
          "px-6 py-10 md:px-10 md:py-12",
        )}
      >
        {/* Subtle gradient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-28 h-96 w-96 rounded-full bg-accent/12 blur-3xl" />
          <div className="absolute -bottom-32 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[oklch(0.7_0.15_260_/_10%)] blur-3xl" />
          <div className="absolute -right-28 top-8 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        </div>

        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <div>
              <StaggerHeading
                as="h1"
                delay={0}
                className="text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl"
                text="Build. Learn. Launch. Together."
              />

              <p className="mt-6 max-w-prose text-pretty text-sm leading-6 text-muted md:text-base">
                A premium, futuristic template for EIC—designed for shockingly smooth motion, clean
                content structure, and a signature 3D hero that degrades gracefully.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticCTA
                  href="/initiatives"
                  className={cn(
                    "bg-accent text-accent-foreground",
                    "shadow-[0_12px_40px_rgba(255,219,102,0.22)]",
                  )}
                >
                  Explore Initiatives
                  <ArrowRight className="h-4 w-4" />
                </MagneticCTA>

                <Link
                  href="/events"
                  className={cn(
                    "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border",
                    "bg-background/40 px-5 text-sm font-medium text-text/85 hover:text-text",
                    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
                  )}
                >
                  View Events
                  <CalendarDays className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <Stat k="Workshops" v="12+" />
              <Stat k="Build Nights" v="8+" />
              <Stat k="Mentors" v="20+" />
            </div>
          </div>

          {/* Hero visual (lightweight, SSR-safe) */}
          <div className="relative">
            <div className="absolute inset-0 rounded-4xl ring-1 ring-glow/20" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl border border-border bg-background/40">
              <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_50%,oklch(from_var(--accent)_l_c_h_/_15%),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_30%,oklch(0.7_0.15_260_/_12%),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_80%_70%,oklch(from_var(--accent)_l_c_h_/_10%),transparent_50%)]" />
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="space-y-6">
        <HeaderKick title="Three pillars" subtitle="Clarity, cadence, community." />
        <ScrollRevealGroup className="grid gap-4 md:grid-cols-3" staggerChildren={0.1}>
          {[
            {
              t: "Ideation",
              b: "Workshops and founder talks that turn curiosity into direction.",
            },
            {
              t: "Build",
              b: "Mentorship, team formation, and prototypes shipped fast.",
            },
            {
              t: "Launch",
              b: "Demo days, pitch nights, partnerships, and real outcomes.",
            },
          ].map((x) => (
            <ScrollReveal key={x.t}>
              <BentoCard>
                <div className="text-base font-semibold text-text">{x.t}</div>
                <p className="mt-2 text-sm leading-6 text-muted">{x.b}</p>
              </BentoCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </section>

      {/* Journey narrative (lightweight, SSR-safe) */}
      <section className="space-y-6">
        <HeaderKick title="From idea to launch" subtitle="Three steps to real outcomes." />
        <ScrollRevealGroup className="grid gap-4 md:grid-cols-3" staggerChildren={0.1}>
          {[
            {
              title: "Ideation",
              body: "Workshops, founder talks, and problems worth solving—fast clarity, low friction.",
            },
            {
              title: "Build",
              body: "Mentorship, team formation, and prototypes that ship. Less slideware, more demos.",
            },
            {
              title: "Launch",
              body: "Demo days, pitch nights, partnerships—momentum that turns into outcomes.",
            },
          ].map((step) => (
            <ScrollReveal key={step.title}>
              <BentoCard>
                <div className="text-xs font-medium text-muted">From idea to launch</div>
                <div className="mt-3 text-xl font-semibold tracking-tight text-text md:text-2xl">
                  {step.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted md:text-base">{step.body}</p>
              </BentoCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </section>

      <section className="space-y-6">
        <HeaderKick title="Featured Initiatives" subtitle="Bento layout + staggered reveal." />

        <ScrollRevealGroup className="grid gap-4 md:grid-cols-2">
          {initiatives.slice(0, 4).map((i) => (
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
                  </div>
                </div>
              </BentoCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </section>

      <section className="space-y-6">
        <HeaderKick title="Upcoming Events" subtitle="Lightweight motion. No jank." />
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
                <div className="mt-5">
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text/80 hover:text-text"
                  >
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </BentoCard>
            </ScrollReveal>
          ))}
        </ScrollRevealGroup>
      </section>

      {/* Final CTA (scale-in emphasis) */}
      <section className="space-y-6">
        <ScrollReveal>
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduced ? 0.22 : 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-4xl border border-border bg-surface p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-base font-semibold text-text">Join EIC</div>
                <div className="mt-1 text-sm text-muted">
                  Placeholder CTA — wire to real onboarding later.
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
          </motion.div>
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

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-3xl border border-border bg-background/40 px-4 py-3">
      <div className="text-sm font-semibold text-text">{v}</div>
      <div className="text-xs text-muted">{k}</div>
    </div>
  );
}

