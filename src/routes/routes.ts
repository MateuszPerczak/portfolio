import type { FC, LazyExoticComponent } from "react";
import { lazy } from "react";

const About: LazyExoticComponent<FC> = lazy(() => import("../pages/About"));
const Skills: LazyExoticComponent<FC> = lazy(() => import("../pages/Skills"));
const Experience: LazyExoticComponent<FC> = lazy(() => import("../pages/Experience"));

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
    name: "O mnie",
    element: About,
  },
  {
    id: 2,
    path: "/skills",
    name: "Umiejętności",
    element: Skills,
  },
  {
    id: 3,
    path: "/experience",
    name: "Doświadczenie",
    element: Experience,
  },
  // {
  //   id: 4,
  //   path: "/",
  //   name: "Projekty",
  // },
  // {
  //   id: 5,
  //   path: "/",
  //   name: "Kontakt",
  // },
];

export default routes;
