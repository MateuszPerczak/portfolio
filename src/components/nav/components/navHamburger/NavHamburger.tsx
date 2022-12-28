import { ReactComponent as Menu } from "@icons/menu.svg";
import type { FC } from "react";

import StyledNavHamburger from "./NavHamburger.styles";
import type { NavHamburgerProps } from "./NavHamburger.types";

const NavHamburger: FC<NavHamburgerProps> = ({
  ...rest
}: NavHamburgerProps): JSX.Element => {
  return (
    <StyledNavHamburger {...rest}>
      <Menu />
    </StyledNavHamburger>
  );
};

export default NavHamburger;
