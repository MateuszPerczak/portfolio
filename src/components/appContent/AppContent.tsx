import { FC, Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Navbar from "@components/navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "@components/pageNotFound/PageNotFound";
import routes from "@routes/routes";

const AppContent: FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Suspense fallback={<></>}>
        <Routes location={location}>
          {routes.map(({ id, path, element: Element }) => {
            return <Route key={id} path={path} element={<Element />} />;
          })}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppContent;
