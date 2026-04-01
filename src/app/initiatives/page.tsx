import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EditorialPhoto } from "@/components/editorial/EditorialPhoto";
import { PageLeadImage } from "@/components/editorial/PageLeadImage";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { MagneticCTA } from "@/components/ui/MagneticCTA";

const INITIATIVE_FAMILIES = [
  {
    title: "Discovery formats",
    body: "Founder talks, open conversations, and problem discovery moments that help students sharpen their starting points.",
  },
  {
    title: "Build formats",
    body: "Working sessions, sprints, and initiative structures focused on prototypes, review cycles, and visible progress.",
  },
  {
    title: "Support formats",
    body: "Mentorship, collaborations, micro-grants, and ecosystem links that help work continue with more confidence.",
  },
] as const;

export default function InitiativesPage() {
  return (
    <div className="page-stack">
      <ScrollReveal>
        <section className="section-stack gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="section-stack gap-5">
              <div className="section-kicker">Initiatives</div>
              <h1 className="max-w-[12ch] text-balance text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
                Programs built for momentum.
              </h1>
              <p className="section-copy">
                EIC initiatives are the program layer of the ecosystem: repeatable formats that help
                students discover ideas, build with others, and keep showing up over time.
              </p>
            </div>

            <div className="meta-strip">
              <div className="meta-item">
                <div className="meta-label">Program logic</div>
                <div className="meta-value">{initiatives.length} initiatives create structured paths into the ecosystem.</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Why they matter</div>
                <div className="meta-value">They provide continuity between one-off events and longer-term student work.</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Who they serve</div>
                <div className="meta-value">Students at different stages, from first exploration to early venture building.</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <PageLeadImage
          title="Initiatives"
          meta="Program Layer"
          tone="warm"
          caption="Build Session · A wide page-entry banner that frames initiatives as a living program layer, not just a set of cards."
        />
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack">
          <SectionHeading
            label="Program Architecture"
            title="A mix of formats, each with a specific role."
            subtitle="A mature entrepreneurship ecosystem needs multiple kinds of entry points rather than a single flagship format."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {INITIATIVE_FAMILIES.map((family) => (
              <div key={family.title} className="border-l border-border/70 pl-4 md:pl-5">
                <div className="text-base font-semibold text-text">{family.title}</div>
                <p className="mt-3 text-sm leading-7 text-muted">{family.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack">
          <SectionHeading
            label="Featured Initiative"
            title={initiatives[0].title}
            subtitle="A placeholder editorial block for the most prominent initiative at a given moment in the year."
          />
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <EditorialPhoto
              title="Program Documentation"
              meta={initiatives[0].status}
              tone="warm"
              caption="Prototype Review · A future image slot for participants, mentors, and project work that gives this initiative a real institutional anchor."
            />
            <div className="border-l border-border/70 pl-5 md:pl-6">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                <span>{initiatives[0].status}</span>
                <span>·</span>
                <span>{initiatives[0].tag}</span>
              </div>
              <p className="mt-4 text-lg leading-8 text-text md:text-xl">{initiatives[0].blurb}</p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-text/80 hover:text-text"
                >
                  Get involved <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack">
          <SectionHeading
            label="All Initiatives"
            title="Current formats across the ecosystem."
            subtitle="Each block below should eventually connect to clearer program pages, application paths, or documentation."
          />
          <div className="grid gap-5">
            {initiatives.map((initiative) => (
              <div
                key={initiative.id}
                className="grid gap-4 border-t border-border/65 pt-5 lg:grid-cols-[0.34fr_0.66fr] lg:items-start"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                  <span>{initiative.status}</span>
                  <span>·</span>
                  <span>{initiative.tag}</span>
                </div>
                <div className="min-w-0">
                  <div className="truncate text-lg font-semibold text-text">{initiative.title}</div>
                  <p className="mt-2 max-w-[56ch] text-sm leading-7 text-muted">{initiative.blurb}</p>
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-text/80 hover:text-text"
                    >
                      Ask about this program <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/44 py-14">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[58ch]">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">Build with EIC</div>
                <div className="mt-3 text-2xl font-semibold text-text md:text-3xl">
                  Join an initiative or help shape the next one.
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Programs are strongest when they are informed by students, mentors, collaborators,
                  and real campus needs.
                </p>
              </div>
              <MagneticCTA href="/contact" className="accent-cta">
                Start a conversation
              </MagneticCTA>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
