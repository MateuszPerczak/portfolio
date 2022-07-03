import { FC, lazy, LazyExoticComponent } from "react";

const AboutMe: LazyExoticComponent<FC> = lazy(
  (): Promise<typeof import("../Pages/AboutMe")> => {
    return new Promise((resolve) => {
      resolve(import("../Pages/AboutMe"));
    });
  }
);
const Skills: LazyExoticComponent<FC> = lazy(
  (): Promise<typeof import("../Pages/Skills")> => {
    return new Promise((resolve) => {
      resolve(import("../Pages/Skills"));
    });
  }
);

type routeType = {
  path: string;
  component: FC;
  icon: string;
  name: string;
};

const routes: routeType[] = [
  {
    path: "/",
    component: AboutMe,
    icon: "\uE13D",
    name: "aboutMe",
  },
  {
    path: "/skills",
    component: Skills,
    icon: "\uE7BE",
    name: "skills",
  },
  {
    path: "/experience",
    component: AboutMe,
    icon: "\uE821",
    name: "experience",
  },
  {
    path: "/projects",
    component: AboutMe,
    icon: "\uE74C",
    name: "projects",
  },
  {
    path: "/contact",
    component: AboutMe,
    icon: "\uE715",
    name: "contact",
  },
];

export default routes;
