import { Global, css } from "@emotion/react";

const StylesProvider = ({ theme }) => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: "Poppins", sans-serif;
          background: radial-gradient(
            ${theme.background},
            ${theme.backgroundDark}
          );
          color: ${theme.color};
        }
        #root {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: ${theme.background};
        }
        ::-webkit-scrollbar-thumb {
          background: ${theme.backgroundDark};
          border-radius: 4px;
        }
        ::selection {
          background: ${theme.color};
          color: ${theme.backgroundDark};
        }
      `}
    />
  );
};

export default StylesProvider;
