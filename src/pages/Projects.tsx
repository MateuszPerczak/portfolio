import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";

const Projects: FC = (): JSX.Element => {
  return (
    <Page id="projects">
      <PageHeader header="PROJEKTY" description="CO ZROBIŁEM?" />
    </Page>
  );
};

export default Projects;
