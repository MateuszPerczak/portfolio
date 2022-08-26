import type { FC } from "react";
import { Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";

import Home from "@/articles/Home";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<>LOADING</>}>
        <Home />
      </Suspense>
    </>
  );
};

export default AppContent;
