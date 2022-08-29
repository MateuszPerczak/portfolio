import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    card: string;
    accent: string;
    navbar: string;
    scrollbar: string;
    shadow: string;
    link: string;
  }
}
