import type { FC } from "react";
import StyledIntroContent from "./IntroContent.styled";
import Icon from "@components/icon/Icon";
import { animatedIntroContent } from "@animations/intro";

const IntroContent: FC = (): JSX.Element => {
  return (
    <StyledIntroContent variants={animatedIntroContent}>
      <span>SEE MORE</span>
      <Icon>&#xE011;</Icon>
    </StyledIntroContent>
  );
};

export default IntroContent;
