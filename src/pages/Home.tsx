import type { FC } from "react";
import Page from "@components/page/Page";
import Project from "@components/project/Project";
import { projects } from "../data/projects";
import PageHeader from "@components/pageHeader/PageHeader";
import NextButton from "@components/nextButton/NextButton";

const Home: FC = (): JSX.Element => {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.6,
      }}
    >
      <PageHeader>
        <span>Hi 👋, I&apos;m Mateusz. I am a self-taught Web & Desktop Developer.</span>
        <NextButton to="/about" text="More about me" aria-label="More about me" />
      </PageHeader>
      {projects.map(({ id, ...rest }) => {
        return <Project key={id} {...rest} />;
      })}
    </Page>
  );
};

export default Home;
