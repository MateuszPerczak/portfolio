import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import type { FC } from "react";

const About: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader header="Coś o mnie" />
    </Page>
  );
};
export default About;
