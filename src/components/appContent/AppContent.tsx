import type { FC } from "react";
import { Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import SectionsWrapper from "@components/sectionsWrapper/SectionsWrapper";
import Intro from "@sections/Intro";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<></>}>
        <SectionsWrapper>
          <Intro />
        </SectionsWrapper>
      </Suspense>
    </>
  );
};

export default AppContent;
