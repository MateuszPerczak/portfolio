import GlobalStyle from "@components/globalStyle/GlobalStyle";
import { routes } from "@routes/routes";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default AppContent;
