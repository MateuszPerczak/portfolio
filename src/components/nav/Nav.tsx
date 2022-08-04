import type { FC } from "react";
import NavItem from "@components/navItem/NavItem";
import StyledNav from "./Nav.style";

const Nav: FC = (): JSX.Element => {
  return (
    <StyledNav>
      <NavItem header="O MNIE" />
      <NavItem header="UMIEJĘTNOŚCI" />
      <NavItem header="DOŚWIADCZENIE" />
      <NavItem header="PROJEKTY" />
      <NavItem header="KONTAKT" />
    </StyledNav>
  );
};

export default Nav;
