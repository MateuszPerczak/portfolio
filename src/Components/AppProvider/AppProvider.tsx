import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { themeObject } = useTheme();

  return (
    <ThemeProvider theme={themeObject}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;
