import type { FC } from "react";
import skills from "@/data/skills";
import Skill from "@/components/skill/Skill";
import AnimatedContainer from "@/components/animatedContainer/AnimatedContainer";
import { scaleUp } from "@/animations/animations";

const AnimatedSkills: FC = (): JSX.Element => {
  return (
    <AnimatedContainer
      initial="initial"
      whileInView="whileInView"
      transition={{
        staggerChildren: 0.1,
      }}
      viewport={{ once: true, amount: "some" }}
    >
      {skills.map(({ id, ...rest }) => {
        return <Skill key={id} variants={scaleUp} {...rest} />;
      })}
    </AnimatedContainer>
  );
};

export default AnimatedSkills;
