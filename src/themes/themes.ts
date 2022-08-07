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
    description: "#333",
    accent: "#d9114a",
    navbar: "#fafafaaa",
    scrollbar: "#fff",
  },
  dark: {
    background: "#282828",
    color: "#fff",
    description: "#bbb",
    accent: "#3b4ca6",
    navbar: "#282828aa",
    scrollbar: "#242424",
    shadow: "#00000066",
    card: "#1a1a1a",
  },
};

export default themes;
