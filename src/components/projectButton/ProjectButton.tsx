import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import StyledProjectButton from "./ProjectButton.styles";
import type { ProjectButtonProps } from "./ProjectButton.types";

const ProjectButton: FC<ProjectButtonProps> = ({
  text,
  ...rest
}: ProjectButtonProps): JSX.Element => {
  return (
    <StyledProjectButton target="_blank" rel="noreferrer noopener" {...rest}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </StyledProjectButton>
  );
};
export default ProjectButton;
