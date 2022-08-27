import type { FC } from "react";
import Section from "@components/section/Section";
import Header from "@/components/header/Header";

const About: FC = (): JSX.Element => {
  return (
    <Section reverseColor>
      <Header>About me</Header>
    </Section>
  );
};

export default About;
