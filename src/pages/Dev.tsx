import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import type { FC } from "react";

const Dev: FC = (): JSX.Element => {
  return (
    <Page>
      <PageCard>
        <h1>My projects</h1>
      </PageCard>
    </Page>
  );
};

export default Dev;
