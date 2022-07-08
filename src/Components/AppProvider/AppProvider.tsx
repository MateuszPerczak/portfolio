import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";
import ThemeContext from "../../Contexts/ThemeContext";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { themeObject, browserTheme, setbrowserTheme } = useTheme();

  return (
    <ThemeProvider theme={themeObject}>
      <ThemeContext.Provider value={{ browserTheme, setbrowserTheme }}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
