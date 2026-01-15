import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollReveal, ScrollRevealGroup } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";
import { StaggerHeading } from "@/components/motion/StaggerHeading";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12">
      <section className="space-y-6">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted">
            <Mail className="h-3.5 w-3.5 text-accent" />
            Contact
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <StaggerHeading
            as="h1"
            className="text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl"
            text="Let’s build something real."
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-2xl text-pretty text-sm leading-6 text-muted md:text-base">
            Placeholder contact experience. Swap to your form provider or internal workflow later.
          </p>
        </ScrollReveal>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <ScrollReveal>
          <div className="rounded-4xl border border-border bg-surface p-6">
            <div className="text-base font-semibold text-text">Send a message</div>
            <p className="mt-2 text-sm leading-6 text-muted">
              This is a placeholder. You can replace with a real form component later.
            </p>

            <form className="mt-6 grid gap-3">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" placeholder="name@example.com" />
              <Field label="Message" placeholder="Tell us what you want to build…" multiline />

              <button
                type="button"
                className={cn(
                  "mt-2 inline-flex h-11 items-center justify-center rounded-full px-5",
                  "bg-accent text-accent-foreground text-sm font-medium",
                  "shadow-[0_12px_40px_rgba(255,219,102,0.22)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
                )}
              >
                Send (placeholder)
              </button>
            </form>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          <ScrollReveal>
            <div className="rounded-4xl border border-border bg-surface p-6">
              <div className="text-base font-semibold text-text">Quick links</div>
              <div className="mt-3 grid gap-2 text-sm">
                <Link className="text-text/80 hover:text-text" href="/initiatives">
                  Initiatives
                </Link>
                <Link className="text-text/80 hover:text-text" href="/events">
                  Events
                </Link>
                <Link className="text-text/80 hover:text-text" href="/team">
                  Team
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup className="grid gap-4" staggerChildren={0.08}>
            <ScrollReveal>
              <InfoCard icon={MapPin} title="Location" body="Innovation Hub · Campus (placeholder)" />
            </ScrollReveal>
            <ScrollReveal>
              <InfoCard icon={Mail} title="Email" body="eic@example.com (placeholder)" />
            </ScrollReveal>
            <ScrollReveal>
              <InfoCard icon={Phone} title="Phone" body="+00 00000 00000 (placeholder)" />
            </ScrollReveal>
          </ScrollRevealGroup>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  placeholder,
  multiline,
}: {
  label: string;
  placeholder: string;
  multiline?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium text-text/80">{label}</span>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          className={cn(
            "w-full resize-none rounded-3xl border border-border bg-background/40 px-4 py-3",
            "text-sm text-text placeholder:text-muted/80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
          )}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={cn(
            "h-11 w-full rounded-3xl border border-border bg-background/40 px-4",
            "text-sm text-text placeholder:text-muted/80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/60",
          )}
        />
      )}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-4xl border border-border bg-surface p-5">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-background/40">
          <Icon className="h-4 w-4 text-accent" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-text">{title}</div>
          <div className="mt-1 text-sm text-muted">{body}</div>
        </div>
      </div>
    </div>
  );
}

