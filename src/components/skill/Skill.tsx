import type { FC } from "react";
import StyledSkill, { StyledSkillDescription, StyledSkillHeader } from "./Skill.style";
import type SkillProps from "./Skill.types";

const Skill: FC<SkillProps> = ({ header, description, ...rest }: SkillProps) => {
  return (
    <StyledSkill {...rest}>
      {header && <StyledSkillHeader>{header}</StyledSkillHeader>}
      {description && <StyledSkillDescription>{description}</StyledSkillDescription>}
    </StyledSkill>
  );
};

export default Skill;
