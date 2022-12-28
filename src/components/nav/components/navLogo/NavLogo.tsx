import type { FC } from "react";
import { memo } from "react";

import StyledNavLogo from "./NavLogo.styles";

const NavLogo: FC = (): JSX.Element => {
  return <StyledNavLogo to="/">MP</StyledNavLogo>;
};

export default memo(NavLogo);
