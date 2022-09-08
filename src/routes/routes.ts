import type { FC } from "react";
import { lazy } from "react";
import Home from "../pages/Home";

const About = lazy(() => import("../pages/About"));
const Portfolio = lazy(() => import("../pages/Portfolio"));

type Route = {
  id: number;
  path: string;
  element: FC;
};

export const routes: Route[] = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  {
    id: 1,
    path: "/about",
    element: About,
  },
  {
    id: 1,
    path: "/portfolio",
    element: Portfolio,
  },
];
