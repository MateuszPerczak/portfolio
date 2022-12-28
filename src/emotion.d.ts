import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    scrollbar: string;
    scrollbarActive: string;
    background: string;
    color: string;
    nav: string;
    card: string;
    innerCard: string;
    border: string;
    shadow: string;
    accent: string;
    navButton: string;
  }
}
