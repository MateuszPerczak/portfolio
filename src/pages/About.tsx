import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageArticle from "@components/pageArticle/PageArticle";
import Skills from "@components/skills/Skills";

const About: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader>About me</PageHeader>
      <PageArticle>
        Hi, I&apos;m Mateusz, a software developer from Poland. I&apos;ve been programming
        since 2014. I have a passion for creating web applications/desktop apps that are
        useful, easy to use, and beautiful.
      </PageArticle>
      <Skills />
    </Page>
  );
};

export default About;
