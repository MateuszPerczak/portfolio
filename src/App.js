import { ThemeProvider } from "@emotion/react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import StylesProvider from "./Global/StylesProvider";
import { lazy, Suspense, useState, useEffect, createElement } from "react";
import { useReduceMotion } from "react-reduce-motion";
import { Globals } from "react-spring";
import routesToComponnetsMapper from "./Routes/routesToComponnetsMapper";
import Loader from "./Components/Loader/Loader";
import Card from "./Components/Card/Card";
import Page from "./Components/Page/Page";
import darkTheme from "./Themes/darkTheme";
import lightTheme from "./Themes/lightTheme";
import Pride from "./Components/Pride/Pride";
import useTheme from "./Hooks/useTheme";

const Nav = lazy(() => {
  return import("./Components/Nav/Nav");
});

const App = () => {
  const prefersReducedMotion = useReduceMotion();

  const theme = useTheme();

  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  const themes = { dark: darkTheme };

  return (
    <>
      <StylesProvider themes={themes} theme={"dark"} />
      <ThemeProvider theme={themes["dark"]}>
        <Pride />
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
                      routesToComponnetsMapper.settings.component
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
