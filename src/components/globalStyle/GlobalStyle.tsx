import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import type { FC } from "react";

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
          /* outline: 1px solid ${theme.accent}; */
        }
        body {
          display: grid;
          place-items: center;
          font-family: "Caros";
          background-color: ${theme.background};
          color: ${theme.color};
        }
        #root {
          height: 100vh;
          display: grid;
          place-items: center;
          overflow-x: hidden;
          max-width: 1920px;
          width: 100%;

          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: ${theme.accent};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
