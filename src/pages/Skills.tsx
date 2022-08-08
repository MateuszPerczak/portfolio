import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";
import AnimatedSkills from "@/components/animatedSkills/AnimatedSkills";

const Skills: FC = (): JSX.Element => {
  return (
    <Page id="skills">
      <PageHeader header="UMIEJĘTNOŚCI" description="CO UMIEM?" />
      <PageContent>
        <AnimatedSkills />
      </PageContent>
    </Page>
  );
};

export default Skills;
