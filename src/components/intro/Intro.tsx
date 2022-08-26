import type { FC } from "react";
import Container from "@components/container/Container";
import IntroHeader from "@components/introHeader/IntroHeader";
import IntroContent from "@components/introContent/IntroContent";

const Intro: FC = (): JSX.Element => {
  return (
    <Container>
      <IntroHeader />
      <IntroContent />
    </Container>
  );
};

export default Intro;
