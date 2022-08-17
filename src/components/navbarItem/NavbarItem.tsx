import type { FC } from "react";
import StyledNavbarItem from "./NavbarItem.styles";
import type NavbarItemProps from "./NavbarItem.types";

const NavbarItem: FC<NavbarItemProps> = ({ path, name }): JSX.Element => {
  return <StyledNavbarItem to={path}>{name}</StyledNavbarItem>;
};

export default NavbarItem;
