import type { FC } from "react";
import StyledProject, { StyledProjectHeader } from "./Project.styles";
import { animatedProject } from "@animations/projects";
import type ProjectProps from "./Project.types";

const Project: FC<ProjectProps> = ({
  name,
  description,
  href,
}: ProjectProps): JSX.Element => {
  return (
    <StyledProject
      variants={animatedProject}
      whileHover={{ scale: 0.95 }}
      href={href}
      rel="noreferer noopener"
      target="_blank"
    >
      <StyledProjectHeader>{name}</StyledProjectHeader>
      {description}
    </StyledProject>
  );
};

export default Project;
