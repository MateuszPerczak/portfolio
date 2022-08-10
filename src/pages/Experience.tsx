import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import AnimatedExperience from "@/components/animatedExperience/animatedExperience";

const Experience: FC = (): JSX.Element => {
  return (
    <Page id="experience">
      <PageHeader header="DOŚWIADCZENIE" description="GDZIE BYŁEM?" />
      <PageContent flexDirection="column">
        <AnimatedExperience />
      </PageContent>
    </Page>
  );
};

export default Experience;
