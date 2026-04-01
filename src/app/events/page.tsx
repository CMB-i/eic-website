import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PageLeadImage } from "@/components/editorial/PageLeadImage";

const EVENT_ARCHIVE = [
  {
    id: "spotlight",
    title: "Spotlight",
    meta: [],
    body: [
      "Spotlight was all about fun, energy, and engagement, bringing students together through a series of interactive mini-games. The event gave everyone a chance to unwind, bond, and test their knowledge in playful yet challenging ways.",
      "The first game, Spin the Wheel, had participants racing against the clock. After spinning, they had just 30 seconds to identify a logo or personality from a massive chart of 400 logos, combining speed with sharp observation. The second activity was the Cardboard Box Game, where players had to carefully stack sets of boxes by matching companies with their owners, type of company, and tagline, turning business trivia into an exciting hands-on challenge.",
      "The third highlight was Heads Up, a team-based guessing game where friends had to identify companies or related concepts within a minute, sparking plenty of laughter and quick thinking. To wrap up, students also expressed their creativity freely by doodling and sharing their thoughts on a large chart paper, leaving behind a colorful memory of the day.",
      "Spotlight truly lived up to its name, giving participants a chance to shine, connect, and celebrate the spirit of learning through fun.",
    ],
    placeholder: {
      label: "Event Photography",
      title: "Spotlight photo archive",
      caption: "Interactive games, fast rounds, and candid moments from the event floor.",
      slots: ["Spin the Wheel", "Cardboard Box Game", "Heads Up"],
    },
  },
  {
    id: "orientation",
    title: "Orientation",
    meta: [],
    body: [
      "The Orientation of EIC was designed to spark creativity and teamwork right from the start. Students divided themselves into teams of five and took part in an exciting game that combined strategy, innovation, and a bit of fun competition.",
      "The event began with an auction round, where teams bid on simple everyday items such as pens, books, and sticky notes. After securing their items, teams were given time to brainstorm and innovate, transforming these basic objects into imaginative new products. Each team then pitched their innovations to everyone, showcasing their creativity and persuasive skills.",
      "In the next stage, another auction was held, this time giving teams that missed out in the first round a chance to buy items, reinvent them, and present their ideas. The final twist came when the innovations were auctioned again, and the teams had to maximise their returns.",
      "The winners were decided based on the highest profit margin percentage, making it not only a test of creativity but also of business acumen. The Orientation successfully introduced students to EIC's spirit of innovation, strategy, and collaboration, setting the tone for the year ahead.",
    ],
    placeholder: {
      label: "Event Photography",
      title: "Orientation photo archive",
      caption: "Auction rounds, reinvention pitches, and first-day team dynamics across the room.",
      slots: ["Auction round", "Product reinvention", "Pitch moment"],
    },
  },
  {
    id: "swipe-talk",
    title: "Swipe Talk",
    meta: [
      { label: "Speaker", value: "Abhijit Vemuganti" },
      { label: "Date and Time", value: "21 January 2026, 3:00 PM" },
      { label: "Venue", value: "Executive Education Building" },
      { label: "Approx. Attendees", value: "50" },
    ],
    body: [
      "The session featuring Abhijit Vemuganti offered an insightful glimpse into the journey of a successful entrepreneur in the fintech space. As the Co-Founder of Swipe, a Y-Combinator backed startup, he shared his experiences of building a company from the ground up, navigating uncertainties, and overcoming challenges along the way.",
      "He spoke candidly about the process of raising $2 million in seed funding, highlighting the importance of persistence, clarity of vision, and strong execution. The interaction was both informative and inspiring for aspiring entrepreneurs. The session concluded with an engaging rapid-fire round, where his quick, thoughtful, and often witty responses added a lively and personal touch to the discussion.",
    ],
    placeholder: {
      label: "Event Photography",
      title: "Swipe Talk photo archive",
      caption: "Founder session frames, audience interactions, and the rapid-fire close.",
      slots: ["Speaker session", "Audience Q&A", "Rapid-fire round"],
    },
  },
  {
    id: "bankruptcy-bureau",
    title: "Bankruptcy Bureau",
    meta: [
      { label: "Date and Time", value: "18 February 2026, 3:00 PM" },
      { label: "Venue", value: "ELT - 1" },
      { label: "Approx. Attendees", value: "50-70" },
    ],
    body: [
      "The Bankruptcy Bureau was an engaging Mystery Rooms-style event that tested participants' analytical thinking and teamwork under pressure. The event began with a brief introduction, equipping teams with essential knowledge before they set off on their challenge.",
      "Participants navigated through multiple stages, uncovering hidden clues and moving from one location to another, each presenting a new round of puzzles to decode. As the difficulty increased, teams had to think critically, connect insights, and collaborate effectively to stay on track.",
      "The final stage required participants to compile their findings and submit their documents, simulating real-world decision-making. Overall, Bankruptcy Bureau offered a thrilling, immersive experience that blended strategy, problem-solving, and excitement.",
    ],
    placeholder: {
      label: "Event Photography",
      title: "Bankruptcy Bureau photo archive",
      caption: "Puzzle stages, clue trails, and high-pressure team problem-solving.",
      slots: ["Clue discovery", "Stage transition", "Final submission"],
    },
  },
  {
    id: "the-executive-dilemma",
    title: "The Executive Dilemma",
    meta: [],
    body: [
      "The Executive Dilemma was an immersive simulation event that challenged participants to think like corporate leaders and make high-stakes decisions under pressure. The event began with a brief introduction, setting the context and familiarizing teams with the dynamics of real-world business scenarios.",
      "Participants were then presented with complex brand crises and strategic challenges that required careful analysis and quick decision-making. As the rounds progressed, the intensity increased, pushing teams to evaluate risks, defend their strategies, and adapt to evolving situations.",
      "Collaboration and effective communication played a key role as participants debated their approaches and worked towards impactful solutions. The final stage involved presenting and justifying their decisions, simulating real boardroom discussions. Overall, The Executive Dilemma provided a dynamic and engaging experience that blended strategy, leadership, and critical thinking.",
    ],
    placeholder: {
      label: "Event Photography",
      title: "Executive Dilemma photo archive",
      caption: "Simulation rounds, crisis-response discussions, and final boardroom presentations.",
      slots: ["Scenario brief", "Team strategy", "Final decision room"],
    },
  },
] as const;

export default function EventsPage() {
  return (
    <div className="page-stack">
      <ScrollReveal>
        <section className="section-stack gap-7">
          <div className="section-kicker">Events</div>
          <h1 className="max-w-[12ch] text-balance text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
            Moments that shaped the EIC calendar.
          </h1>
          <p className="section-copy max-w-[58ch]">
            This page documents some of the sessions, simulations, and interactive experiences
            that defined EIC&apos;s activity on campus.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <PageLeadImage
          title="Events Archive"
          meta="EIC Mahindra University"
          tone="warm"
          caption="A documentation-led record of sessions, simulations, and shared campus moments across the EIC calendar."
        />
      </ScrollReveal>

      {EVENT_ARCHIVE.map((event, index) => (
        <ScrollReveal key={event.id}>
          <section
            className={
              index % 2 === 0
                ? "grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start"
                : "grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start"
            }
          >
            <div className={index % 2 === 0 ? "space-y-6" : "space-y-6 lg:order-2"}>
              <div className="border-t border-border/65 pt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted">
                  Event {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text md:text-4xl">
                  {event.title}
                </h2>
              </div>

              {event.meta.length > 0 ? (
                <div className="meta-strip">
                  {event.meta.map((item) => (
                    <div key={`${event.id}-${item.label}`} className="meta-item">
                      <div className="meta-label">{item.label}</div>
                      <div className="meta-value">{item.value}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="space-y-5">
                {event.body.map((paragraph) => (
                  <p key={paragraph} className="max-w-[62ch] text-sm leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className={index % 2 === 0 ? "lg:pt-6" : "lg:order-1 lg:pt-6"}>
              <EventImagePlaceholder
                label={event.placeholder.label}
                title={event.placeholder.title}
                caption={event.placeholder.caption}
                slots={event.placeholder.slots}
              />
            </div>
          </section>
        </ScrollReveal>
      ))}
    </div>
  );
}

function EventImagePlaceholder({
  label,
  title,
  caption,
  slots,
}: {
  label: string;
  title: string;
  caption: string;
  slots: readonly string[];
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-surface/62">
      <div className="relative min-h-[320px] border-b border-border/55 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_42%,rgba(0,0,0,0.14)_100%)] p-6 md:min-h-[360px] md:p-8">
        <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_50%_0%,rgba(233,226,214,0.64),transparent_72%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(154,143,129,0.16),transparent_74%)]" />
        <div className="relative">
          <div className="text-xs uppercase tracking-[0.18em] text-muted">{label}</div>
          <div className="mt-3 text-2xl font-semibold tracking-tight text-text md:text-3xl">
            {title}
          </div>
          <p className="mt-3 max-w-[34ch] text-sm leading-7 text-muted">{caption}</p>
        </div>

        <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
          {slots.map((slot) => (
            <div
              key={slot}
              className="flex min-h-[112px] items-end rounded-[1.2rem] border border-border/50 bg-background/46 p-4"
            >
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted">Photo Slot</div>
                <div className="mt-2 text-sm font-medium text-text">{slot}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
