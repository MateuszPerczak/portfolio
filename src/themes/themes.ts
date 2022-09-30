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
    accent: "#004477",
    scrollbar: "#f1f1f1",
    project: "#f1f1f1",
    projectHeader: "#eaeaea",
    footer: "#f1f1f1",
    shadow: "#00000022",
    inactive: "#505050",
  },
  dark: {
    background: "#252525",
    color: "#fff",
    nav: "#1e1e1edd",
    accent: "#00ccff",
    scrollbar: "#1e1e1e",
    project: "#1e1e1e",
    projectHeader: "#212121",
    footer: "#1e1e1e",
    shadow: "#00000033",
    inactive: "#808080",
  },
};

export default themes;
