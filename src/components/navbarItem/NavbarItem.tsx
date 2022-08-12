import type { FC } from "react";
import StyledNavbarItem from "./NavbarItem.styles";
import type NavbarItemProps from "./NavbarItem.types";

const NavbarItem: FC<NavbarItemProps> = (): JSX.Element => {
  return <StyledNavbarItem>Melatonina</StyledNavbarItem>;
};

export default NavbarItem;
