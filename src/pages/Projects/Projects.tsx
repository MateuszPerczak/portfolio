import Page from "@components/page/Page";
import Project from "@components/project/Project";
import type { ProjectProps } from "@components/project/Project.types";
import { type Variants } from "framer-motion";

import StyledProjectsAnimationProvider from "./Projects.styles";

const projects: ProjectProps[] = [
  {
    image: "./images/hardwareinfo.webp",
    name: "Hardwareinfo",
    type: "desktop",
    links: {
      repository: "https://github.com/MateuszPerczak/hardwareinfo",
    },
  },
  {
    image: "./images/sounder6.webp",
    name: "Sounder 6",
    type: "desktop",
    links: {
      repository: "https://github.com/MateuszPerczak/Sounder-6",
    },
  },
  {
    image: "./images/tictactoe.webp",
    name: "Tictactoe",
    type: "web",
    links: {
      repository: "./images/tictactoe",
      demo: "https://mateuszperczak.github.io/tictactoe/",
    },
  },
  {
    image: "./images/fontawesomepicker.webp",
    name: "Font awesome picker",
    type: "web",
    links: {
      repository: "https://github.com/MateuszPerczak/font-awesome-picker",
    },
  },
  {
    image: "",
    name: "Portfolio",
    type: "desktop",
    links: {
      repository: "https://github.com/MateuszPerczak/portfolio",
    },
  },
  {
    image: "./images/luix.webp",
    name: "Luix",
    type: "web",
    links: {
      repository: "https://github.com/MateuszPerczak/Luix",
      demo: "https://mateuszperczak.github.io/Luix/",
    },
  },
  {
    image: "./images/weather.webp",
    name: "Weather",
    type: "web",
    links: {
      repository: "https://github.com/MateuszPerczak/weather",
      demo: "https://mateuszperczak.github.io/weather/",
    },
  },
  {
    image: "./images/sounder.webp",
    name: "Sounder",
    type: "desktop",
    links: {
      repository: "https://github.com/MateuszPerczak/Sounder5",
    },
  },
  {
    image: "./images/tkdeb.webp",
    name: "Tkdeb",
    type: "desktop",
    links: {
      repository: "https://github.com/MateuszPerczak/TkDeb",
    },
  },
];

const providerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Projects = (): JSX.Element => {
  return (
    <Page>
      <StyledProjectsAnimationProvider
        initial="initial"
        animate="animate"
        variants={providerVariants}
      >
        {projects.map((props, index) => (
          <Project key={`project-${index}`} {...props} />
        ))}
      </StyledProjectsAnimationProvider>
    </Page>
  );
};

export default Projects;
