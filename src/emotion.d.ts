import "@emotion/react";

type Hex = `#${string}`;

declare module "@emotion/react" {
  export interface Theme {
    scrollbar: Hex;
    scrollbarActive: Hex;
    nav: Hex;
    navItem: Hex;
    navItemActive: Hex;
    background: Hex;
    color: Hex;
    shadow: Hex;
    border: Hex;
    spinner: Hex;
    footerTop: Hex;
    footerBottom: Hex;
    link: Hex;
    yellow: Hex;
    blue: Hex;
    green: Hex;
    red: Hex;
    purple: Hex;
  }
}
