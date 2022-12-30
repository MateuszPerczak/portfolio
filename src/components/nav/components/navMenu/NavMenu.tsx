import type { FC } from "react";

import StyledNavMenu from "./NavMenu.styles";
import type { NavMenuProps } from "./NavMenu.types";

const NavMenu: FC<NavMenuProps> = ({ isOpen, children, ...rest }): JSX.Element => {
  return (
    <StyledNavMenu
      animate={{
        top: isOpen ? "60px" : "-70px",
      }}
      initial={{ top: "-70px" }}
      exit={{ top: "-70px" }}
      transition={{ duration: 0.3 }}
      {...rest}
    >
      {children}
    </StyledNavMenu>
  );
};

export default NavMenu;
