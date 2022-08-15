import type { FC } from "react";
import StyledNavbarItem from "./NavbarItem.styles";
import type NavbarItemProps from "./NavbarItem.types";

const NavbarItem: FC<NavbarItemProps> = ({
  header,
  ...rest
}: NavbarItemProps): JSX.Element => {
  return <StyledNavbarItem {...rest}>{header}</StyledNavbarItem>;
};

export default NavbarItem;
