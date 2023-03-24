import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import type { FC } from "react";

const Blog: FC = (): JSX.Element => {
  return (
    <Page>
      <PageCard>
        <h1>What&apos;s new?</h1>
      </PageCard>
    </Page>
  );
};

export default Blog;
