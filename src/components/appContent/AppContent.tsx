import { FC, lazy, Suspense, useMemo } from "react";
import { useState } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Navbar from "@components/navbar/Navbar";

const AppContent: FC = (): JSX.Element => {
  const [page, setPage] = useState("About");

  const Component = useMemo(() => {
    return lazy(() => {
      return import(`../../pages/${page}`);
    });
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <Navbar setPage={setPage} />
      <Suspense fallback={<></>}>
        <Component />
      </Suspense>
    </>
  );
};

export default AppContent;
