export type Theme = Record<string, string>;

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fafafa",
    color: "#000",
    accent: "#d9114a",
    navbar: "#fafafaaa",
    scrollbar: "#fff",
  },
  dark: {
    background: "#282828",
    color: "#fff",
    accent: "#ea225b",
    navbar: "#282828aa",
    scrollbar: "#242424",
    shadow: "#212121",
    card: "#1a1a1a",
  },
};

export default themes;
