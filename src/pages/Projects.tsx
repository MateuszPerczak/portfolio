import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import projects from "@/data/projects";

import styled from "@emotion/styled";

const Test = styled.div`
  padding: 20px;
  flex: 1;
  min-width: 200px;
  height: 200px;
  background-color: ${({ theme: { card } }) => card};
  box-shadow: 0 0 5px #00000066;
  border: 2px solid transparent;
  transition: border 200ms;
  &:hover {
    border: 2px solid ${({ theme: { accent } }) => accent};
  }
`;

const Projects: FC = (): JSX.Element => {
  return (
    <Page id="projects">
      <PageHeader header="PROJEKTY" description="CO ZROBIŁEM?" />
      <PageContent flexWrap>
        {projects.map((project) => (
          <Test key={project.id}>{project.name}</Test>
        ))}
      </PageContent>
    </Page>
  );
};

export default Projects;
