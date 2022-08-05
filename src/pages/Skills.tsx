import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";

const Skills: FC = (): JSX.Element => {
  return (
    <Page id="skills">
      <PageHeader header="UMIEJĘTNOŚCI" description="CO UMIEM?" />
    </Page>
  );
};

export default Skills;
