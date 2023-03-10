import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import type { FC } from "react";

const Home: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader header="Hi 👋, I'm Mateusz. I am a self-taught Web & Desktop Developer."/>
    </Page>
  );
};

export default Home;
