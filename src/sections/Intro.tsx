import type { FC } from "react";
import Section from "@components/section/Section";
import IntroHeader from "@components/introHeader/IntroHeader";
import { animatedIntro } from "@animations/intro";
import IntroContent from "@components/introContent/IntroContent";
import useWindowDimensions from "@hooks/useWindowDimensions";

const Intro: FC = (): JSX.Element => {
  const { width } = useWindowDimensions();

  const amount = width <= 768 ? "some" : "all";

  return (
    <Section
      variants={animatedIntro}
      initial="offscreen"
      whileInView={["onscreen", "scroll"]}
      viewport={{ amount, once: true }}
    >
      <IntroHeader />
      <IntroContent />
    </Section>
  );
};

export default Intro;
