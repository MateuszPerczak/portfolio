import type { FC, LazyExoticComponent } from "react";
import { lazy } from "react";

const About: LazyExoticComponent<FC> = lazy(() => import("../pages/About"));
const Skills: LazyExoticComponent<FC> = lazy(() => import("../pages/Skills"));
const Projects: LazyExoticComponent<FC> = lazy(() => import("../pages/Projects"));

type Route = {
  id: number;
  path: string;
  name: string;
  element: FC;
};

const routes: Route[] = [
  {
    id: 1,
    path: "/",
    name: "O MNIE",
    element: About,
  },
  {
    id: 2,
    path: "/skills",
    name: "UMIEJĘTNOŚCI",
    element: Skills,
  },
  {
    id: 3,
    path: "/projects",
    name: "PROJEKTY",
    element: Projects,
  },
];

export default routes;
