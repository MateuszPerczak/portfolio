import type { FC } from "react";
import StyledFramework, { StyledFrameworkText } from "./Framework.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FrameworkProps } from "./Framework.types";
import { frameworkAnimation } from "@animations/animations";

const Framework: FC<FrameworkProps> = ({
  icon,
  text,
  href,
}: FrameworkProps): JSX.Element => {
  return (
    <StyledFramework
      target="_blank"
      rel="noreferrer noopener"
      href={href}
      {...frameworkAnimation}
    >
      <FontAwesomeIcon icon={icon} />
      <StyledFrameworkText>{text}</StyledFrameworkText>
    </StyledFramework>
  );
};

export default Framework;
