import type { FC } from "react";
import Home from "../pages/Home";

type Route = {
  id: number;
  path: string;
  element: FC;
};

export const routes: Route[] = [
  {
    id: 1,
    path: "/",
    element: Home,
  },
];
