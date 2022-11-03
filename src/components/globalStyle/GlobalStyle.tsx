import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import type { FC } from "react";
import useWindowDimensions from "@hooks/useWindowDimensions";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, color, scrollbar, accent }: Theme = useTheme();
  const { height } = useWindowDimensions();

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px solid #b6fc03aa; */
        }
        body {
          display: flex;
          flex-direction: column;
          font-family: "Nunito";
          background: ${background};
          color: ${color};
          overflow: hidden;
          user-select: none;
          height: ${`${height}px`};
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          gap: 16px;
          overflow-y: scroll;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          @media (max-width: 768px) {
            width: 4px;
          }
          width: 6px;
          background-color: ${scrollbar};
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${accent};
          border-radius: 4px;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
