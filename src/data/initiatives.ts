export type Initiative = {
  id: string;
  title: string;
  blurb: string;
  tag: string;
  status: "Active" | "Upcoming" | "Ongoing";
};

export const initiatives: Initiative[] = [
  {
    id: "founders-lab",
    title: "Founders Lab",
    blurb: "A rapid, mentor-led build sprint for 0→1 ideas with weekly demo nights.",
    tag: "Acceleration",
    status: "Active",
  },
  {
    id: "proto-nights",
    title: "Prototype Nights",
    blurb: "A hands-on series for shipping prototypes fast: no slides, only demos.",
    tag: "Build",
    status: "Ongoing",
  },
  {
    id: "venture-studio",
    title: "Venture Studio",
    blurb: "Cross-discipline teams pairing design + engineering + business for new ventures.",
    tag: "Collaboration",
    status: "Upcoming",
  },
  {
    id: "innovation-grants",
    title: "Innovation Micro‑Grants",
    blurb: "Small grants for student builders—measured by learning velocity, not polish.",
    tag: "Funding",
    status: "Active",
  },
];

