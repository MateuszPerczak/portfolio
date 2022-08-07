import type { FC } from "react";
import StyledSkill, { StyledSkillDescription, StyledSkillHeader } from "./Skill.style";
import type SkillProps from "./Skill.types";

const Skill: FC<SkillProps> = ({ header, description }: SkillProps) => {
  return (
    <StyledSkill
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
      {header && <StyledSkillHeader>{header}</StyledSkillHeader>}
      {description && <StyledSkillDescription>{description}</StyledSkillDescription>}
    </StyledSkill>
  );
};

export default Skill;
