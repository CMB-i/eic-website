export type Person = {
  id: string;
  name: string;
  role: string;
  domain?: string;
  pillars: string[];
  image?: string;
  contribution?: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
  order?: number;
};

export type President = {
  id: string;
  name: string;
  role: string;
};

export type TeamFunction = {
  id: string;
  name: string;
  head?: string;
  viceHead?: string;
};

export const presidents: President[] = [
  {
    id: "president-01",
    name: "Chirag Goyal",
    role: "Joint President, EIC",
  },
  {
    id: "president-02",
    name: "Shrivatsh",
    role: "Joint President, EIC",
  },
];

export const functions: TeamFunction[] = [
  {
    id: "function-events",
    name: "Events",
    head: "Aniket",
    viceHead: "Kamakshi",
  },
  {
    id: "function-content",
    name: "Content",
    head: "Bhavya Sharma",
    viceHead: "Ganesh",
  },
  {
    id: "function-logistics",
    name: "Logistics",
  },
  {
    id: "function-design",
    name: "Design",
  },
  {
    id: "function-marketing",
    name: "Marketing",
    head: "Palak",
  },
  {
    id: "function-tech",
    name: "Tech",
    head: "Charvi Bayana",
    viceHead: "Srilaasya",
  },
  {
    id: "function-pr",
    name: "PR",
  },
];
