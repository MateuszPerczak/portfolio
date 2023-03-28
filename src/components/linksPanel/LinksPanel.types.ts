import type { FC } from "react";

type Link = {
  title: string;
  url: string;
  icon: FC;
};

export type LinksPanelProps = {
  links: Link[];
  title?: string;
  justifyContent?: "center" | "flex-start" | "flex-end";
};
