import type { FC } from "react";
import StyledExperience, {
  StyledExperienceDescription,
  StyledExperienceHeader,
} from "./Experience.style";
import type ExperienceProps from "./Experience.types";

const Experience: FC<ExperienceProps> = ({
  header,
  description,
  date,
  ...rest
}: ExperienceProps): JSX.Element => {
  return (
    <StyledExperience {...rest}>
      <StyledExperienceHeader>{header}</StyledExperienceHeader>
      <StyledExperienceDescription>{description}</StyledExperienceDescription>
      <StyledExperienceDescription>{date}</StyledExperienceDescription>
    </StyledExperience>
  );
};

export default Experience;
