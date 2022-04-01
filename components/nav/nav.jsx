import { useState } from "react";
import styled from "@emotion/styled";
import NavItem from "./navItem";
import NavHamburger from "./navHamburger";
import NavSeperator from "./navSeperator";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  position: fixed;
  margin: 0 10px 10px 10px;
  border-radius: 4px;
  padding: 10px 0 10px 0;
  overflow: hidden;
  user-select: none;
  transition: width 100ms ease-out;
  z-index: 3;
  box-shadow: 0 0 15px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
  width: ${({ isNavOpen }) => {
    return isNavOpen ? 200 : 60;
  }}px;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const Nav = () => {
  const [isNavOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isNavOpen);
  };
  const hideNav = () => {
    setOpen(false);
  };

  return (
    <NavWrapper isNavOpen={isNavOpen}>
      <NavHamburger icon="&#xE8E4;" onClick={toggleNav} />
      <NavSeperator />
      <NavItem
        text="O mnie"
        icon="&#xE13D;"
        isNavOpen={isNavOpen}
        href="#about-me"
        onClick={hideNav}
      />
      <NavItem
        text="Umiejętności"
        icon="&#xE7BE;"
        isNavOpen={isNavOpen}
        href="#skills"
        onClick={hideNav}
      />
      <NavItem
        text="Doświadczenie"
        icon="&#xE821;"
        isNavOpen={isNavOpen}
        href="#experience"
        onClick={hideNav}
      />
      <NavItem
        text="Projekty"
        icon="&#xE74C;"
        isNavOpen={isNavOpen}
        href="#projects"
        onClick={hideNav}
      />
      <NavItem
        text="Kontakt"
        icon="&#xE715;"
        isNavOpen={isNavOpen}
        href="#contact"
        onClick={hideNav}
      />
    </NavWrapper>
  );
};

export default Nav;
