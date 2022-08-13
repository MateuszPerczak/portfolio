import type { FC } from "react";
import StyledNavbarItem from "./NavbarItem.styles";
import type NavbarItemProps from "./NavbarItem.types";

const NavbarItem: FC<NavbarItemProps> = ({ header }: NavbarItemProps): JSX.Element => {
  return <StyledNavbarItem>{header}</StyledNavbarItem>;
};

export default NavbarItem;
