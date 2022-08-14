import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import PageBottom from "@/components/pageBottom/PageBottom";
import Button from "@/components/button/Button";
import AnimatedProjects from "@/components/animatedProjects/AnimatedProjects";

const Projects: FC = (): JSX.Element => {
  return (
    <Page id="projects">
      <PageHeader header="PROJEKTY" description="CO ZROBIŁEM?" />
      <PageContent flexWrap>
        <AnimatedProjects />
      </PageContent>
      <PageBottom>
        <Button href="https://github.com/MateuszPerczak?tab=repositories">
          ZOBACZ WIĘCEJ PROJEKTÓW
        </Button>
      </PageBottom>
    </Page>
  );
};

export default Projects;
