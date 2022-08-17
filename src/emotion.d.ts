import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    scrollbar: string;
    accent: string;
    navbar: string;
  }
}
