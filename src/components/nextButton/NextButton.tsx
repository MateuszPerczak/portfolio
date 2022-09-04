import type { FC } from "react";
import type NextButtonProps from "./NextButton.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledNextButton from "./NextButton.styles";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NextButton: FC<NextButtonProps> = ({
  text,
  ...rest
}: NextButtonProps): JSX.Element => {
  return (
    <StyledNextButton {...rest}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </StyledNextButton>
  );
};
export default NextButton;
