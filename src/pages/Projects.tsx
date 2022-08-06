import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageSection from "@/components/pageSection/PageSection";
import PageContent from "@/components/pageContent/PageContent";

import styled from "@emotion/styled";

const Test = styled.div`
  padding: 20px;
  flex: 1;
  min-width: 200px;
  height: 200px;
  background-color: ${({ theme: { card } }) => card};
`;

const Projects: FC = (): JSX.Element => {
  return (
    <Page id="projects">
      <PageHeader header="PROJEKTY" description="CO ZROBIŁEM?" />
      <PageContent>
        <PageSection header="TYPESCRIPT">
          <Test></Test>
          <Test></Test>
          <Test></Test>
        </PageSection>
        <PageSection header="JAVASCRIPT">
          <Test></Test>
          <Test></Test>
        </PageSection>
        <PageSection header="PYTHON">
          <Test></Test>
        </PageSection>
      </PageContent>
    </Page>
  );
};

export default Projects;
