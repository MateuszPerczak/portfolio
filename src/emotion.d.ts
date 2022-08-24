import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    navbar: string;
    navbarItem: string;
    logo: string;

    card: string;
    accent: string;

    scrollbar: string;
    shadow: string;
    link: string;
  }
}
