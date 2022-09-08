import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    accent: string;
    nav: string;
    scrollbar: string;
    project: string;
    projectHeader: string;
    footer: string;
    shadow: string;
  }
}
