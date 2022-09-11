import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export type ProjectButtonProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  text: string;
};
