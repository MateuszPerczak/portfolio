import type { FC } from "react";

import StyledNavMenu from "./NavMenu.styles";
import type { NavMenuProps } from "./NavMenu.types";

const NavMenu: FC<NavMenuProps> = ({ isOpen }): JSX.Element => {
  return (
    <StyledNavMenu
      animate={{
        height: isOpen ? "fit-content" : "60px",
      }}
      exit={{ height: "0px" }}
      initial={{ height: "0px" }}
    >
      <h1>DUPA</h1>
      <h1>DUPA</h1>
      <h1>DUPA</h1>
      <h1>DUPA</h1>
      <h1>DUPA</h1>
    </StyledNavMenu>
  );
};

export default NavMenu;
