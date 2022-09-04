import type { FC } from "react";
import { Suspense } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import PageNotFound from "@components/pageNotFound/PageNotFound";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "@routes/routes";
import Nav from "@components/nav/Nav";

const AppContent: FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Suspense fallback={<></>}>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            {routes.map(({ id, element: Element, ...rest }) => {
              return <Route key={id} element={<Element />} {...rest} />;
            })}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default AppContent;
