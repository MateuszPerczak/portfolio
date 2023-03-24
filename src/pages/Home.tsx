import LinksPanel from "@components/linksPanel/LinksPanel";
import Page from "@components/page/Page";
import PageCard from "@components/pageCard/PageCard";
import { ReactComponent as Github } from "@icons/github.svg";
import { ReactComponent as LinkedIn } from "@icons/linkedin.svg";
import type { Variants } from "framer-motion";
import type { FC } from "react";

export const transition: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home: FC = (): JSX.Element => {
  return (
    <Page variants={transition} initial="initial" animate="animate" exit="exit">
      <PageCard flexDirection="column">
        <h1>Hi 👋, I&apos;m Mateusz. I am a self-taught Web & Desktop Developer.</h1>
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
      <PageCard flexDirection="column">1</PageCard>
    </Page>
  );
};

export default Home;
