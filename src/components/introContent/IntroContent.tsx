import type { FC } from "react";
import StyledIntroContent from "./IntroContent.styled";
import Icon from "@components/icon/Icon";
import { animatedIntroArrow, animatedIntroContent } from "@animations/intro";

const IntroContent: FC = (): JSX.Element => {
  return (
    <StyledIntroContent variants={animatedIntroContent}>
      <Icon>&#xE962;</Icon>
      <Icon variants={animatedIntroArrow}>&#xE011;</Icon>
    </StyledIntroContent>
  );
};

export default IntroContent;
