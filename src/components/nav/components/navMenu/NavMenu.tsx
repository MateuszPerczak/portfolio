import StyledNavMenu from "./NavMenu.styles";
import type { NavMenuProps } from "./NavMenu.types";

const NavMenu = ({ isOpen, children, ...rest }: NavMenuProps): JSX.Element => {
  return (
    <StyledNavMenu
      animate={{
        y: isOpen ? 0 : "-100%",
        opacity: isOpen ? 1 : 0,
        right: 10,
      }}
      initial={false}
      transition={{ type: "spring", stiffness: 120, damping: 10, mass: 0.2 }}
      {...rest}
    >
      {children}
    </StyledNavMenu>
  );
};

export default NavMenu;
