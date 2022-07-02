import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "../../Themes/themes.json";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={theme["dark"]}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;
