import { FC, Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Navbar from "@components/navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";

const AppContent: FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Suspense fallback={<></>}>
        <Routes location={location}>
          <Route path="*" element={<>YOOOOOo</>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppContent;
