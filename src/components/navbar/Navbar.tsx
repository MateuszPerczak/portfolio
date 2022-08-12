import type { FC } from "react";
import StyledNavbar from "./Navbar.styles";
import NavbarLogo from "@components/navbarLogo/NavbarLogo";

const Navbar: FC = (): JSX.Element => {
  return (
    <StyledNavbar>
      <NavbarLogo />
    </StyledNavbar>
  );
};

export default Navbar;
