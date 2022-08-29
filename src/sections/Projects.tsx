import type { FC } from "react";
import Section from "@components/section/Section";
import ProjectsHeader from "@components/projectsHeader/ProjectsHeader";
import { animatedProjects } from "@animations/projects";
import ProjectsContent from "@components/projectsContent/ProjectsContent";

const Projects: FC = (): JSX.Element => {
  return (
    <Section
      variants={animatedProjects}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.7, once: true }}
    >
      <ProjectsHeader />
      <ProjectsContent />
    </Section>
  );
};

export default Projects;
