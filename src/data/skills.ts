type Skill = {
  id: number;
  header: string;
  description: string;
};

const skills: Skill[] = [
  {
    id: 1,
    header: "JĘZYKI PROGRAMOWANIA",
    description: "TypeScript, JavaScript, Python, C#",
  },
  {
    id: 2,
    header: "JĘZYKI OPISOWE",
    description: "HTML, CSS, SCSS, Markdown",
  },
  {
    id: 3,
    header: "KONTROLA WERSJI",
    description: "Git, Github, GitLab, Github actions",
  },
  {
    id: 4,
    header: "ŚRODOWISKA WYKONYWANIA I IMPLEMENTACJE",
    description: "NodeJS, PyPy",
  },
  {
    id: 5,
    header: "BAZY DANYCH",
    description: "MySQL",
  },
  {
    id: 6,
    header: "FRAMEWORKI, BIBLIOTEKI, ITP.",
    description:
      "React, Next, Vite, Astro, Emotion, Webpack, Lodash, Framer-motion, React-querry, I18next, React-spring, ...",
  },
  {
    id: 7,
    header: "JĘZYK",
    description: "Polski, English - B2",
  },
];

export default skills;
