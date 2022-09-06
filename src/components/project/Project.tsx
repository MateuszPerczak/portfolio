import type { FC } from "react";
import StyledProject from "./Project.styles";
import type { ProjectProps } from "./Project.types";
import ProjectHeader from "@components/projectHeader/ProjectHeader";

const Project: FC<ProjectProps> = ({ header }: ProjectProps): JSX.Element => {
  return (
    <StyledProject>
      <ProjectHeader {...header} />
    </StyledProject>
  );
};

export default Project;

//import NextButton from "@components/nextButton/NextButton";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
