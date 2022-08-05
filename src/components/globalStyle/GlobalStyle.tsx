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
          align-items: center;
          font-family: "Caros";
          background-color: ${theme.background};
          color: ${theme.color};
          overflow: hidden;
          width: 100%;
          height: 100vh;
        }
        #root {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding-left: 70px;
          scroll-behavior: smooth;
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 10px;
          background-color: ${theme.scrollbar};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.accent};
        }
        ::selection {
          background-color: ${theme.accent};
          color: ${theme.background};
        }
        @font-face {
          font-family: "Caros";
          font-style: normal;
          src: url("./fonts/Caros.woff") format("woff");
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
