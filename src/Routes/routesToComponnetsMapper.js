import { lazy } from "react";

const Settings = lazy(() => {
  return import("../Pages/Settings");
});
const AboutMe = lazy(() => {
  return import("../Pages/AboutMe");
});
const Skills = lazy(() => {
  return import("../Pages/Skills");
});
const Projects = lazy(() => {
  return import("../Pages/Projects");
});
const Experience = lazy(() => {
  return import("../Pages/Experience");
});
const Contact = lazy(() => {
  return import("../Pages/Contact");
});

const routesToComponnetsMapper = {
  aboutMe: { route: "/", component: AboutMe },
  skills: { route: "/skills", component: Skills },
  projects: { route: "/projects", component: Projects },
  experience: { route: "/experience", component: Experience },
  contact: { route: "/contact", component: Contact },
  settings: { route: "/settings", component: Settings },
};

export default routesToComponnetsMapper;
