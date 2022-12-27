import Footer from "@components/footer/Footer";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Loader from "@components/loader/Loader";
import Nav from "@components/nav/Nav";
import { routes } from "@routes/routes";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Suspense fallback={<Loader />}>
        <AnimatePresence>
          <Routes>
            {routes.map(({ id, element: Element, ...rest }) => (
              <Route key={`route-${id}`} element={<Element />} {...rest} />
            ))}
            <Route path="*" element={<Loader />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppContent;
