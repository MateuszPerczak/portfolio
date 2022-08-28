import type { FC } from "react";
import StyledSkillsContent from "./SkillsContent.styles";
import { animatedSkill } from "@animations/skills";
import Skill from "@components/skill/Skill";
import { skills } from "@/data/skills";

const SkillsContent: FC = (): JSX.Element => {
  return (
    <StyledSkillsContent>
      {skills.map((skill, index) => (
        <Skill key={index} variants={animatedSkill}>
          {skill}
        </Skill>
      ))}
    </StyledSkillsContent>
  );
};

export default SkillsContent;
