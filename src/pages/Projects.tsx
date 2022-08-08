import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import projects from "@/data/projects";
import Project from "@/components/project/Project";
import PageBottom from "@/components/pageBottom/PageBottom";
import Button from "@/components/button/Button";

const Projects: FC = (): JSX.Element => {
  return (
    <Page id="projects">
      <PageHeader header="PROJEKTY" description="CO ZROBIŁEM?" />
      <PageContent flexWrap>
        {projects.map(({ id, ...rest }) => (
          <Project key={id} {...rest} />
        ))}
      </PageContent>
      <PageBottom>
        <Button href="">ZOBACZ WIĘCEJ PROJEKTÓW</Button>
      </PageBottom>
    </Page>
  );
};

export default Projects;
