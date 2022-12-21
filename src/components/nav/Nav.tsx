import NavLogo from "@components/navLogo/NavLogo";
import type { FC } from "react";

import StyledNav, { StyledNavWrapper } from "./Nav.styles";

const Nav: FC = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavWrapper>
        <NavLogo />
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Nav;
