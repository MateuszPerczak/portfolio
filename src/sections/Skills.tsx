import type { FC } from "react";
import Section from "@components/section/Section";
import SkillsHeader from "@components/skillsHeader/SkillsHeader";
import SkillsContent from "@components/skillsContent/SkillsContent";
import { animatedSkills } from "@animations/skills";

const Skills: FC = (): JSX.Element => {
  return (
    <Section
      variants={animatedSkills}
      initial="offscreen"
      whileInView={["onscreen", "float"]}
      viewport={{ amount: 0.9, once: true }}
    >
      <SkillsHeader />
      <SkillsContent />
    </Section>
  );
};

export default Skills;
