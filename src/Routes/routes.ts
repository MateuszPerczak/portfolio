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

const Contact: LazyExoticComponent<FC> = lazy(
  (): Promise<typeof import("../Pages/Contact")> => {
    return new Promise((resolve) => {
      resolve(import("../Pages/Contact"));
    });
  }
);

const Projects: LazyExoticComponent<FC> = lazy(
  (): Promise<typeof import("../Pages/Projects")> => {
    return new Promise((resolve) => {
      resolve(import("../Pages/Projects"));
    });
  }
);

const Experience: LazyExoticComponent<FC> = lazy(
  (): Promise<typeof import("../Pages/Experience")> => {
    return new Promise((resolve) => {
      resolve(import("../Pages/Experience"));
    });
  }
);

type routeType = {
  path: string;
  component: FC;
  icon: string;
  name: string;
  position: RoutePosition;
};

export enum RoutePosition {
  Top = "top",
  Bottom = "bottom",
}

const routes: routeType[] = [
  {
    path: "/",
    component: AboutMe,
    icon: "\uE13D",
    name: "aboutMe",
    position: RoutePosition.Top,
  },
  {
    path: "/skills",
    component: Skills,
    icon: "\uE7BE",
    name: "skills",
    position: RoutePosition.Top,
  },
  {
    path: "/experience",
    component: Experience,
    icon: "\uE821",
    name: "experience",
    position: RoutePosition.Top,
  },
  {
    path: "/projects",
    component: Projects,
    icon: "\uE74C",
    name: "projects",
    position: RoutePosition.Top,
  },
  {
    path: "/contact",
    component: Contact,
    icon: "\uE715",
    name: "contact",
    position: RoutePosition.Top,
  },
  {
    path: "/preferences",
    component: Preferences,
    icon: "\uE15E",
    name: "preferences",
    position: RoutePosition.Bottom,
  },
];

export default routes;
