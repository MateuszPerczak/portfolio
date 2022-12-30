import useWindowDimensions from "@hooks/useWindowDimensions";
import { ReactComponent as Blog } from "@icons/blog.svg";
import { ReactComponent as Code } from "@icons/code.svg";
import { AnimatePresence } from "framer-motion";
import type { FC } from "react";
import { useState } from "react";

import { navItems } from "../../config/nav";
import { NavHamburger, NavItem, NavLogo, NavMenu } from "./components";
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
          <NavMenu isOpen={isOpen}>
            <span>TEST</span>
            {/* <>
              {navItems.map(({ icon: Icon, name, ...rest }) => (
                <NavButton key={name} {...rest}>
                  {name}
                  <Icon />
                </NavButton>
              ))}
            </> */}
          </NavMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
