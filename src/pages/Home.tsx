import LinksPanel from "@components/linksPanel/LinksPanel";
import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import PageHeader from "@components/pageHeader/PageHeader";
import { ReactComponent as Github } from "@icons/github.svg";
import { ReactComponent as LinkedIn } from "@icons/linkedin.svg";
import type { FC } from "react";

const Home: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader header="Hi 👋, I'm Mateusz. I am a self-taught Web & Desktop Developer.">
        <LinksPanel
          links={[
            {
              icon: Github,
              title: "My Github",
              url: "https://github.com/MateuszPerczak",
            },
            {
              icon: LinkedIn,
              title: "My Linkedin",
              url: "https://www.linkedin.com/in/mateuszperczak/",
            },
          ]}
        />
      </PageHeader>
      <PageCard flexDirection="row">
        <h1>1</h1>
        <h2>2</h2>
        <h3>3</h3>
        <h4>4</h4>
        <h5>5</h5>
      </PageCard>
      <PageCard flexDirection="column">
        <h1>Hi 👋, I'm Mateusz. I am a self-taught Web & Desktop Developer.</h1>
        <LinksPanel
          links={[
            {
              icon: Github,
              title: "My Github",
              url: "https://github.com/MateuszPerczak",
            },
            {
              icon: LinkedIn,
              title: "My Linkedin",
              url: "https://www.linkedin.com/in/mateuszperczak/",
            },
          ]}
        />
      </PageCard>
    </Page>
  );
};

export default Home;
