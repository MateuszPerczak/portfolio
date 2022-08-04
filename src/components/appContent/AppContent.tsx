import type { FC } from "react";

import GlobalStyle from "../globalStyle/GlobalStyle";
import Page from "../page/Page";

const AppContent: FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Page>Whad I Do</Page>
    </>
  );
};

export default AppContent;
