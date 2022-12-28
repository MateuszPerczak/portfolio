import useWindowDimensions from "@hooks/useWindowDimensions";
import { ReactComponent as Blog } from "@icons/blog.svg";
import { ReactComponent as Code } from "@icons/code.svg";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { useState } from "react";

import { NavButton, NavHamburger, NavLogo, NavMenu } from "./components";
import StyledNav, { StyledNavWrapper, StyledNavWrapperButtons } from "./Nav.styles";

const Nav: FC = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const showNavMenu = width < 768;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  return (
    <>
      <StyledNav>
        <StyledNavWrapper>
          <NavLogo />
          <StyledNavWrapperButtons>
            {showNavMenu && <NavHamburger onClick={toggleOpen} />}
            {!showNavMenu && (
              <>
                <NavButton to="/blog">
                  <Blog />
                  Blog
                </NavButton>
                <NavButton to="/dev">
                  <Code />
                  Development
                </NavButton>
              </>
            )}
          </StyledNavWrapperButtons>
        </StyledNavWrapper>
      </StyledNav>
      <AnimatePresence mode="wait">
        {showNavMenu && <NavMenu isOpen={isOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Nav;
