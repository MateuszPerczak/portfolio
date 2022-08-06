import type { FC } from "react";
import { useState } from "react";
import NavItem from "@components/navItem/NavItem";

import StyledNav, { StyledNavContent, StyledNavHeader } from "./Nav.style";

const Nav: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <StyledNav
      initial={{
        width: "70px",
      }}
      animate={{
        width: isOpen ? "300px" : "70px",
      }}
      transition={{
        type: "spring",
        mass: 0.6,
        stiffness: 150,
        damping: 15,
      }}
      onMouseLeave={closeNav}
      onMouseEnter={openNav}
    >
      <StyledNavContent>
        <NavItem header="O mnie" scrollToId="#about" />
        <NavItem header="Umiejętności" scrollToId="#skills" />
        <NavItem header="Doświadczenie" scrollToId="#experience" />
        <NavItem header="Projekty" scrollToId="#projects" />
        <NavItem header="Kontakt" scrollToId="#footer" />
      </StyledNavContent>
      <StyledNavHeader>MENU</StyledNavHeader>
    </StyledNav>
  );
};

export default Nav;
