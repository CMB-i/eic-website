export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  tone: "Butter" | "Nebula" | "Aurora" | "Chrome";
};

export const gallery: GalleryItem[] = [
  {
    id: "g-01",
    title: "Demo Night",
    caption: "Fast builds, sharper feedback, better founders.",
    tone: "Butter",
  },
  {
    id: "g-02",
    title: "Workshop",
    caption: "Hands-on, step-by-step, always shipping.",
    tone: "Aurora",
  },
  {
    id: "g-03",
    title: "Team Sprint",
    caption: "Design + engineering + business in one loop.",
    tone: "Nebula",
  },
  {
    id: "g-04",
    title: "Showcase",
    caption: "Less talk. More prototypes.",
    tone: "Chrome",
  },
];

