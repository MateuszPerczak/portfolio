import type { FC } from "react";
import { Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Intro from "@sections/Intro";
import About from "@sections/About";
import Skills from "@sections/Skills";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<></>}>
        <Intro />
        <About />
        <Skills />
      </Suspense>
    </>
  );
};

export default AppContent;
