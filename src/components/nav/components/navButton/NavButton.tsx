import type { FC } from "react";

import StyledNavButton from "./NavButton.styles";
import type { NavButtonProps } from "./NavButton.types";

const NavButton: FC<NavButtonProps> = ({
  children,
  ...rest
}: NavButtonProps): JSX.Element => {
  return <StyledNavButton {...rest}>{children}</StyledNavButton>;
};

export default NavButton;
