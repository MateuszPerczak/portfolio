import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "../GlobalStyle/GlobalStyle";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<>LOADER</>}>
        <Routes>
          <Route path="/" element={<>sdesdsds</>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default AppContent;
