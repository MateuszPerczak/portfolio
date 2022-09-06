import type { ProjectProps } from "@components/project/Project.types";

type ProjectWithId = ProjectProps & { id: number };

export const projects: ProjectWithId[] = [
  {
    id: 0,
    header: {
      name: "Portfolio",
      type: "Website",
      to: "/portfolio",
    },
  },
  {
    id: 1,
    header: {
      name: "Hardwareinfo",
      type: "Desktop app",
      to: "/hardwareinfo",
    },
  },
  {
    id: 2,
    header: {
      name: "Weather",
      type: "Website",
      to: "/weather",
    },
  },
  {
    id: 3,
    header: {
      name: "Luix",
      type: "Website",
      to: "/luix",
    },
  },
  {
    id: 4,
    header: {
      name: "TicTacToe",
      type: "Website",
      to: "/tictactoe",
    },
  },
];
