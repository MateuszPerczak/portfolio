import type { FC } from "react";
import type ButtonProps from "./Button.types";
import StyledButton from "./Button.styles";

const Button: FC<ButtonProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <StyledButton {...rest} rel="noreferer noopener" target="_blank">
      {children}
    </StyledButton>
  );
};

export default Button;
