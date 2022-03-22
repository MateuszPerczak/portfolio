import { Global, css, ThemeProvider } from "@emotion/react";
import useColorTheme from "../hooks/useColorTheme";
import consoleInit from "../scripts/consoleInit";
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
  const { theme } = useColorTheme();
  useEffect(() => {
    consoleInit();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: "Catamaran", sans-serif;
            background: ${theme.background};
            color: ${theme.color};
          }
          ::selection {
            color: ${theme.color};
            background: ${theme.backgroundDark};
          }
          ::-webkit-scrollbar {
            width: 4px;
          }
          ::-webkit-scrollbar-track {
            background: ${theme.background};
          }
          ::-webkit-scrollbar-thumb {
            background: ${theme.border};
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: ${theme.backgroundDark};
          }
          }
          #__next {
            display: flex;
          }
        `}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
