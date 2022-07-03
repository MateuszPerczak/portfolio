import { FC } from "react";

import AboutMe from "../Pages/AboutMe";

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
    component: AboutMe,
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
