import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import type { FC } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px dotted red; */
        }
        body {
          font-family: "Sora";
          background: ${theme.background};
          color: ${theme.color};
          user-select: none;
          overflow: hidden;
        }
        #root {
          width: 100%;
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-snap-type: y proximity;
          scroll-behavior: smooth;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        ::-webkit-scrollbar {
          width: 10px;
          background-color: ${theme.background};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.color};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
