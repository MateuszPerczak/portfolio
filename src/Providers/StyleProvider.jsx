import { Global, css, useTheme } from "@emotion/react";

const StylesProvider = () => {
  const theme = useTheme();
  return (
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
          font-family: "Roboto", sans-serif;
          background: ${theme.background};
          color: ${theme.color};
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        #root {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}
    />
  );
};

export default StylesProvider;
