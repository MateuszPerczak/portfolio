import type { FC } from "react";
import Page from "@components/page/Page";
import Project from "@components/project/Project";
import { projects } from "@data/projects";
import PageHeader from "@components/pageHeader/PageHeader";
import NextButton from "@components/nextButton/NextButton";

const Home: FC = (): JSX.Element => {
  return (
    <Page>
      <PageHeader>
        <span>Hi 👋, I&apos;m Mateusz. I am a self-taught Web & Desktop Developer.</span>
        <NextButton to="/about" text="More about me" aria-label="More about me" />
      </PageHeader>
      {projects.map(({ ...rest }, index) => {
        return <Project key={`project-${index}`} {...rest} />;
      })}
    </Page>
  );
};

export default Home;
