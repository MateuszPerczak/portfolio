import type { FC } from "react";
import { memo } from "react";
import Skill from "@components/skill/Skill";
import StyledSkills, { StyledSkillsWrapper } from "./Skills.styles";
import { skills } from "@data/skills";

const Skills: FC = (): JSX.Element => {
  return (
    <StyledSkills>
      <h1>My skills</h1>
      <StyledSkillsWrapper>
        {skills.map((skill, id) => {
          return <Skill key={`skill-${id}`}>{skill}</Skill>;
        })}
      </StyledSkillsWrapper>
    </StyledSkills>
  );
};

export default memo(Skills);
