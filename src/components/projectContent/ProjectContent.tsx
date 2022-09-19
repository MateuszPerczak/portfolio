import type { FC } from "react";
import StyledProjectContent from "./ProjectContent.styles";
import type { ProjectContentProps } from "./ProjectContent.types";

const ProjectContent: FC<ProjectContentProps> = ({
  image,
}: ProjectContentProps): JSX.Element => {
  return <StyledProjectContent image={image}></StyledProjectContent>;
};
export default ProjectContent;
