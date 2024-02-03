import StyledNavMenuItem from "./NavMenuItem.styles";
import type { NavMenuItemProps } from "./NavMenuItem.types";

const NavMenuItem = ({ icon: Icon, name, ...rest }: NavMenuItemProps): JSX.Element => {
  return (
    <StyledNavMenuItem {...rest}>
      <Icon />
      <span>{name}</span>
    </StyledNavMenuItem>
  );
};

export default NavMenuItem;
