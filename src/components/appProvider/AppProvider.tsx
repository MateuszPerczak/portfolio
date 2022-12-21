import { ThemeProvider } from "@emotion/react";
import useTheme from "@hooks/useTheme";
import type { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
export default AppProvider;
