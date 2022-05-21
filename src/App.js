import { Global, css, ThemeProvider } from "@emotion/react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useState, useEffect, createElement } from "react";
import { useReduceMotion } from "react-reduce-motion";
import useSystemTheme from "use-system-theme";
import { Globals } from "react-spring";
import routesToComponnetsMapper from "./Routes/routesToComponnetsMapper";

import Loader from "./Components/Loader/Loader";
import Card from "./Components/Card/Card";
import Page from "./Components/Page/Page";

import darkTheme from "./Themes/darkTheme";
import lightTheme from "./Themes/lightTheme";

const Nav = lazy(() => {
  return import("./Components/Nav/Nav");
});

const App = () => {
  const [theme, setTheme] = useState("light");
  const [useDarkMode, setDarkMode] = useState(false);

  const themes = {
    light: lightTheme,
    dark: darkTheme,
  };

  useEffect(() => {
    setTheme(useDarkMode ? "dark" : "light");
  }, [useDarkMode]);

  const systemTheme = useSystemTheme(true);
  useEffect(() => {
    setTheme(systemTheme);
    systemTheme === "dark" ? setDarkMode(true) : setDarkMode(false);
  }, [systemTheme]);

  const prefersReducedMotion = useReduceMotion();
  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: "Poppins", sans-serif;
            background: radial-gradient(
              ${themes[theme].background},
              ${themes[theme].backgroundDark}
            );
            color: ${themes[theme].color};
          }
          #root {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          }
          @font-face {
            font-family: "Segoe Fluent Icons";
            src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
          }
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: ${themes[theme].background};
          }
          ::-webkit-scrollbar-thumb {
            background: ${themes[theme].backgroundDark};
            border-radius: 4px;
          }
          ::selection {
            background: ${themes[theme].color};
            color: ${themes[theme].backgroundDark};
          }
        `}
      />
      <ThemeProvider theme={themes[theme]}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Card>
              <Nav />
              <Page>
                <Routes>
                  <Route
                    path={routesToComponnetsMapper.aboutMe.route}
                    element={createElement(
                      routesToComponnetsMapper.aboutMe.component
                    )}
                  />
                  <Route
                    path={routesToComponnetsMapper.skills.route}
                    element={createElement(
                      routesToComponnetsMapper.skills.component
                    )}
                  />
                  <Route
                    path={routesToComponnetsMapper.projects.route}
                    element={createElement(
                      routesToComponnetsMapper.projects.component
                    )}
                  />
                  <Route
                    path={routesToComponnetsMapper.contact.route}
                    element={createElement(
                      routesToComponnetsMapper.contact.component
                    )}
                  />
                  <Route
                    path={routesToComponnetsMapper.experience.route}
                    element={createElement(
                      routesToComponnetsMapper.experience.component
                    )}
                  />
                  <Route
                    path={routesToComponnetsMapper.settings.route}
                    element={createElement(
                      routesToComponnetsMapper.settings.component,
                      { useDarkMode, setDarkMode }
                    )}
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Page>
            </Card>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
