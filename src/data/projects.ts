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
    content: {
      image: "./images/portfolio.jpg",
    },
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    header: {
      name: "Luix",
      type: "Website",
      to: "/luix",
    },
    content: {
      image: "./images/3.png",
    },
  },
  {
    id: 4,
    header: {
      name: "TicTacToe",
      type: "Website",
      to: "/tictactoe",
    },
    content: {
      image: "./images/5.jpg",
    },
  },
];
