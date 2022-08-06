import type { FC } from "react";
import type NavItemProps from "./NavItem.types";
import { memo } from "react";
import StyledNavItem from "./NavItem.style";

const NavItem: FC<NavItemProps> = ({ header, scrollToId }: NavItemProps): JSX.Element => {
  return <StyledNavItem href={scrollToId}>{header}</StyledNavItem>;
};

export default memo(NavItem);
