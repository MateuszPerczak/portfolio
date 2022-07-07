import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    card: string;
    shadow: string;
    border: string;
    navbar: string;
    hamburger: string;
    header: string;
    scrollbar: string;
  }
}
