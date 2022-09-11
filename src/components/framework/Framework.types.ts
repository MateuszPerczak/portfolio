import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export type FrameworkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  icon: IconProp;
  text: string;
};
