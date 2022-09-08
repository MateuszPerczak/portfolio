import type { FC } from "react";
import Page from "@components/page/Page";
import PageHeader from "@components/pageHeader/PageHeader";
import PageArticle from "@components/pageArticle/PageArticle";

const About: FC = (): JSX.Element => {
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
      <PageHeader>About me</PageHeader>
      <PageArticle>
        Hi, I&apos;m Mateusz, a software developer from Poland. I&apos;ve been programing
        since 2014. I have a passion for creating web applications/desktop apps that are
        useful, easy to use, and beautiful 👀. I&apos;m always looking forward to
        improving my skills ✍️.
      </PageArticle>

      <PageArticle>
        In my spare time, I enjoy writing some code 🐢 while listening to music, playing
        games with my friends, and creating some tunes/music in Fl Studio 🎹.
      </PageArticle>
    </Page>
  );
};

export default About;
