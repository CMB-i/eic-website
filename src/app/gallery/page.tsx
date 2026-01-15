import { GalleryHorizontalEnd } from "lucide-react";
import { gallery } from "@/data/gallery";
import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import { StaggerHeading } from "@/components/motion/StaggerHeading";
import { BentoCard } from "@/components/ui/BentoCard";

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12">
      <section className="space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
            <GalleryHorizontalEnd className="h-3.5 w-3.5 text-accent" />
            Gallery
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <StaggerHeading
            as="h1"
            className="text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl"
            text="Moments worth shipping."
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-muted md:text-base">
            Placeholder gallery tiles. Swap these with real photography or video stills later. The
            cards are built for low CLS and fast paint.
          </p>
        </ScrollReveal>
      </section>

      <section className="space-y-6">
        <HeaderKick title="Highlights" subtitle="Bento grid with lightweight hover motion." />
        <ScrollRevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" staggerChildren={0.08}>
          {gallery.map((g) => (
            <ScrollReveal key={g.id}>
              <BentoTile tone={g.tone} title={g.title} caption={g.caption} />
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

function BentoTile({
  title,
  caption,
  tone,
}: {
  title: string;
  caption: string;
  tone: "Butter" | "Nebula" | "Aurora" | "Chrome";
}) {
  const bg = toneToGradient(tone);
  return (
    <BentoCard className="p-0">
      <div className={cn("aspect-[4/3] w-full", bg)} />
      <div className="space-y-2 p-5">
        <div className="text-base font-semibold text-text">{title}</div>
        <div className="text-sm leading-6 text-muted">{caption}</div>
        <div className="pt-1 text-xs text-muted">{tone}</div>
      </div>
    </BentoCard>
  );
}

function toneToGradient(tone: "Butter" | "Nebula" | "Aurora" | "Chrome") {
  switch (tone) {
    case "Butter":
      return "bg-[radial-gradient(circle_at_20%_20%,rgba(255,219,102,0.55),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,219,102,0.22),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.16),rgba(0,0,0,0))]";
    case "Nebula":
      return "bg-[radial-gradient(circle_at_30%_30%,rgba(141,162,255,0.42),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(255,219,102,0.18),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(0,0,0,0))]";
    case "Aurora":
      return "bg-[radial-gradient(circle_at_25%_70%,rgba(255,219,102,0.26),transparent_55%),radial-gradient(circle_at_70%_35%,rgba(141,162,255,0.34),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(0,0,0,0))]";
    case "Chrome":
    default:
      return "bg-[radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.18),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(255,219,102,0.14),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.10),rgba(0,0,0,0))]";
  }
}

