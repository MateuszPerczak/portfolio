import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import useConsole from "../../Hooks/useConsole";
import useTheme from "../../Hooks/useTheme";
import ThemeContext from "../../Contexts/ThemeContext";
import { MotionConfig } from "framer-motion";
import { LazyMotion, domAnimation } from "framer-motion";

const AppProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { themeObject, browserTheme, setbrowserTheme } = useTheme();

  useConsole();

  return (
    <ThemeProvider theme={themeObject}>
      <ThemeContext.Provider value={{ browserTheme, setbrowserTheme }}>
        <MotionConfig reducedMotion="user">
          <LazyMotion features={domAnimation}>
            <BrowserRouter>{children}</BrowserRouter>
          </LazyMotion>
        </MotionConfig>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
