import { projectsWrapper } from "@animations/animations";
import type { FC, PropsWithChildren } from "react";
import StyledProjectsWrapper from "./ProjectsWrapper.styles";

const ProjectsWrapper: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return <StyledProjectsWrapper {...projectsWrapper}>{children}</StyledProjectsWrapper>;
};

export default ProjectsWrapper;
