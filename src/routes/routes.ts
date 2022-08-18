type Route = {
  id: number;
  path: string;
  name: string;
};

const routes: Route[] = [
  {
    id: 1,
    path: "/",
    name: "O mnie",
  },
  {
    id: 2,
    path: "/",
    name: "Umiejętności",
  },
  {
    id: 3,
    path: "/",
    name: "Doświadczenie",
  },
  {
    id: 4,
    path: "/",
    name: "Projekty",
  },
  {
    id: 5,
    path: "/",
    name: "Kontakt",
  },
];

export default routes;
