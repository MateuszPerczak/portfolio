import type { FC } from "react";
import Project from "@components/project/Project";
import StyledProjectsContent, {
  StyledProjectsContentButtons,
} from "./ProjectsContent.styles";
import projects from "@/data/projects";
import Button from "@components/button/Button";
import { animatedProject } from "@animations/projects";

const ProjectsContent: FC = (): JSX.Element => {
  return (
    <>
      <StyledProjectsContent>
        {projects.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </StyledProjectsContent>
      <StyledProjectsContentButtons>
        <Button
          href="https://github.com/MateuszPerczak?tab=repositories"
          variants={animatedProject}
        >
          SEE MORE PROJECTS
        </Button>
      </StyledProjectsContentButtons>
    </>
  );
};

export default ProjectsContent;
