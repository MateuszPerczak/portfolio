import { ThemeProvider } from "@emotion/react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import StylesProvider from "./Global/StylesProvider";
import { lazy, Suspense, useEffect, createElement } from "react";
import { useReduceMotion } from "react-reduce-motion";
import { Globals } from "react-spring";
import routesToComponnetsMapper from "./Routes/routesToComponnetsMapper";
import Loader from "./Components/Loader/Loader";
import Card from "./Components/Card/Card";
import Page from "./Components/Page/Page";
import useSystemTheme from "react-use-system-theme";
import useLocalStorage from "use-local-storage";
import lightTheme from "./Themes/lightTheme";
import darkTheme from "./Themes/darkTheme";

const Nav = lazy(() => {
  return import("./Components/Nav/Nav");
});

const App = () => {
  const prefersReducedMotion = useReduceMotion();

  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  const systemTheme = useSystemTheme();

  const themes = {
    dark: darkTheme,
    light: lightTheme,
    system: systemTheme === "light" ? lightTheme : darkTheme,
  };

  const [theme, setTheme] = useLocalStorage("theme", "system");

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <StylesProvider />
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
                      { theme, setTheme }
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
