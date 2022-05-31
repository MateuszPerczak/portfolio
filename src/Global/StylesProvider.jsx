import { Global, css } from "@emotion/react";

const StylesProvider = ({ themes, theme }) => {
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
            ${themes[theme].background},
            ${themes[theme].backgroundDark}
          );

          color: ${themes[theme].color};
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
          background: ${themes[theme].background};
        }
        ::-webkit-scrollbar-thumb {
          background: ${themes[theme].backgroundDark};
          border-radius: 4px;
        }
        ::selection {
          background: ${themes[theme].color};
          color: ${themes[theme].backgroundDark};
        }
      `}
    />
  );
};

export default StylesProvider;
