import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EditorialPhoto } from "@/components/editorial/EditorialPhoto";
import { PageLeadImage } from "@/components/editorial/PageLeadImage";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { MagneticCTA } from "@/components/ui/MagneticCTA";

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Discover",
    body: "Explore real-world problems, startup stories, and emerging ideas through talks, hackathons, and peer discussions. This is where curiosity turns into intent.",
  },
  {
    number: "02",
    title: "Build",
    body: "Turn ideas into action through hands-on sessions, team collaboration, and rapid prototyping. Experiment, fail fast, and iterate.",
  },
  {
    number: "03",
    title: "Review",
    body: "Get feedback from mentors, peers, and experienced builders. Refine your ideas through critique, validation, and iteration.",
  },
  {
    number: "04",
    title: "Showcase",
    body: "Present your work through demo days, Eureka evenings, and public platforms. Gain visibility, confidence, and recognition.",
  },
  {
    number: "05",
    title: "Grow",
    body: "The strongest ideas evolve into ventures, collaborations, and long-term opportunities within the ecosystem.",
  },
] as const;

const EXPERIENCE_FORMATS = [
  "Hackathons",
  "Speaker sessions",
  "Business simulation games",
  "Panel discussions",
  "Seminars",
  "Networking events",
  "Industrial visits",
] as const;

export default function AboutPage() {
  return (
    <div className="page-stack">
      <ScrollReveal>
        <section className="section-stack gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
            <div className="section-stack gap-5">
              <div className="section-kicker">About EIC</div>
              <h1 className="max-w-[12ch] text-balance text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
                A student-led platform for building ideas into action.
              </h1>
              <p className="section-copy max-w-[60ch]">
                EIC Mahindra University gives entrepreneurial thinking a visible place on campus:
                a platform where students can explore ideas, find collaborators, test work, and
                move from curiosity to meaningful execution.
              </p>
            </div>

            <div className="meta-strip">
              <div className="meta-item">
                <div className="meta-label">Institutional role</div>
                <div className="meta-value">
                  The official Entrepreneurship Cell of Mahindra University.
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Built for</div>
                <div className="meta-value">
                  Students who want to build, test, present, and keep working on ideas.
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Campus character</div>
                <div className="meta-value">
                  Student-driven in energy, structured in purpose, and outward-facing in action.
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <PageLeadImage
          title="About EIC"
          meta="Mahindra University"
          tone="neutral"
          caption="An institutional view of the platform: student-led in execution, grounded in purpose, and built to make entrepreneurial work more real on campus."
        />
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/42 py-16">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="section-stack gap-5 lg:sticky lg:top-28">
                <SectionHeading
                  label="From Curiosity to Creation"
                  title="A structured journey for student founders."
                  subtitle="At EIC, we do not just inspire ideas. We help students build, test, and launch them through a pathway designed for early founders and serious builders."
                />
                <p className="max-w-[48ch] text-sm leading-7 text-muted">
                  The journey is not rigid, but it gives students a clear progression: discover
                  what matters, build with intent, review honestly, showcase publicly, and keep the
                  strongest work moving.
                </p>
              </div>

              <div className="relative pl-8 md:pl-10">
                <div className="absolute bottom-4 left-2 top-2 w-px bg-border/70 md:left-3" />
                <div className="grid gap-10">
                  {JOURNEY_STEPS.map((step, index) => (
                    <article
                      key={step.title}
                      className="relative grid gap-3 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6"
                    >
                      <div className="absolute left-0 top-1.5 md:left-0">
                        <div className="h-5 w-5 rounded-full border border-border/80 bg-background" />
                        <div className="absolute inset-[6px] rounded-full bg-text/80" />
                      </div>
                      <div className="pl-8 text-[11px] font-medium uppercase tracking-[0.22em] text-muted md:pl-0">
                        {step.number}
                      </div>
                      <div
                        className={
                          index === JOURNEY_STEPS.length - 1
                            ? "pl-8 md:pl-0"
                            : "border-t border-border/60 pl-8 pt-4 md:pl-0 md:pt-5"
                        }
                      >
                        <h3 className="text-2xl font-semibold tracking-tight text-text">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-[50ch] text-sm leading-7 text-muted">
                          {step.body}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack gap-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                label="Who We Are"
                title="Bridging the gap between ideas and execution."
                subtitle="EIC Mahindra University is the official Entrepreneurship Cell of Mahindra University and a student-driven, non-profit organization committed to fostering the spirit of entrepreneurship on campus."
              />
              <div className="space-y-5">
                <p className="max-w-[58ch] text-sm leading-7 text-muted">
                  We are a community of passionate students who aim to bridge the gap between ideas
                  and execution by inspiring innovation, encouraging problem-solving, and nurturing
                  an entrepreneurial mindset.
                </p>
                <p className="max-w-[58ch] text-sm leading-7 text-muted">
                  We believe entrepreneurship goes beyond starting a business. It is about
                  identifying challenges, thinking creatively, and building meaningful solutions
                  that create impact. At EIC, we strive to empower students with the mindset,
                  skillset, and toolset needed to become future innovators, leaders, and
                  changemakers.
                </p>
              </div>
            </div>

            <div className="border-l border-border/65 pl-5 md:pl-6">
              <div className="text-xs uppercase tracking-[0.18em] text-muted">
                Foundational idea
              </div>
              <p className="mt-4 max-w-[34ch] text-2xl font-semibold leading-tight text-text md:text-3xl">
                Entrepreneurship on campus should feel practical, collaborative, and reachable.
              </p>
              <p className="mt-4 max-w-[42ch] text-sm leading-7 text-muted">
                EIC exists to make that possible through a visible student platform that encourages
                experimentation instead of passive observation.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <div className="space-y-5">
              <SectionHeading
                label="What We Do"
                title="We create real entry points into the entrepreneurial journey."
                subtitle="Through recurring formats, public-facing events, and structured opportunities, students encounter the startup and business ecosystem firsthand."
              />
              <p className="max-w-[56ch] text-sm leading-7 text-muted">
                At EIC, students explore entrepreneurship through hackathons, speaker sessions,
                business simulation games, panel discussions, seminars, networking events, and
                industrial visits. The goal is not only exposure, but participation.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {EXPERIENCE_FORMATS.map((item) => (
                  <div key={item} className="border-t border-border/60 pt-4">
                    <div className="text-base font-semibold text-text">{item}</div>
                  </div>
                ))}
              </div>

              <div className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/46 py-10 lg:left-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:py-0">
                <div className="section-frame px-5 md:px-8 lg:px-0">
                  <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
                    <div className="border-l border-border/70 pl-5 md:pl-6">
                      <div className="text-xs uppercase tracking-[0.18em] text-muted">
                        Flagship platform
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text md:text-3xl">
                        ENTREPX
                      </h3>
                      <p className="mt-4 max-w-[48ch] text-sm leading-7 text-muted">
                        Our flagship event, the ENTREPX, is one of the university&apos;s most
                        prominent entrepreneurship platforms, bringing together founders, investors,
                        industry experts, and aspiring entrepreneurs.
                      </p>
                      <p className="mt-4 max-w-[48ch] text-sm leading-7 text-muted">
                        With speaker series, startup showcases, business idea competitions, and
                        interactive networking sessions, ENTREPX creates a visible space for
                        learning, collaboration, and inspiration.
                      </p>
                    </div>

                    <EditorialPhoto
                      title="ENTREPX"
                      meta="Flagship Event"
                      tone="warm"
                      caption="A flagship moment where entrepreneurial ambition becomes public: founders, ideas, showcases, and conversations gathered into one campus platform."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2">
          <div className="relative min-h-[420px] overflow-hidden border-y border-border/45 bg-[linear-gradient(135deg,oklch(0.98_0.01_95),oklch(0.94_0.03_58)_36%,oklch(0.84_0.06_30)_100%)] dark:bg-[linear-gradient(135deg,oklch(0.2_0.015_288),oklch(0.27_0.03_18)_42%,oklch(0.34_0.05_28)_100%)] md:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.42),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.34)_100%)] dark:bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.48)_100%)]" />
            <div className="section-frame relative flex min-h-[420px] items-end px-5 pb-8 md:min-h-[520px] md:px-8 md:pb-10 lg:px-10">
              <div className="max-w-[40rem]">
                <div className="text-xs uppercase tracking-[0.18em] text-white/72 dark:text-white/68">
                  Working Session
                </div>
                <div className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  The platform matters most when it becomes something students can actually feel.
                </div>
                <p className="mt-3 max-w-[34rem] text-sm leading-7 text-white/86">
                  A workshop, founder conversation, or review session is where EIC stops being an
                  abstract idea and starts becoming a lived campus experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/42 py-14">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[52ch]">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">Next step</div>
                <div className="mt-3 text-2xl font-semibold text-text md:text-3xl">
                  Join the community, explore the initiatives, and begin building.
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <MagneticCTA href="/contact" className="accent-cta">
                  Join EIC
                </MagneticCTA>
                <Link
                  href="/events"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-5 text-sm font-medium text-text/85 transition-colors hover:bg-surface-elevated hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60"
                >
                  Explore Events <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
