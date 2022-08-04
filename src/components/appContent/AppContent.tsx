import type { FC } from "react";
import GlobalStyle from "../globalStyle/GlobalStyle";
import AboutMe from "@/pages/AboutMe";
import Footer from "@/pages/Footer";
import Skills from "@/pages/Skills";
import Nav from "@components/nav/Nav";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutMe />
      <Skills />
      <Footer />
    </>
  );
};

export default AppContent;
