import type { FC } from "react";
import Section from "@components/section/Section";
import AboutHeader from "@components/aboutHeader/AboutHeader";
import AboutContent from "@components/aboutContent/AboutContent";
import { animatedAbout } from "@animations/about";

const About: FC = (): JSX.Element => {
  return (
    <Section
      variants={animatedAbout}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.7, once: true }}
    >
      <AboutHeader />
      <AboutContent />
    </Section>
  );
};

export default About;
