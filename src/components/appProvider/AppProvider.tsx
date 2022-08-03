import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import useTheme from "../../hooks/useTheme";
import { BrowserRouter } from "react-router-dom";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeObject, browserTheme, setbrowserTheme } = useTheme();

  return (
    <ThemeProvider theme={themeObject}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
export default AppProvider;
