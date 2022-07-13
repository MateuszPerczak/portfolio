import type { Theme } from "@emotion/react";
import type { StyledComponent } from "@emotion/styled";
import type { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelImageComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export type ImageProps = {
  src: string;
  alt: string;
};

export type ImageComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  } & ImageProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

export type PanelImageWrapperComponent = PanelImageComponent;

export default PanelImageComponent;
