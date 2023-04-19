import { css, Global, type Theme, useTheme } from "@emotion/react";
import { memo } from "react";

const GlobalStyle = (): JSX.Element => {
  const { background, color, scrollbar, scrollbarActive }: Theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px solid #0bd871aa; */
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
        }
        body {
          display: flex;
          flex-direction: column;
          font-family: "Nunito";
          background: ${background};
          color: ${color};
          overflow-y: scroll;
          overflow-x: hidden;
          user-select: none;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1 0 auto;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${background};
        }
        ::-webkit-scrollbar-thumb {
          background: ${scrollbar};
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${scrollbarActive};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
