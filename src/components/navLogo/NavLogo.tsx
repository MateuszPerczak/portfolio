import type { FC } from "react";
import { memo } from "react";

import StyledNavLogo from "./NavLogo.styles";

const NavLogo: FC = (): JSX.Element => {
  return <StyledNavLogo>MP</StyledNavLogo>;
};

export default memo(NavLogo);
