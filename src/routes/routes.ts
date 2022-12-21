import type { FC } from "react";
import { lazy } from "react";

type Route = {
  id: number;
  path: string;
  element: FC;
};

export const routes: Route[] = [];
