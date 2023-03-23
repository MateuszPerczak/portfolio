import type { PropsWithChildren } from "react";

export type PageCardProps = PropsWithChildren<PageCardLayouts>;

export type PageCardLayouts = {
  flexDirection?: "column" | "row";
  //   gap?: number;
};
