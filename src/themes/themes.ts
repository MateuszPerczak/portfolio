import type { Theme } from "@emotion/react";

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    scrollbar: "",
    scrollbarActive: "",
    nav: "",
    navItem: "",
    navItemActive: "",
    background: "",
    color: "",
    border: "",
    shadow: "",
    spinner: "",
    footerTop: "",
    footerBottom: "",
  },
  dark: {
    scrollbar: "#262626",
    scrollbarActive: "#313131",
    navItemActive: "#ffffff",
    navItem: "#aaaaaa",
    background: "#1a1a1a",
    color: "#fff",
    nav: "#1a1a1a",
    border: "#212121",
    shadow: "#11111133",
    spinner: "#aaaaaa",
    footerTop: "#1a1a1a",
    footerBottom: "#0f0f0f",
    // navButton: "#313131",
    // card: "#2c2c2c",
    // innerCard: "#232323",
    // accent: "#aaa",
  },
};

export default themes;
