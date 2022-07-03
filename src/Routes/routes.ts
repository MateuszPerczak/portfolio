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

const Preferences: LazyExoticComponent<FC> = lazy(
  (): Promise<typeof import("../Pages/Preferences")> => {
    return new Promise((resolve) => {
      resolve(import("../Pages/Preferences"));
    });
  }
);

type routeType = {
  path: string;
  component: FC;
  icon: string;
  name: string;
  position: string;
};

const routes: routeType[] = [
  {
    path: "/",
    component: AboutMe,
    icon: "\uE13D",
    name: "aboutMe",
    position: "top",
  },
  {
    path: "/skills",
    component: Skills,
    icon: "\uE7BE",
    name: "skills",
    position: "top",
  },
  {
    path: "/experience",
    component: AboutMe,
    icon: "\uE821",
    name: "experience",
    position: "top",
  },
  {
    path: "/projects",
    component: AboutMe,
    icon: "\uE74C",
    name: "projects",
    position: "top",
  },
  {
    path: "/contact",
    component: AboutMe,
    icon: "\uE715",
    name: "contact",
    position: "top",
  },
  {
    path: "/preferences",
    component: Preferences,
    icon: "\uE15E",
    name: "preferences",
    position: "bottom",
  },
];

export default routes;
