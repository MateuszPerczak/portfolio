import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export type NavLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  icon: IconProp;
};
