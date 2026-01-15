export type EventItem = {
  id: string;
  title: string;
  date: string; // placeholder; replace with real date objects later
  location: string;
  type: "Workshop" | "Talk" | "Hack" | "Showcase";
};

export const events: EventItem[] = [
  {
    id: "build-night-01",
    title: "Build Night: Ship in 90 Minutes",
    date: "Feb 02, 2026 · 6:30 PM",
    location: "Innovation Hub",
    type: "Workshop",
  },
  {
    id: "speaker-01",
    title: "Founder Talk: From Idea to First Users",
    date: "Feb 12, 2026 · 5:00 PM",
    location: "Auditorium A",
    type: "Talk",
  },
  {
    id: "prototype-showcase",
    title: "Prototype Showcase",
    date: "Mar 01, 2026 · 4:00 PM",
    location: "Open Atrium",
    type: "Showcase",
  },
];

