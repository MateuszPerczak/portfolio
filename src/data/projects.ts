import type { ProjectProps } from "@components/project/Project.types";

type ProjectWithId = ProjectProps & { id: number };

export const projects: ProjectWithId[] = [
  {
    id: 0,
    header: {
      name: "Hardwareinfo",
      type: "Desktop app",
      href: "https://github.com/MateuszPerczak/hardwareinfo",
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
      href: "https://github.com/MateuszPerczak/weather",
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
      href: "https://github.com/MateuszPerczak/Luix",
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
      href: "https://github.com/MateuszPerczak/tictactoe",
    },
    content: {
      image: "./images/tictactoe.webp",
    },
  },
];
