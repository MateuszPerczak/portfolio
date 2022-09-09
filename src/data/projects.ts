import type { ProjectProps } from "@components/project/Project.types";

type ProjectWithId = ProjectProps & { id: number };

export const projects: ProjectWithId[] = [
  {
    id: 0,
    header: {
      name: "Hardwareinfo",
      type: "Desktop app",
      to: "/hardwareinfo",
    },
    content: {
      image: "./images/hardwareinfo.webp",
    },
  },
  {
    id: 1,
    header: {
      name: "Weather",
      type: "Website",
      to: "/weather",
    },
    content: {
      image: "./images/weather.webp",
    },
  },
  {
    id: 2,
    header: {
      name: "Luix",
      type: "Website",
      to: "/luix",
    },
    content: {
      image: "./images/luix.webp",
    },
  },
  {
    id: 3,
    header: {
      name: "TicTacToe",
      type: "Website",
      to: "/tictactoe",
    },
    content: {
      image: "./images/tictactoe.webp",
    },
  },
];
