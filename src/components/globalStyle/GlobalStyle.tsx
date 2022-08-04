import { css, Global, Theme, useTheme } from "@emotion/react";
import { FC, memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  console.log("theme", theme);
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Gilroy";
          background-color: ${theme.background};
          color: ${theme.color};
        }
        #root {
          height: 100vh;
          display: grid;
          place-items: center;
        }
        @font-face {
          font-family: "Caros";
          font-style: normal;
          src: local("Caros");
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
