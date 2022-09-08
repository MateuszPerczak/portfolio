import type { ProjectContentProps } from "@components/projectContent/ProjectContent.types";
import type { ProjectHeaderProps } from "@components/projectHeader/ProjectHeader.types";

export type ProjectProps = {
  header: ProjectHeaderProps;
  content: ProjectContentProps;
};
