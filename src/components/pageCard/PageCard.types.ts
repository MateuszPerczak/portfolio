export interface PageCardProps extends PageCardLayouts {
  children: React.ReactNode;
}

export interface PageCardLayouts {
  flexDirection?: "column" | "row";
  alignItems?: "center" | "flex-start" | "flex-end";
  //   gap?: number;
}
