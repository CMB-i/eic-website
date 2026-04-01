"use client";

import Link from "next/link";
import { EicMark } from "@/components/brand/EicMark";
import { EicFlow } from "@/components/editorial/EicFlow";
import { FaqList } from "@/components/editorial/FaqList";
import { ImageSlider } from "@/components/editorial/ImageSlider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EditorialPhoto } from "@/components/editorial/EditorialPhoto";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { HeroSection } from "@/components/sections/hero-section";
import { MagneticCTA } from "@/components/ui/MagneticCTA";

const WHO_WE_ARE_POINTS = [
  {
    title: "Official and student-driven",
    body: "EIC Mahindra University is the official Entrepreneurship Cell of Mahindra University and a student-driven, non-profit organization committed to fostering entrepreneurship on campus.",
  },
  {
    title: "A bridge between ideas and execution",
    body: "We create a visible platform where students can move from curiosity to experimentation, and from early thinking to more grounded forms of action.",
  },
  {
    title: "Built for future innovators",
    body: "EIC helps students develop the mindset, skillset, and toolset needed to become builders, leaders, and changemakers who can create meaningful impact.",
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

const JOURNEY_FLOW = [
  {
    title: "Discover",
    body: "Explore problems, startup stories, and possible starting points.",
  },
  {
    title: "Build",
    body: "Work with others, prototype ideas, and test them seriously.",
  },
  {
    title: "Launch",
    body: "Share work publicly through demos, reviews, and visible outcomes.",
  },
] as const;

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

const PILLARS = [
  {
    title: "Action over discussion",
    body: "Students test ideas, not just talk about them.",
  },
  {
    title: "Collaboration across disciplines",
    body: "Engineering, design, and business work together.",
  },
  {
    title: "Public visibility",
    body: "Work is shared, reviewed, and seen on campus.",
  },
  {
    title: "Continuous momentum",
    body: "Students return, build, and grow over time.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "How can I join?",
    answer:
      "You can join EIC by participating in events, responding to recruitment calls, or reaching out directly through the contact page to express interest.",
  },
  {
    question: "Do I need a startup idea?",
    answer:
      "No. Students can enter with a startup idea, an early problem statement, or simply curiosity about entrepreneurship and innovation.",
  },
  {
    question: "Are first-years allowed?",
    answer:
      "Yes. First-year students are welcome to attend sessions, participate in activities, and become part of the community from the start of their campus journey.",
  },
  {
    question: "Is it open to all branches?",
    answer:
      "Yes. EIC is open across branches and disciplines because meaningful entrepreneurial work benefits from technical, creative, and operational perspectives together.",
  },
  {
    question: "Are events open and free to attend?",
    answer:
      "Yes, most EIC events are open and free unless a specific collaboration or format states otherwise in advance.",
  },
] as const;

const SHOWCASE_SLIDES = [
  {
    id: "student-demo",
    title: "Student demos",
    meta: "Showcase",
    caption:
      "A space for projects, prototypes, and startup ideas to be seen, discussed, and remembered.",
  },
  {
    id: "prototype-review",
    title: "Prototype reviews",
    meta: "Working Session",
    caption:
      "Work becomes stronger when it is reviewed in public and carried forward through feedback.",
  },
  {
    id: "campus-outcomes",
    title: "Visible outcomes",
    meta: "Campus Record",
    caption:
      "The platform is strongest when student effort leaves a footprint others can encounter and build on.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="page-stack page-stack--flush">
      <HeroSection />

      <ScrollReveal>
        <section className="section-stack">
          <SectionHeading
            label="Who We Are"
            title="A student-driven platform for entrepreneurial thinking, practical work, and campus-wide momentum."
            subtitle="EIC Mahindra University is the official Entrepreneurship Cell of Mahindra University: a non-profit student platform built to foster entrepreneurship on campus and bridge the gap between ideas and execution."
          />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              {WHO_WE_ARE_POINTS.map((item) => (
                <div key={item.title} className="border-t border-border/65 pt-5">
                  <div className="text-lg font-semibold text-text">{item.title}</div>
                  <p className="mt-2 max-w-[50ch] text-sm leading-7 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
            <EditorialPhoto
              title="Who We Are"
              meta="Campus Platform"
              tone="neutral"
              caption="A student-led platform where entrepreneurial thinking becomes practical through people, activity, and a culture of trying things seriously."
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack items-center text-center">
          <div className="w-full max-w-[56rem] rounded-[2rem] bg-surface/64 px-7 py-10 md:px-12 md:py-14">
            <div className="text-xs uppercase tracking-[0.18em] text-muted">Core statement</div>
            <p className="mx-auto mt-5 max-w-[30ch] text-xl font-medium leading-9 text-text/94 md:text-[1.55rem] md:leading-10">
              Entrepreneurship goes beyond starting a business. It is about identifying
              challenges, thinking creatively, and building meaningful solutions that create
              impact.
            </p>
            <p className="mx-auto mt-5 max-w-[42ch] text-sm leading-7 text-muted">
              EIC gives that mindset a visible place on campus by making innovation more
              collaborative, practical, and reachable.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/44 py-16">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div className="space-y-5">
                <SectionHeading
                  label="What We Do"
                  title="We create opportunities for students to experience the entrepreneurial journey firsthand."
                  subtitle="The work is less about presenting entrepreneurship as an idea and more about making it something students can step into, test, and participate in directly."
                />
                <p className="max-w-[56ch] text-sm leading-7 text-muted">
                  At EIC, we create opportunities for students to explore and experience the
                  entrepreneurial journey firsthand. Through a diverse range of initiatives such as
                  hackathons, speaker sessions, business simulation games, panel discussions,
                  seminars, networking events, and industrial visits, we introduce students to the
                  many facets of the startup and business ecosystem.
                </p>
                <p className="max-w-[56ch] text-sm leading-7 text-muted">
                  Through every event and initiative, our mission remains the same: to cultivate an
                  entrepreneurial culture at Mahindra University and help students transform ideas
                  into action.
                </p>
              </div>

              <div className="grid gap-8">
                <EditorialPhoto
                  title="What We Do"
                  meta="Active Formats"
                  tone="warm"
                  caption="Sessions, simulations, networking, and hands-on formats should make EIC activity feel active rather than abstract."
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  {EXPERIENCE_FORMATS.map((item, index) => (
                    <div
                      key={item}
                      className={
                        index === 0
                          ? "border-t border-border/60 pt-4 sm:col-span-2"
                          : "border-t border-border/60 pt-4"
                      }
                    >
                      <div className="text-base font-semibold text-text">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 border-y border-border/45 bg-[linear-gradient(135deg,oklch(0.2_0.018_292),oklch(0.25_0.026_320)_42%,oklch(0.31_0.05_28)_100%)] py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_82%_26%,rgba(255,191,131,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.01),rgba(0,0,0,0.26)_100%)]" />
          <div className="section-frame relative px-5 md:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-end">
              <div className="space-y-5">
                <div className="text-xs uppercase tracking-[0.18em] text-white/72">
                  Flagship Event
                </div>
                <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  ENTREPX
                </h2>
                <p className="max-w-[44ch] text-sm leading-7 text-white/84">
                  One of the university&apos;s most prominent entrepreneurship platforms, bringing
                  together founders, investors, industry experts, and aspiring entrepreneurs.
                </p>
              </div>

              <div className="space-y-5 lg:justify-self-end lg:text-right">
                <p className="max-w-[42ch] text-base leading-8 text-white/88 lg:ml-auto">
                  With speaker series, startup showcases, business idea competitions, and
                  interactive networking sessions, ENTREPX serves as a space for learning,
                  collaboration, and inspiration.
                </p>
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/72">
                  Happening next week
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <MagneticCTA href="/entrepx" className="accent-cta">
                    Explore ENTREPX
                  </MagneticCTA>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/42 py-16">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div className="section-stack gap-5 lg:sticky lg:top-28">
                <SectionHeading
                  label="From Curiosity to Creation"
                  title="A structured journey for student founders."
                  subtitle="At EIC, we do not just inspire ideas. We help students build, test, and launch them through a structured journey designed for student founders."
                />
                <p className="max-w-[48ch] text-sm leading-7 text-muted">
                  The path is not rigid, but it gives students a real sequence: discover what
                  matters, build with intent, review honestly, showcase publicly, and let the
                  strongest work keep growing.
                </p>
                <EicFlow steps={JOURNEY_FLOW} className="max-w-[34rem] pt-2" />
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
        <section className="section-stack">
          <SectionHeading
            label="The Four Principles"
            title="Built on four principles"
            subtitle="A quieter definition of the platform through structure, discipline, and the kind of student culture it is trying to sustain."
          />
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 hidden border-b border-border/45 xl:block" />
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
              {PILLARS.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="group relative min-h-[16rem] border-l border-border/55 pl-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-text/20"
                >
                  <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted/78 transition-colors duration-200 group-hover:text-muted">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <h3 className="mt-5 max-w-[12ch] text-xl font-semibold tracking-tight text-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-[24ch] text-sm leading-7 text-muted">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/44 py-16">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="grid gap-10 border-y border-border/45 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                  <EicMark size="sm" subtle />
                  Pitch Your Idea
                </div>
                <h2 className="max-w-[13ch] text-3xl font-semibold text-text md:text-4xl">
                  You do not need a finished idea. You just need to start.
                </h2>
                <p className="max-w-[52ch] text-sm leading-7 text-muted">
                  Students can approach EIC with an early concept, a rough problem statement, or a
                  question they want to explore more seriously.
                </p>
              </div>
              <div className="space-y-6 lg:pl-10">
                <div className="grid gap-5">
                  <div className="border-l border-border/65 pl-4 md:pl-5">
                    <div className="text-sm font-semibold text-text">Early-stage ideas are enough</div>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      The first step can simply be bringing something unfinished into conversation.
                    </p>
                  </div>
                  <div className="border-l border-border/65 pl-4 md:pl-5">
                    <div className="text-sm font-semibold text-text">Questions are welcome too</div>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      A challenge worth solving can be as valuable a starting point as a polished
                      pitch.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <MagneticCTA href="/contact" className="accent-cta">
                    Pitch to EIC
                  </MagneticCTA>
                  <Link
                    href="/events"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background/40 px-5 text-sm font-medium text-text/85 transition-colors hover:bg-surface-elevated hover:text-text"
                  >
                    See What&apos;s Happening
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              label="FAQ"
              title="Common questions from students."
              subtitle="A quieter guidance section for students who want to understand how EIC works before stepping in."
            />
            <FaqList items={FAQ_ITEMS} className="max-w-[52rem]" />
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
