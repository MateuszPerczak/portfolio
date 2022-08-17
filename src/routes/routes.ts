type Route = {
  id: number;
  path: string;
  name: string;
};

const routes: Route[] = [
  {
    id: 1,
    path: "/",
    name: "About",
  },
  {
    id: 2,
    path: "/",
    name: "Skills",
  },
  {
    id: 3,
    path: "/",
    name: "Projects",
  },
];

export default routes;
