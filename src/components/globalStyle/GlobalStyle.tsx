import { css, Global, Theme, useTheme } from "@emotion/react";
import useWindowDimensions from "@hooks/useWindowDimensions";
import type { FC } from "react";
import { memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, color }: Theme = useTheme();
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
          overflow-y: scroll;
          overflow-x: hidden;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
