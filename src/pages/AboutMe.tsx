import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";

const AboutMe: FC = (): JSX.Element => {
  return (
    <Page id="about">
      <PageHeader header="O MNIE" description="KIM JESTEM?" />
      <PageContent></PageContent>
    </Page>
  );
};

export default AboutMe;
