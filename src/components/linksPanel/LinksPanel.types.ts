import type { FC } from "react";

interface Link {
  title: string;
  url: string;
  icon: FC;
}

export interface LinksPanelProps {
  links: Link[];
  title?: string;
  justifyContent?: "center" | "flex-start" | "flex-end";
}
