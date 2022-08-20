import Page from "@/components/page/Page";
import PageHeader from "@/components/pageHeader/PageHeader";
import type { FC } from "react";

const About: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader header="KIM JESTEM?" description="O MNIE" />
    </Page>
  );
};

export default About;
