import type { FC } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Nav from "@components/nav/Nav";
import AboutMe from "@/pages/AboutMe";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Footer from "@/pages/Footer";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default AppContent;
