import Close from "@icons/close.svg?react";
import Menu from "@icons/menu.svg?react";
import { m } from "framer-motion";

import { animation } from "./NavHamburger.animations";
import StyledNavHamburger from "./NavHamburger.styles";
import type { NavHamburgerProps } from "./NavHamburger.types";

const NavHamburger = ({ isOpen, ...rest }: NavHamburgerProps): JSX.Element => {
  return (
    <StyledNavHamburger {...rest} whileTap="tap" type="button">
      <m.div className="hamburger-icon-wrapper" variants={animation}>
        {isOpen ? <Close /> : <Menu />}
      </m.div>
    </StyledNavHamburger>
  );
};

export default NavHamburger;
