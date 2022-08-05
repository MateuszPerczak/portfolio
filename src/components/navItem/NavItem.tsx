import type { FC } from "react";
import StyledNavItem from "./NavItem.style";
import type NavItemProps from "./NavItem.types";

const NavItem: FC<NavItemProps> = ({ header, scrollToId }: NavItemProps): JSX.Element => {
  return <StyledNavItem href={scrollToId}>{header}</StyledNavItem>;
};

export default NavItem;
