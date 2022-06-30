import { Global, css, useTheme } from "@emotion/react";

const StyleProvider = () => {
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
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 10px;

          width: 100%;
          height: 100%;
        }
      `}
    />
  );
};

export default StyleProvider;
