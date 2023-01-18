import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    scrollbar: string;
    scrollbarActive: string;
    nav: string;
    navItem: string;
    navItemActive: string;
    background: string;
    color: string;
    shadow: string;
    border: string;
    spinner: string;

    // card: string;
    // innerCard: string;
    // accent: string;
    // navButton: string;
  }
}
