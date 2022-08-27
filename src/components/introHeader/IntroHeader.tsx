import type { FC } from "react";
import { animatedIntroH1 } from "@animations/intro";
import H1 from "@components/h1/H1";
import StyledIntroHeader, { StyledIntroWrapper } from "./IntroHeader.styles";

const IntroHeader: FC = (): JSX.Element => {
  return (
    <StyledIntroHeader>
      <StyledIntroWrapper>
        <H1 variants={animatedIntroH1}>Hi, i&apos;m Mateusz</H1>
      </StyledIntroWrapper>
      <StyledIntroWrapper>
        <H1 variants={animatedIntroH1}>a Web Developer</H1>
      </StyledIntroWrapper>
    </StyledIntroHeader>
  );
};

export default IntroHeader;
