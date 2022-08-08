import type { FC } from "react";
import skills from "@/data/skills";
import Skill from "@/components/skill/Skill";
import StyledAnimatedSkills from "./AnimatedSkills.style";
const AnimatedSkills: FC = (): JSX.Element => {
  const skillsAnimation = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
      },
    },
  };

  return (
    <StyledAnimatedSkills
      initial="initial"
      whileInView="whileInView"
      transition={{
        staggerChildren: 0.1,
      }}
      viewport={{ once: true, amount: "some" }}
    >
      {skills.map(({ id, ...rest }) => {
        return <Skill key={id} variants={skillsAnimation} {...rest} />;
      })}
    </StyledAnimatedSkills>
  );
};

export default AnimatedSkills;

// initial={{ x: "-100%", opacity: 0 }}
// whileInView={{ x: 0, opacity: 1 }}
// viewport={{ once: true, amount: "some" }}
