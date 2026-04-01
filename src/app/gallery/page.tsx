import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { EditorialPhoto } from "@/components/editorial/EditorialPhoto";
import { PageLeadImage } from "@/components/editorial/PageLeadImage";
import { SectionHeading } from "@/components/editorial/SectionHeading";

const GALLERY_GROUPS = [
  {
    title: "Founder conversations",
    meta: "Founder Talk · Feb 2026",
    tone: "warm" as const,
    caption:
      "A placeholder documentation block for speaker sessions, public Q&A, and founder-led insight moments.",
  },
  {
    title: "Build sessions",
    meta: "Innovation Lab",
    tone: "neutral" as const,
    caption:
      "A placeholder visual archive for workshops, prototype reviews, and working formats focused on execution.",
  },
  {
    title: "Campus showcases",
    meta: "Demo Review",
    tone: "violet" as const,
    caption:
      "A placeholder image block for showcase events where teams present work to peers, mentors, and the wider community.",
  },
] as const;

export default function GalleryPage() {
  return (
    <div className="page-stack">
      <ScrollReveal>
        <section className="section-stack gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="section-stack gap-5">
              <div className="section-kicker">Gallery</div>
              <h1 className="max-w-[12ch] text-balance text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
                A curated visual archive of campus momentum.
              </h1>
              <p className="section-copy">
                The gallery should document not just events, but the atmosphere, work, and public
                moments through which entrepreneurship becomes visible on campus.
              </p>
            </div>

            <div className="meta-strip">
              <div className="meta-item">
                <div className="meta-label">Archive role</div>
                <div className="meta-value">To build institutional memory and show what the ecosystem feels like in practice.</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Content types</div>
                <div className="meta-value">Talks, workshops, critiques, team moments, demos, and collaborations.</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Visual tone</div>
                <div className="meta-value">Documentary, editorial, and useful, rather than decorative or generic.</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <PageLeadImage
          title="Visual Archive"
          meta="Campus Showcase"
          tone="violet"
          caption="Campus Showcase · A wide entry image gives the archive a more formal, editorial tone before the curated clusters begin."
        />
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-surface/42 py-16">
          <div className="section-frame px-5 md:px-8 lg:px-10">
            <div className="section-stack">
              <SectionHeading
                label="Featured Clusters"
                title="Moments grouped by what they reveal."
                subtitle="The archive becomes stronger when images are curated around a story, not dropped into a flat grid."
              />
              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                <EditorialPhoto
                  title={GALLERY_GROUPS[0].title}
                  meta={GALLERY_GROUPS[0].meta}
                  tone={GALLERY_GROUPS[0].tone}
                  caption={GALLERY_GROUPS[0].caption}
                />
                <div className="grid gap-5">
                  <div className="border-l border-border/70 pl-5 md:pl-6">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted">
                      Editorial approach
                    </div>
                    <p className="mt-4 text-base leading-7 text-text/92">
                      The gallery is strongest when it feels sequenced and observed. One leading
                      image sets the tone, then the supporting moments build a fuller story around it.
                    </p>
                  </div>
                  {GALLERY_GROUPS.slice(1).map((item) => (
                    <EditorialPhoto
                      key={item.title}
                      title={item.title}
                      meta={item.meta}
                      tone={item.tone}
                      compact
                      caption={item.caption}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
