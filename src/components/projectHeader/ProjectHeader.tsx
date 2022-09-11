import type { FC } from "react";
import StyledProjectHeader, {
  StyledProjectTitle,
  StyledProjectType,
  StyledProjectWrapper,
} from "./ProjectHeader.styles";
import type { ProjectHeaderProps } from "./ProjectHeader.types";
import ProjectButton from "@components/projectButton/ProjectButton";

const ProjectHeader: FC<ProjectHeaderProps> = ({
  name,
  type,
  href,
}: ProjectHeaderProps): JSX.Element => {
  return (
    <StyledProjectHeader>
      <StyledProjectWrapper>
        <StyledProjectTitle>{name}</StyledProjectTitle>
        <StyledProjectType>{type}</StyledProjectType>
      </StyledProjectWrapper>
      <ProjectButton text="Project details" aria-label="Project details" href={href} />
    </StyledProjectHeader>
  );
};
export default ProjectHeader;
