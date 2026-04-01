import type { President } from "@/data/team";

export type TeamCohort = {
  year: string;
  presidents: President[];
};

export const TEAM_DATA: TeamCohort[] = [
  {
    year: "2024-25",
    presidents: [
      {
        id: "2024-president-1",
        name: "Previous President",
        role: "Joint President, EIC",
      },
      {
        id: "2024-president-2",
        name: "Previous President",
        role: "Joint President, EIC",
      },
    ],
  },
  {
    year: "2023-24",
    presidents: [
      {
        id: "2023-president-1",
        name: "Previous President",
        role: "Joint President, EIC",
      },
      {
        id: "2023-president-2",
        name: "Previous President",
        role: "Joint President, EIC",
      },
    ],
  },
];
