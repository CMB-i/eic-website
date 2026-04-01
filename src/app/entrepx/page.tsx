import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EntrepXTimeline } from "@/components/editorial/EntrepXTimeline";
import { ImageSlider } from "@/components/editorial/ImageSlider";
import { SectionNav } from "@/components/editorial/SectionNav";
import { SpeakerCarousel } from "@/components/editorial/SpeakerCarousel";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Why", href: "#why" },
  { label: "Speakers", href: "#speakers" },
  { label: "Timeline", href: "#timeline" },
  { label: "Experience", href: "#experience" },
] as const;

const GALLERY_SLIDES = [
  {
    id: "showcase-floor",
    title: "Showcase floor",
    meta: "EntrepX Atmosphere",
    caption:
      "A broader event environment shaped by conversations, public moments, and visible student ambition.",
  },
  {
    id: "stage-session",
    title: "Stage sessions",
    meta: "Founder Conversations",
    caption:
      "Speaker-led sessions that bring founders, operators, and student audiences into direct contact.",
  },
  {
    id: "networking-moment",
    title: "Networking moments",
    meta: "Campus Exchange",
    caption:
      "The event matters as much in the spaces between sessions as it does on stage: introductions, questions, and follow-up conversations.",
  },
] as const;

const SPEAKERS = [
  {
    id: "abhijit-vemuganti",
    name: "Abhijit Vemuganti",
    role: "Co-Founder, Swipe",
    image: "/placeholders/portrait-stone.svg",
  },
  {
    id: "founder-guest",
    name: "Founder Guest",
    role: "Startup founder from the early-stage ecosystem",
    image: "/placeholders/portrait-stone.svg",
  },
  {
    id: "operator-guest",
    name: "Operator Guest",
    role: "Product and operations leader",
    image: "/placeholders/portrait-stone.svg",
  },
  {
    id: "investor-voice",
    name: "Investor Voice",
    role: "Investor perspective on building and backing ventures",
    image: "/placeholders/portrait-stone.svg",
  },
] as const;

const TIMELINE_DAYS = [
  {
    id: "day-1",
    label: "Day 1",
    title: "Conversations, context, and public energy",
    intro:
      "The opening rhythm brings the wider campus into contact with entrepreneurial thinking through talks, sessions, and high-visibility stage moments.",
    items: [
      {
        year: "10:00 AM",
        title: "Opening and event welcome",
        body: "A formal start that frames the day, sets the tone, and introduces the wider event direction.",
      },
      {
        year: "11:00 AM",
        title: "Founder and speaker sessions",
        body: "Conversations with founders, operators, and guests that bring real startup journeys onto campus.",
      },
      {
        year: "2:00 PM",
        title: "Public showcases",
        body: "Student-facing moments where ideas, prototypes, and entrepreneurial work become visible to the wider audience.",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    title: "Participation, competitions, and follow-through",
    intro:
      "The second day moves from observation into stronger participation, with competitions, interactions, and deeper engagement across the event floor.",
    items: [
      {
        year: "10:30 AM",
        title: "Competition and challenge formats",
        body: "Business idea rounds, public evaluation, and more structured opportunities for students to participate actively.",
      },
      {
        year: "1:00 PM",
        title: "Interactive networking",
        body: "Students, guests, moderators, and organisers come into more direct conversation through curated interaction points.",
      },
      {
        year: "4:00 PM",
        title: "Closing sessions",
        body: "Final moments that consolidate learning, recognise participation, and carry event momentum back into the campus year.",
      },
    ],
  },
] as const;

const EXPERIENCE_POINTS = [
  {
    title: "Stage conversations",
    body: "Talks and moderated sessions that make the event feel flagship without becoming distant or ceremonial.",
  },
  {
    title: "Student-facing participation",
    body: "Competitions, showcases, and interactive formats that invite students to do more than just sit in the audience.",
  },
  {
    title: "Networking and follow-through",
    body: "Introductions, informal exchanges, and post-session movement that turn a big event into something useful.",
  },
] as const;

export default function EntrepxPage() {
  return (
    <div className="page-stack page-stack--flush">
      <EntrepXRegisterButton />

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border/45">
          <div className="relative min-h-[640px] bg-[linear-gradient(135deg,#181616_0%,#221d1c_34%,#34261f_100%)] md:min-h-[720px]">
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_28%),linear-gradient(180deg,rgba(10,10,12,0.06)_0%,rgba(6,6,8,0.54)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,244,236,0.12),transparent_22%),radial-gradient(circle_at_78%_30%,rgba(255,194,132,0.14),transparent_24%),radial-gradient(circle_at_54%_68%,rgba(0,0,0,0.18),transparent_34%)]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:88px_88px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.44),transparent_82%)]" />

            <div className="section-frame relative grid min-h-[640px] items-end gap-12 px-5 pb-10 pt-30 md:min-h-[720px] md:px-8 md:pb-12 md:pt-32 lg:grid-cols-[0.94fr_1.06fr] lg:px-10">
              <div className="max-w-[38rem] space-y-6">
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/72">
                  EntrepX
                  <span className="h-1 w-1 rounded-full bg-white/48" />
                  Flagship Event
                </div>
                <h1 className="max-w-[10ch] text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-[5rem] lg:leading-[0.95]">
                  The flagship entrepreneurship platform at Mahindra University.
                </h1>
                <p className="max-w-[34rem] text-base leading-7 text-white/86 md:text-lg">
                  EntrepX brings together founders, investors, industry experts, and student
                  builders for a more public, high-energy expression of EIC on campus.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://forms.office.com/r/Bbj4A1H4Xr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-cta inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium"
                  >
                    Register Now
                  </Link>
                  <Link
                    href="#timeline"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/6 px-5 text-sm font-medium text-white/88 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                  >
                    Explore Schedule <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="text-sm uppercase tracking-[0.18em] text-white/66">
                  Registrations open now
                </div>
              </div>

              <div className="grid gap-4 self-end lg:pb-3">
                <div className="grid gap-4 sm:grid-cols-3">
                  <HeroStat label="What it is" value="Flagship EIC event" />
                  <HeroStat label="Why it matters" value="Public campus momentum" />
                  <HeroStat label="When to care" value="Happening soon" />
                </div>
                <div className="max-w-[35rem] border-t border-white/14 pt-4 text-sm leading-7 text-white/76">
                  A concentrated event moment where conversations, showcases, competitions, and
                  networking bring the university&apos;s entrepreneurial culture into public view.
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <SectionNav items={NAV_ITEMS} />

      <ScrollReveal>
        <section id="about" className="section-stack">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-5">
              <div className="section-kicker">About EntrepX</div>
              <h2 className="max-w-[16ch] text-balance text-3xl font-semibold text-text md:text-4xl">
                A public-facing expression of entrepreneurship on campus.
              </h2>
            </div>

            <div className="space-y-5">
              <p className="max-w-[60ch] text-sm leading-7 text-muted">
                EntrepX is one of the university&apos;s most prominent entrepreneurship platforms.
                It creates a space where students can encounter entrepreneurial thinking not as an
                abstract concept, but as something active, visible, and shared.
              </p>
              <p className="max-w-[60ch] text-sm leading-7 text-muted">
                Through speaker sessions, startup showcases, idea competitions, and interactive
                networking formats, the event turns EIC&apos;s broader mission into a concentrated
                campus moment with stronger scale, visibility, and energy.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/42 py-14">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <ImageSlider slides={GALLERY_SLIDES} />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="why" className="section-stack">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <div className="section-kicker">Why EntrepX?</div>
              <h2 className="max-w-[14ch] text-balance text-3xl font-semibold text-text md:text-4xl">
                A flagship event should do more than gather a crowd.
              </h2>
              <p className="max-w-[52ch] text-sm leading-7 text-muted">
                EntrepX matters because it gives entrepreneurial work a public stage on campus. It
                makes ideas visible, creates stronger points of access, and puts students in direct
                contact with people who have already built.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="border-l border-border/60 pl-5 md:pl-6">
                <div className="text-base font-semibold text-text">A reason to show up</div>
                <p className="mt-3 max-w-[48ch] text-sm leading-7 text-muted">
                  The event is not only informative. It is energising, socially visible, and
                  structured to make students feel closer to the startup world rather than outside
                  it.
                </p>
              </div>
              <div className="border-l border-border/60 pl-5 md:pl-6">
                <div className="text-base font-semibold text-text">A reason to stay engaged</div>
                <p className="mt-3 max-w-[48ch] text-sm leading-7 text-muted">
                  Conversations, competitions, and showcases create a fuller event rhythm, so the
                  day feels like an experience rather than a sequence of isolated sessions.
                </p>
              </div>
              <div className="border-l border-border/60 pl-5 md:pl-6">
                <div className="text-base font-semibold text-text">A reason to take the next step</div>
                <p className="mt-3 max-w-[48ch] text-sm leading-7 text-muted">
                  EntrepX works best when it leaves behind more than photos: stronger curiosity,
                  more participation, and clearer entry points into the EIC ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="speakers" className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/46 py-16">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="section-stack gap-8">
              <div className="max-w-[42rem]">
                <div className="section-kicker">Past Speakers</div>
                <h2 className="mt-3 max-w-[13ch] text-balance text-3xl font-semibold text-text md:text-4xl">
                  The voices that shape the room matter.
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  Learn from founders, operators, and industry leaders shaping today&apos;s startup
                  ecosystem.
                </p>
              </div>

              <SpeakerCarousel speakers={SPEAKERS} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="timeline" className="section-stack">
          <div className="max-w-[44rem]">
            <div className="section-kicker">Timeline</div>
            <h2 className="mt-3 max-w-[12ch] text-balance text-3xl font-semibold text-text md:text-4xl">
              A schedule that gives the event its shape.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              The day toggle and timeline help frame EntrepX as a paced event experience: not one
              long stream, but a sequence of moments with different roles and energies.
            </p>
          </div>

          <EntrepXTimeline days={TIMELINE_DAYS} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="experience" className="section-stack">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <div className="section-kicker">Event Experience</div>
              <h2 className="max-w-[14ch] text-balance text-3xl font-semibold text-text md:text-4xl">
                What the day should feel like in practice.
              </h2>
              <p className="max-w-[52ch] text-sm leading-7 text-muted">
                EntrepX should feel structured and premium, but never distant. The point is to let
                students encounter entrepreneurship through a day that is both aspirational and
                accessible.
              </p>
            </div>

            <div className="grid gap-5">
              {EXPERIENCE_POINTS.map((item) => (
                <div key={item.title} className="border-t border-border/60 pt-5">
                  <div className="text-lg font-semibold text-text">{item.title}</div>
                  <p className="mt-3 max-w-[52ch] text-sm leading-7 text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/42 py-14">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[52ch]">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">Final step</div>
                <div className="mt-3 text-2xl font-semibold text-text md:text-3xl">
                  Register now, explore the schedule, and step into the event with context.
                </div>
                <p className="mt-3 max-w-[44ch] text-sm leading-7 text-muted">
                  EntrepX works best when students arrive prepared to listen, ask, participate, and
                  carry something back from the day.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://forms.office.com/r/Bbj4A1H4Xr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-cta inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium"
                >
                  Register Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-5 text-sm font-medium text-text/85 transition-colors hover:bg-surface-elevated hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60"
                >
                  Contact / Enquire <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-white/14 pl-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/62">{label}</div>
      <div className="mt-2 text-sm font-medium text-white/88">{value}</div>
    </div>
  );
}

function EntrepXRegisterButton() {
  return (
    <Link
      href="https://forms.office.com/r/Bbj4A1H4Xr"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-11 items-center justify-center rounded-full border border-white/14 bg-text px-5 text-sm font-medium text-background shadow-[0_10px_24px_oklch(0.12_0.01_280_/_0.16)] transition-colors hover:bg-text/92 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60"
    >
      Register
    </Link>
  );
}
