import type { PropsWithChildren } from "react";

export type PageCardProps = PropsWithChildren<PageCardLayouts>;

export type PageCardLayouts = {
  flexDirection?: "column" | "row";
  alignItems?: "center" | "flex-start" | "flex-end";
  //   gap?: number;
};
