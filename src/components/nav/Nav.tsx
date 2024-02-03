import useMobile from "@hooks/useMobile";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { NavHamburger, NavItem, NavLogo, NavMenu, NavMenuItem } from "./components";
import { navItems } from "./Nav.items";
import StyledNav, { StyledNavWrapper, StyledNavWrapperButtons } from "./Nav.styles";

const Nav = (): JSX.Element => {
  const showNavMenu = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen((wasOpen) => !wasOpen);
  };

  const closeNav = (): void => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <StyledNav onClick={closeNav}>
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
          <NavMenu isOpen={isOpen} onClick={closeNav}>
            {navItems.map((navItem, index) => (
              <NavMenuItem key={`nav-menu-item-${index}`} {...navItem} tabIndex={index} />
            ))}
          </NavMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
