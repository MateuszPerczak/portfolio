import NavButton from "@components/navButton/NavButton";
import NavLogo from "@components/navLogo/NavLogo";
import { ReactComponent as Blog } from "@icons/blog.svg";
import { ReactComponent as Code } from "@icons/code.svg";
import type { FC } from "react";

import StyledNav, { StyledNavWrapper, StyledNavWrapperButtons } from "./Nav.styles";

const Nav: FC = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledNavWrapper>
        <NavLogo />
        <StyledNavWrapperButtons>
          <NavButton>
            <Blog style={{ height: "1em" }} />
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
