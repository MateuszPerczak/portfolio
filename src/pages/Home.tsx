import Header from "@components/header/Header";
import LinksPanel from "@components/linksPanel/LinksPanel";
import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import TextWrapper from "@components/textWrapper/TextWrapper";
import { ReactComponent as Github } from "@icons/github.svg";
import { ReactComponent as LinkedIn } from "@icons/linkedin.svg";
import type { FC } from "react";

const Home: FC = (): JSX.Element => {
  return (
    <Page>
      <PageCard flexDirection="column">
        <Header>
          Hi 👋, I&apos;m Mateusz. I am a self-taught Web & Desktop Developer.
        </Header>
        <LinksPanel
          title="You can reach me via:"
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
      <PageCard alignItems="center">
        <h2>#1</h2>
        <TextWrapper>
          <span className="description">This a test card</span>
          <span className="ps">☠️</span>
        </TextWrapper>
      </PageCard>
      <PageCard alignItems="center">
        <h2>#2</h2>
        <TextWrapper>
          <span className="description">Hello again</span>
          <span className="ps">Never gonna give u up</span>
        </TextWrapper>
      </PageCard>
    </Page>
  );
};

export default Home;
