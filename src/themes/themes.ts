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
    accent: "#0077ff",
    scrollbar: "#f1f1f1",
    project: "#f1f1f1",
    projectHeader: "#eaeaea",
    footer: "#f1f1f1",
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
  },
};

export default themes;

// scrollbar: "#242424",
//     accent: "#0077aa",

//     logo: "linear-gradient(90deg, #0077ff, #00ccff)",
//     navbar: "#212121",
//     navbarItem: "#808080",

//     link: "#808080",

//     shadow: "#00000066",
//     card: "#1a1a1a",
// accent: "#D9114A",
// navbar: "#fafafaaa",
// scrollbar: "#eee",
// shadow: "#00000033",
// card: "#eee",
