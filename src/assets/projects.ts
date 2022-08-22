type Link = {
  header: string;
  href: string;
};

export type Project = {
  id: number;
  header: string;
  description: string;
  libraries: string;
  links: Link[];
};

const projects: Project[] = [
  {
    id: 0,
    header: "Portfolio",
    description:
      "Strona zawierająca informacje o mnie, moich projektach itp. (Właśnie ją przeglądasz).",
    libraries: "TypeScript, Vite, React, Emotion, Framer Motion, React-router-dom",
    links: [
      {
        href: "https://github.com/MateuszPerczak/mateuszperczak.github.io",
        header: "Github",
      },
    ],
  },
  {
    id: 1,
    header: "Weather",
    description:
      "Aplikacja web'owa pozwalająca na sprawdzenie pogody w wybranym regionie Polski.",
    libraries:
      "TypeScript, React, Emotion, Lodash, React-router-dom, React-query, Framer Motion",
    links: [
      {
        href: "https://github.com/MateuszPerczak/weather",
        header: "Github",
      },
      {
        href: "https://mateuszperczak.github.io/weather/",
        header: "Demo",
      },
    ],
  },
  {
    id: 2,
    header: "Hardwareinfo",
    description:
      "Aplikacja identyfikująca procesor, pamięć RAM, chipset płyty głównej (oraz inne właściwości sprzętu komputerowego) zainstalowane w komputerze.",
    libraries: "TypeScript, Rust, Tauri, React, Emotion, Framer Motion",
    links: [
      {
        href: "https://github.com/MateuszPerczak/hardwareinfo",
        header: "Github",
      },
    ],
  },
  {
    id: 3,
    header: "Luix",
    description:
      "Wirtualny pulpit odwzorowywujący system operacyjny. Posiada pasek zadań, menedżer okien i kilka podstawowych aplikacji wraz z możliwością ich poszerzenia.",
    libraries: "JavaScript, React, Emotion, Framer Motion",
    links: [
      {
        href: "https://github.com/MateuszPerczak/Luix",
        header: "Github",
      },
      {
        href: "https://mateuszperczak.github.io/Luix/",
        header: "Demo",
      },
    ],
  },
  {
    id: 4,
    header: "TicTacToe",
    description: "Gra kółko i krzyżyk mojega autorstwa wykorzystująca bibliotekę React.",
    libraries: "TypeScript, React, Emotion, Lodash, React-router-dom, react-spring",
    links: [
      {
        href: "https://github.com/MateuszPerczak/tictactoe",
        header: "Github",
      },
      {
        href: "https://mateuszperczak.github.io/tictactoe/",
        header: "Demo",
      },
    ],
  },
];

export default projects;
