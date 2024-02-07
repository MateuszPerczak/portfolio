import StyledNavItem from "./NavItem.styles";
import type { NavItemProps } from "./NavItem.types";

const NavItem = ({ icon: Icon, name, to, ...rest }: NavItemProps): JSX.Element => {
  return (
    <StyledNavItem to={to} {...rest}>
      <Icon />
      <span>{name}</span>
    </StyledNavItem>
  );
};

export default NavItem;
