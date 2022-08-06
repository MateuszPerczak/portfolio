import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageContent from "@/components/pageContent/PageContent";

const Experience: FC = (): JSX.Element => {
  return (
    <Page id="experience">
      <PageHeader header="DOŚWIADCZENIE" description="GDZIE BYŁEM?" />
      <PageContent flexWrap flexDirection="column"></PageContent>
    </Page>
  );
};

export default Experience;
