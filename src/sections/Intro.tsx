import type { FC } from "react";
import Section from "@components/section/Section";
import IntroHeader from "@components/introHeader/IntroHeader";
import { animatedIntro } from "@animations/intro";
import IntroContent from "@components/introContent/IntroContent";

const Intro: FC = (): JSX.Element => {
  return (
    <Section
      variants={animatedIntro}
      initial="offscreen"
      whileInView={["onscreen", "scroll"]}
      viewport={{ amount: "all", once: true }}
    >
      <IntroHeader />
      <IntroContent />
    </Section>
  );
};

export default Intro;
