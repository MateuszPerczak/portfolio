import type { FC } from "react";
import StyledProject, {
  StyledProjectDescription,
  StyledProjectHeader,
  StyledProjectLibs,
  StyledProjectLink,
  StyledProjectLinks,
} from "./Project.styles";
import type ProjectProps from "./Project.types";

const Project: FC<ProjectProps> = ({
  header,
  description,
  libraries,
  links,
  ...rest
}: ProjectProps): JSX.Element => {
  return (
    <StyledProject {...rest}>
      <StyledProjectHeader>{header}</StyledProjectHeader>
      <StyledProjectDescription>{description}</StyledProjectDescription>
      <StyledProjectLibs>{libraries}</StyledProjectLibs>
      <StyledProjectLinks>
        {links.map(({ header, href }, index) => {
          return (
            <StyledProjectLink
              href={href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {header}
            </StyledProjectLink>
          );
        })}
      </StyledProjectLinks>
    </StyledProject>
  );
};

export default Project;
