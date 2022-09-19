import type { ProjectProps } from "@components/project/Project.types";

export const projects: ProjectProps[] = [
  {
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
