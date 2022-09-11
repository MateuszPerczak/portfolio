import type { FC } from "react";
import StyledFramework, { StyledFrameworkText } from "./Framework.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { FrameworkProps } from "./Framework.types";

const Framework: FC<FrameworkProps> = ({
  icon,
  text,
  ...rest
}: FrameworkProps): JSX.Element => {
  return (
    <StyledFramework target="_blank" rel="noreferrer noopener" {...rest}>
      <FontAwesomeIcon icon={icon} />
      <StyledFrameworkText>{text}</StyledFrameworkText>
    </StyledFramework>
  );
};

export default Framework;
