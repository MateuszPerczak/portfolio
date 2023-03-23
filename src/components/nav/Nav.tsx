import useMobile from "@hooks/useMobile";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { useState } from "react";

import { navItems } from "../../config/nav";
import { NavHamburger, NavItem, NavLogo, NavMenu, NavMenuItem } from "./components";
import StyledNav, { StyledNavWrapper, StyledNavWrapperButtons } from "./Nav.styles";

const Nav: FC = (): JSX.Element => {
  const showNavMenu = useMobile();
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
            {showNavMenu ? (
              <NavHamburger onClick={toggleOpen} isOpen={isOpen} />
            ) : (
              <>
                {navItems.map((navItem, index) => (
                  <NavItem key={`nav-item-${index}`} {...navItem} />
                ))}
              </>
            )}
          </StyledNavWrapperButtons>
        </StyledNavWrapper>
      </StyledNav>
      <AnimatePresence mode="wait">
        {showNavMenu && (
          <NavMenu isOpen={isOpen} onClick={(): void => setIsOpen(false)}>
            {navItems.map((navItem, index) => (
              <NavMenuItem key={`nav-menu-item-${index}`} {...navItem} />
            ))}
          </NavMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
