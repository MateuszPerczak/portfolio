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
          /* outline: 1px solid ${theme.accent}; */
        }
        body {
          display: flex;
          flex-direction: column;
          font-family: "Nunito";
          background: ${theme.background};
          color: ${theme.color};
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1 1 100%;
          overflow-y: auto;
          overflow-x: hidden;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        ::-webkit-scrollbar {
          width: 10px;
          background-color: ${theme.scrollbar};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.accent};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
