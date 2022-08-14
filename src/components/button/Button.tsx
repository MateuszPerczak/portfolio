import type { FC } from "react";
import StyledButton from "./Button.style";
import type ButtonProps from "./Button.types";

const Button: FC<ButtonProps> = ({ children, href }: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: "some" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
