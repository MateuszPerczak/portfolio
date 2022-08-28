import type { FC } from "react";
import { Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Intro from "@sections/Intro";
import About from "@sections/About";
import Skills from "@sections/Skills";
import Projects from "@sections/Projects";
import Footer from "@components/footer/Footer";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<></>}>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </Suspense>
    </>
  );
};

export default AppContent;
