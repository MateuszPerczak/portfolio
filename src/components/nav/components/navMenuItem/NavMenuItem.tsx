import StyledNavMenuItem from "./NavMenuItem.styles";
import type { NavMenuItemProps } from "./NavMenuItem.types";

const NavMenuItem = ({ icon: Icon, name, to }: NavMenuItemProps): JSX.Element => {
  return (
    <StyledNavMenuItem to={to}>
      <Icon />
      <span>{name}</span>
    </StyledNavMenuItem>
  );
};

export default NavMenuItem;
