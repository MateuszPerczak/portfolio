import type { FC } from "react";
import StyledNavbar, { StyledNavbarItems } from "./Navbar.styles";
import NavbarLogo from "@components/navbarLogo/NavbarLogo";
import NavbarItem from "@components/navbarItem/NavbarItem";

const Navbar: FC = (): JSX.Element => {
  return (
    <StyledNavbar>
      <NavbarLogo />
      <StyledNavbarItems>
        <NavbarItem header="O mnie" />
        <NavbarItem header="Dośwaidczenie" />
        <NavbarItem header="Umiejętności" />
        <NavbarItem header="Projekty" />
      </StyledNavbarItems>
    </StyledNavbar>
  );
};

export default Navbar;
