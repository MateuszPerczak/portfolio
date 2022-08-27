import type { FC } from "react";
import { animatedIntroH1 } from "@animations/intro";
import Header from "@/components/header/Header";
import StyledIntroHeader, { StyledIntroWrapper } from "./IntroHeader.styles";

const IntroHeader: FC = (): JSX.Element => {
  return (
    <StyledIntroHeader>
      <StyledIntroWrapper>
        <Header variants={animatedIntroH1}>Hi, i&apos;m Mateusz</Header>
      </StyledIntroWrapper>
      <StyledIntroWrapper>
        <Header variants={animatedIntroH1}>a Web Developer</Header>
      </StyledIntroWrapper>
    </StyledIntroHeader>
  );
};

export default IntroHeader;
