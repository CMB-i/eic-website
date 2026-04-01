"use client";

import * as React from "react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PageLeadImage } from "@/components/editorial/PageLeadImage";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { TeamProfileCard } from "@/components/ui/TeamProfileCard";
import { type Person, presidents, functions } from "@/data/team";
import { TEAM_DATA } from "@/data/teamData";

export default function TeamPage() {
  const archiveTeams = TEAM_DATA;
  const [archiveYear, setArchiveYear] = React.useState<string>(archiveTeams[0]?.year ?? "");
  const archiveTeam = archiveTeams.find((team) => team.year === archiveYear);
  const currentPresidents = presidents.map(personToProfile);
  const archivedPresidents = (archiveTeam?.presidents ?? []).map(personToProfile);

  return (
    <div className="page-stack">
      <ScrollReveal>
        <section className="section-stack gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="section-stack gap-5">
              <div className="section-kicker">Team</div>
              <h1 className="max-w-[12ch] text-balance text-4xl font-semibold text-text md:text-5xl lg:text-6xl">
                The people building EIC.
              </h1>
              <p className="section-copy">
                A student-led leadership structure shaped through presidents, functional heads, and
                continuity across cohorts.
              </p>
            </div>

            <div className="meta-strip">
              <div className="meta-item">
                <div className="meta-label">Presidents</div>
                <div className="meta-value">
                  {presidents.length} student leaders guiding direction and continuity.
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Functions</div>
                <div className="meta-value">
                  {functions.length} working pillars across events, content, marketing, tech, and
                  operations.
                </div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Archive</div>
                <div className="meta-value">
                  Presidential continuity preserved across earlier EIC cohorts.
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <PageLeadImage
          title="Team"
          meta="Current Cohort"
          tone="neutral"
          caption="The students shaping EIC through leadership, function ownership, and the day-to-day systems that hold the platform together."
        />
      </ScrollReveal>

      <ScrollReveal>
        <section id="presidents" className="section-stack">
          <SectionHeading
            label="Presidents"
            title="Direction, continuity, and public voice."
            subtitle="The presidents hold the broader line of the platform: how it is positioned, how it operates, and what kind of student culture it tries to build."
          />
          <div className="grid gap-6 border-t border-border/65 pt-6 md:grid-cols-2 xl:gap-8">
            {currentPresidents.map((president, index) => (
              <TeamProfileCard
                key={president.id}
                person={president}
                size="large"
                priority={index < 2}
                className="justify-self-center"
              />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="core-team" className="section-stack">
          <SectionHeading
            label="Heads"
            title="Functional ownership across the platform."
            subtitle="Each function holds a clear working area inside EIC, from events and content to marketing, tech, and public-facing communication."
          />
          <div className="grid grid-cols-1 gap-6 border-t border-border/65 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {functions.map((fn) => (
              <section key={fn.id} className="space-y-4 sm:col-span-2 lg:col-span-2">
                <div className="border-t border-border/45 pt-4">
                  <div className="text-lg font-semibold tracking-tight text-text">{fn.name}</div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <TeamProfileCard
                    person={roleToProfile(fn.name, "Head", fn.head)}
                    className="max-w-none"
                  />
                  <TeamProfileCard
                    person={roleToProfile(fn.name, "Vice Head", fn.viceHead)}
                    className="max-w-none"
                  />
                </div>
              </section>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-stack mt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              label="Archive"
              title="Previous presidents"
              subtitle="Presidential continuity across earlier EIC cohorts."
            />
            <label className="grid gap-2 md:w-[220px]">
              <span className="text-xs uppercase tracking-[0.18em] text-muted">Archive Year</span>
              <select
                value={archiveYear}
                onChange={(event) => setArchiveYear(event.target.value)}
                className="h-11 rounded-full border border-border bg-surface px-4 text-sm text-text outline-none transition-colors focus-visible:ring-2 focus-visible:ring-glow/40"
                aria-label="Select archived EIC team year"
              >
                {archiveTeams.map((team) => (
                  <option key={team.year} value={team.year}>
                    {team.year} Team
                  </option>
                ))}
              </select>
            </label>
          </div>

          {archiveTeam ? (
            <div className="grid gap-6 border-t border-border/65 pt-6 md:grid-cols-2">
              {archivedPresidents.map((president) => (
                <TeamProfileCard
                  key={president.id}
                  person={president}
                  muted
                  className="justify-self-center"
                />
              ))}
            </div>
          ) : null}
        </section>
      </ScrollReveal>
    </div>
  );
}

function personToProfile(person: { id: string; name: string; role: string }): Person {
  return {
    ...person,
    pillars: [],
  };
}

function roleToProfile(functionName: string, role: string, name?: string): Person {
  const displayName = name ?? "TBA";

  return (
    {
      id: `${functionName}-${role}-${displayName}`.toLowerCase().replace(/\s+/g, "-"),
      name: displayName,
      role,
      domain: functionName,
      pillars: [],
      contribution: displayName === "TBA" ? "Position to be announced" : `${functionName} team`,
    }
  );
}
