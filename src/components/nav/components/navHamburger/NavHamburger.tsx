import { ReactComponent as Close } from "@icons/close.svg";
import { ReactComponent as Menu } from "@icons/menu.svg";
import { motion } from "framer-motion";

import { animation } from "./NavHamburger.animations";
import StyledNavHamburger from "./NavHamburger.styles";
import type { NavHamburgerProps } from "./NavHamburger.types";

const NavHamburger = ({ isOpen, ...rest }: NavHamburgerProps): JSX.Element => {
  return (
    <StyledNavHamburger {...rest} whileTap="tap">
      <motion.div className="hamburger-icon-wrapper" variants={animation}>
        {isOpen ? <Close /> : <Menu />}
      </motion.div>
    </StyledNavHamburger>
  );
};

export default NavHamburger;
