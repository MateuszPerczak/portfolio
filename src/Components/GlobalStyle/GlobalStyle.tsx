import { css, Global, Theme, useTheme } from "@emotion/react";
import { FC, memo } from "react";

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
        }
        body {
          font-family: "Poppins", sans-serif;
          background-color: ${theme.background};
          color: ${theme.color};
        }
        #root {
          height: 100vh;
          display: grid;
          place-items: center;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
