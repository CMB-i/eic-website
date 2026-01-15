export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focus: string;
};

export const team: TeamMember[] = [
  {
    id: "lead-01",
    name: "Aarav Mehta",
    role: "Lead, EIC",
    focus: "Strategy · Partnerships · Execution",
  },
  {
    id: "ops-01",
    name: "Isha Kapoor",
    role: "Operations",
    focus: "Rituals · Logistics · Community",
  },
  {
    id: "tech-01",
    name: "Rohan Singh",
    role: "Tech & Product",
    focus: "Prototyping · Platform · Demos",
  },
  {
    id: "design-01",
    name: "Mira Joshi",
    role: "Design",
    focus: "Brand · Motion · UX systems",
  },
  {
    id: "content-01",
    name: "Zara Khan",
    role: "Content",
    focus: "Storytelling · Copy · Social",
  },
];

