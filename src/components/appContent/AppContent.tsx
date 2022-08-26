import type { FC } from "react";
import { Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Button from "@components/button/Button";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<>LOADING</>}></Suspense>
    </>
  );
};

export default AppContent;
