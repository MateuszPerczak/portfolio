import type { FC } from "react";
import About from "../pages/About";
import Home from "../pages/Home";

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
];
