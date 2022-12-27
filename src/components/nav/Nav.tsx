import NavButton from "@components/navButton/NavButton";
import NavLogo from "@components/navLogo/NavLogo";
import { ReactComponent as Code } from "@icons/code.svg";
import { ReactComponent as Memo } from "@icons/memo-pad.svg";
import type { FC } from "react";

import StyledNav, { StyledNavWrapper, StyledNavWrapperButtons } from "./Nav.styles";

const Nav: FC = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavWrapper>
        <NavLogo />
        <StyledNavWrapperButtons>
          <NavButton>
            <Memo style={{ height: "1em" }} />
            Blog
          </NavButton>
          <NavButton>
            <Code style={{ height: "1em" }} />
            Development
          </NavButton>
        </StyledNavWrapperButtons>
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Nav;
