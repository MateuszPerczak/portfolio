import type { FC } from "react";
import StyledProject, {
  StyledProjectDescription,
  StyledProjectHeader,
} from "./Project.style";
import type ProjectProps from "./Project.types";

const Project: FC<ProjectProps> = ({ header, description, ...rest }): JSX.Element => {
  return (
    <StyledProject
      {...rest}
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: "some" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      }}
    >
      <StyledProjectHeader>{header}</StyledProjectHeader>
      <StyledProjectDescription>{description}</StyledProjectDescription>
    </StyledProject>
  );
};

export default Project;
