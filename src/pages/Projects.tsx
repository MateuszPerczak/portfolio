import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import projects from "@/data/projects";
import Project from "@/components/project/Project";

const Projects: FC = (): JSX.Element => {
  return (
    <Page id="projects">
      <PageHeader header="PROJEKTY" description="CO ZROBIŁEM?" />
      <PageContent flexWrap>
        {projects.map(({ id, ...rest }) => (
          <Project key={id} {...rest} />
        ))}
      </PageContent>
    </Page>
  );
};

export default Projects;
