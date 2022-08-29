import type { FC } from "react";
import Header from "@components/header/Header";
import StyledProjectsHeader from "./ProjectsHeader.styles";
import {
  animatedProjectsHeaderLeft,
  animatedProjectsHeaderRight,
} from "@animations/projects";

const ProjectsHeader: FC = (): JSX.Element => {
  return (
    <StyledProjectsHeader>
      <Header variants={animatedProjectsHeaderLeft}>My</Header>
      <Header variants={animatedProjectsHeaderRight}>Projects</Header>
    </StyledProjectsHeader>
  );
};

export default ProjectsHeader;
