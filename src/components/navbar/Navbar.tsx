import type { FC } from "react";
import StyledNavbar, { StyledNavbarItems } from "./Navbar.styles";
import NavbarLogo from "@components/navbarLogo/NavbarLogo";
import NavbarItem from "@components/navbarItem/NavbarItem";
import type NavbarProps from "./Navbar.types";

const Navbar: FC<NavbarProps> = ({ setPage }: NavbarProps): JSX.Element => {
  return (
    <StyledNavbar>
      <NavbarLogo />
      <StyledNavbarItems>
        <NavbarItem header="O mnie" onClick={() => setPage("About")} />
        <NavbarItem header="Umiejętności" onClick={() => setPage("Skills")} />
        <NavbarItem header="Projekty" onClick={() => setPage("Test")} />
      </StyledNavbarItems>
    </StyledNavbar>
  );
};

export default Navbar;
