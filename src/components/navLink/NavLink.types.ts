import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

type NavLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  icon: IconProp;
};
export default NavLinkProps;
