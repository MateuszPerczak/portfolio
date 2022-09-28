import type { FC } from "react";
import { memo } from "react";
import Skill from "@components/skill/Skill";
import StyledSkills, { StyledSkillsWrapper } from "./Skills.styles";
import { skills } from "@data/skills";
import { skillsAnimation, skillsWrapper } from "@animations/animations";

const Skills: FC = (): JSX.Element => {
  return (
    <StyledSkills>
      <h1>My skills</h1>
      <StyledSkillsWrapper {...skillsWrapper}>
        {skills.map((skill, id) => {
          return (
            <Skill key={`skill-${id}`} {...skillsAnimation}>
              {skill}
            </Skill>
          );
        })}
      </StyledSkillsWrapper>
    </StyledSkills>
  );
};

export default memo(Skills);
