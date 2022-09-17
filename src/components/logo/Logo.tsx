import type { FC } from "react";
import { memo } from "react";
import StyledLogo from "./Logo.styles";

const Logo: FC = (): JSX.Element => {
  return (
    <StyledLogo to="/" aria-label="Logo">
      MP
    </StyledLogo>
  );
};

export default memo(Logo);
