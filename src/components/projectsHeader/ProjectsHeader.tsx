import type { FC } from "react";
import Header from "@components/header/Header";
import StyledProjectsHeader from "./ProjectsHeader.styles";

const ProjectsHeader: FC = (): JSX.Element => {
  return (
    <StyledProjectsHeader>
      <Header>My Projects</Header>
    </StyledProjectsHeader>
  );
};

export default ProjectsHeader;
