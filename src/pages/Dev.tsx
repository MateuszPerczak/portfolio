import AnimationProvider from "@components/animationProvider/AnimationProvider";
import Page from "@components/page/Page";
import Project from "@components/project/Project";
import type { ProjectProps } from "@components/project/Project.types";
import StackPanel from "@components/stackPanel/StackPanel";
import { type Variants } from "framer-motion";

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

const Dev = (): JSX.Element => {
  return (
    <Page>
      <AnimationProvider initial="initial" animate="animate" variants={providerVariants}>
        <StackPanel display="flex" flexWrap="wrap" gap={20} padding={20}>
          {projects.map((props, index) => (
            <Project key={index} {...props} />
          ))}
        </StackPanel>
      </AnimationProvider>
    </Page>
  );
};

export default Dev;
