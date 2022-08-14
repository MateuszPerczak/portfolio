import type { FC } from "react";
import experience from "@/data/experience";
import Experience from "@/components/experience/Experience";
import AnimatedContainer from "@/components/animatedContainer/AnimatedContainer";
import { slideFromBottom } from "@/animations/animations";

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
      {experience.map(({ id, ...rest }) => {
        return <Experience key={id} variants={slideFromBottom} {...rest} />;
      })}
    </AnimatedContainer>
  );
};

export default AnimatedProjects;
