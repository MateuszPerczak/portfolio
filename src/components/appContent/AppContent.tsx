import type { FC } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Nav from "@components/nav/Nav";
import AboutMe from "@/pages/AboutMe";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Footer from "@components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <Cursor />
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
