import { css, Global } from "@emotion/react";
import { FC, memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
        }
        body {
          font-family: "PT Sans Caption", sans-serif;
          background-color: #000;
          color: #fff;
        }
        #root {
          height: 100vh;
          display: grid;
          place-items: center;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
