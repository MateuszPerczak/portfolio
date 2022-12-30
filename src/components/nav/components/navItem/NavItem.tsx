import type { FC } from "react";

import StyledNavItem from "./NavItem.styles";
import type { NavItemProps } from "./NavItem.types";

const NavItem: FC<NavItemProps> = ({
  icon: Icon,
  name,
  to,
}: NavItemProps): JSX.Element => {
  return (
    <StyledNavItem to={to}>
      <Icon />
      <span>{name}</span>
    </StyledNavItem>
  );
};

export default NavItem;
