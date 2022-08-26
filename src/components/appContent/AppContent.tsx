import type { FC } from "react";
import { Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Intro from "@components/intro/Intro";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<>LOADING</>}>
        <Intro />
      </Suspense>
    </>
  );
};

export default AppContent;
