import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import Frameworks from "@components/frameworks/Frameworks";
import PageArticle from "@components/pageArticle/PageArticle";

const Portfolio: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader>About this site</PageHeader>
      <PageArticle>
        In short, this is the fifth version of my portfolio which includes a newly
        designed navigation and content presentation with subtle animations across the
        whole web page.
      </PageArticle>
      <PageArticle>
        The biggest difference between the old and new versions is the use of Vite, which
        greatly improves bundle size and overall performance.
      </PageArticle>
      <Frameworks />
    </Page>
  );
};

export default Portfolio;
