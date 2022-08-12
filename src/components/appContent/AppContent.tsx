import type { FC } from "react";
import GlobalStyle from "@components/globalStyle/GlobalStyle";
import Navbar from "@components/navbar/Navbar";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
};

export default AppContent;
