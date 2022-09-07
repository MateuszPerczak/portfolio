import type { FC } from "react";
import StyledLogo from "./Logo.styles";

const Logo: FC = (): JSX.Element => {
  return (
    <StyledLogo to="/" aria-label="Logo">
      MP
    </StyledLogo>
  );
};

export default Logo;
