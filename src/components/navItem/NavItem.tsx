import type { FC } from "react";
import StyledNavItem from "./NavItem.style";
import type NavItemProps from "./NavItem.types";

const NavItem: FC<NavItemProps> = ({ header }: NavItemProps): JSX.Element => {
  return <StyledNavItem>{header}</StyledNavItem>;
};
export default NavItem;
