export type Theme = Record<string, string>;

type Themes = Record<string, Theme>;

const themes: Themes = {
  light: {
    background: "#fafafa",
    color: "#000",
    accent: "#d9114a",
    navbar: "#fff",
    scrollbar: "#fff",
  },
  dark: {
    background: "#282828",
    color: "#fff",
    accent: "#ea225b",
    navbar: "#282828aa",
    scrollbar: "#242424",
  },
};

export default themes;
