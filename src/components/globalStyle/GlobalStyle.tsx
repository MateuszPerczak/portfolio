import { css, Global, Theme, useTheme } from "@emotion/react";
import { FC, memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  //const theme: Theme = useTheme();
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
          font-family: "Poppins", sans-serif;
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
