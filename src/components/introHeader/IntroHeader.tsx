import type { FC } from "react";
import { animatedIntroHeader } from "@animations/intro";
import Header from "@/components/header/Header";
import StyledIntroHeader, { StyledIntroWrapper } from "./IntroHeader.styles";

const IntroHeader: FC = (): JSX.Element => {
  return (
    <StyledIntroHeader>
      <StyledIntroWrapper>
        <Header variants={animatedIntroHeader}>Hi, I&apos;m Mateusz</Header>
      </StyledIntroWrapper>
      <StyledIntroWrapper>
        <Header variants={animatedIntroHeader}>a Web Developer</Header>
      </StyledIntroWrapper>
    </StyledIntroHeader>
  );
};

export default IntroHeader;
