import type { FC } from "react";
import StyledProject from "./Project.styles";
import type { ProjectProps } from "./Project.types";
import ProjectHeader from "@components/projectHeader/ProjectHeader";
import ProjectContent from "@components/projectContent/ProjectContent";
import { projectAnimation } from "@animations/animations";

const Project: FC<ProjectProps> = ({ header, content }: ProjectProps): JSX.Element => {
  return (
    <StyledProject {...projectAnimation}>
      <ProjectHeader {...header} />
      <ProjectContent {...content} />
    </StyledProject>
  );
};

export default Project;
