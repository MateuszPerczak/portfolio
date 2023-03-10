import type { FC } from "react";

import StyledNavMenu from "./NavMenu.styles";
import type { NavMenuProps } from "./NavMenu.types";

const NavMenu: FC<NavMenuProps> = ({ isOpen, children, ...rest }): JSX.Element => {
  return (
    <StyledNavMenu
      animate={{
        y: isOpen ? 0 : "-100%",
        opacity: isOpen ? 1 : 0,
      }}
      initial={{ y: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10, mass: 0.2 }}
      {...rest}
    >
      {children}
    </StyledNavMenu>
  );
};

export default NavMenu;
