import type { FC } from "react";
import projects from "@/data/projects";
import Project from "@/components/project/Project";
import AnimatedContainer from "@/components/animatedContainer/AnimatedContainer";
import { slideFromLeft } from "@/animations/animations";

const AnimatedProjects: FC = (): JSX.Element => {
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
        return <Project key={id} variants={slideFromLeft} {...rest} />;
      })}
    </AnimatedContainer>
  );
};

export default AnimatedProjects;
