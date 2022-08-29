type Project = {
  name: string;
  description: string;
  href: string;
};

const projects: Project[] = [
  {
    name: "Weather",
    description:
      "Web app that allows you to find weather forecast for any city in the Poland.",
    href: "https://mateuszperczak.github.io/weather/",
  },
  {
    name: "Hardwareinfo",
    description:
      "Desktop application (new version of PySpec) with identifies the CPU, RAM, motherboard chipset (and other hardware properties) installed in the computer.",
    href: "https://github.com/MateuszPerczak/hardwareinfo",
  },
  {
    name: "Luix",
    description:
      "Virtual desktop simulating real OS. It has a taskbar, a window manager, and some basic applications. Which can be expanded.",
    href: "https://mateuszperczak.github.io/Luix/",
  },
  {
    name: "TicTacToe",
    description: "Just a simple tic-tac-toe game.",
    href: "https://mateuszperczak.github.io/tictactoe/",
  },
  {
    name: "PyScript-React",
    description:
      "A library that connects React with PyScript. It allows you to run python scripts in the browser.",
    href: "https://github.com/Py4Js/PyScript-React",
  },
];

export default projects;
