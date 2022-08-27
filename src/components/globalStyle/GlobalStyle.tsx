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
          /* outline: 1px dotted #dbce0d; */
        }
        body {
          font-family: "Sora";
          background: ${theme.background};
          color: ${theme.color};
          user-select: none;
        }
        #root {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          height: 100vh;
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
