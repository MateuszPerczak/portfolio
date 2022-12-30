import type { FC } from "react";

import StyledNavMenu from "./NavMenu.styles";
import type { NavMenuProps } from "./NavMenu.types";

const NavMenu: FC<NavMenuProps> = ({ isOpen, children }): JSX.Element => {
  return (
    <StyledNavMenu
      animate={{
        height: isOpen ? "100px" : "0px",
      }}
      exit={{ height: "0px" }}
      initial={{ height: "0px" }}
    >
      {children}
    </StyledNavMenu>
  );
};

export default NavMenu;
