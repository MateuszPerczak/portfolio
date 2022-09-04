import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import type BackButtonProps from "./BackButton.types";
import StyledBackButton from "./BackButton.styles";

const BackButton: FC<BackButtonProps> = ({
  text,
  ...rest
}: BackButtonProps): JSX.Element => {
  return (
    <StyledBackButton {...rest}>
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>{text}</span>
    </StyledBackButton>
  );
};
export default BackButton;
