import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={{}}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;
