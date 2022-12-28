export type Theme = Record<string, string>;

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fff",
    color: "#000",
    nav: "#f1f1f1aa",
    card: "#f1f1f1",
    innerCard: "#fff",
  },
  dark: {
    scrollbar: "#262626",
    scrollbarActive: "#313131",
    background: "#1a1a1a",
    color: "#fff",
    nav: "#1a1a1a",
    navButton: "#313131",
    card: "#2c2c2c",
    innerCard: "#232323",
    border: "#212121",
    shadow: "#11111133",
    accent: "#aaa",
  },
};

export default themes;
