import type { ProjectProps } from "@components/project/Project.types";

type ProjectWithId = ProjectProps & { id: number };

export const projects: ProjectWithId[] = [
  {
    id: 0,
    header: {
      name: "Portfolio",
      type: "Website",
      to: "/portfolio",
    },
  },
];
