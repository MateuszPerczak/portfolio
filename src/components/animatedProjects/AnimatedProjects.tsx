import type { FC } from "react";
import projects from "@/data/projects";
import Project from "@/components/project/Project";
import AnimatedContainer from "@/components/animatedContainer/AnimatedContainer";

const AnimatedProjects: FC = (): JSX.Element => {
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
    <AnimatedContainer
      initial="initial"
      whileInView="whileInView"
      transition={{
        staggerChildren: 0.1,
      }}
      viewport={{ once: true, amount: "some" }}
    >
      {projects.map(({ id, ...rest }) => {
        return <Project key={id} variants={skillsAnimation} {...rest} />;
      })}
    </AnimatedContainer>
  );
};

export default AnimatedProjects;
