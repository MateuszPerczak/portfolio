import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";

const Experience: FC = (): JSX.Element => {
  return (
    <Page id="experience">
      <PageHeader header="DOŚWIADCZENIE" description="GDZIE BYŁEM?" />
    </Page>
  );
};

export default Experience;
