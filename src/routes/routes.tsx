import App from "@components/app/App";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const Dev = lazy(() => import("../pages/Dev"));
const PageNotFound = lazy(() => import("../components/pageNotFound/PageNotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/dev",
        element: <Dev />,
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);