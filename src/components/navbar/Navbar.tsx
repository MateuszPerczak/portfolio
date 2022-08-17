import type { FC } from "react";
import { useState } from "react";
import StyledNavbar, { StyledNavbarHeader, StyledNavbarItems } from "./Navbar.styles";
import routes from "@routes/routes";
import NavbarItem from "@components/navbarItem/NavbarItem";

const Navbar: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = (): void => setIsOpen(true);
  const closeNavbar = (): void => setIsOpen(false);

  return (
    <StyledNavbar
      animate={{ width: isOpen ? "300px" : "70px" }}
      initial={{ width: "70px" }}
      transition={{
        type: "spring",
        mass: 0.6,
        stiffness: 150,
        damping: 15,
      }}
      onMouseEnter={openNavbar}
      onMouseLeave={closeNavbar}
    >
      <StyledNavbarItems>
        {routes.map(({ id, ...rest }) => {
          return <NavbarItem key={id} {...rest} />;
        })}
      </StyledNavbarItems>
      <StyledNavbarHeader>MENU</StyledNavbarHeader>
    </StyledNavbar>
  );
};

export default Navbar;
