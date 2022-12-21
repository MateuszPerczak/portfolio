import GlobalStyle from "@components/globalStyle/GlobalStyle";
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
      <div
        style={{
          display: "flex",
          flex: "1 1 100%",
        }}
      ></div>
    </>
  );
};

export default AppContent;
