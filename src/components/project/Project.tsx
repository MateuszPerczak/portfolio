import type { FC } from "react";
import StyledProject, {
  StyledProjectDescription,
  StyledProjectHeader,
} from "./Project.style";
import type ProjectProps from "./Project.types";

const Project: FC<ProjectProps> = ({ header, description, ...rest }): JSX.Element => {
  return (
    <StyledProject {...rest}>
      <StyledProjectHeader>{header}</StyledProjectHeader>
      <StyledProjectDescription>{description}</StyledProjectDescription>
    </StyledProject>
  );
};

export default Project;
