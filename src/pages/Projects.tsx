import type { FC } from "react";
import FlexContainer from "@components/flexContainer/FlexContainer";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import projects from "@/assets/projects";
import Project from "@components/project/Project";
import { animatedProjects, animatedProject } from "@animations/project";

const Projects: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader header="CO ZROBIŁEM?" description="PROJEKTY" />
      <FlexContainer gap={20} flexWrap variants={animatedProjects}>
        {projects.map(({ id, ...rest }) => (
          <Project key={id} {...rest} variants={animatedProject} />
        ))}
      </FlexContainer>
    </Page>
  );
};

export default Projects;
