import type { FC } from "react";
import { animatedHeader, animatedHeaderContent } from "@animations/header";
import StyledIntroContent, { StyledIntroContentWrapper } from "./IntroContent.styled";
import Icon from "@components/icon/Icon";

const IntroContent: FC = (): JSX.Element => {
  return (
    <StyledIntroContent
      variants={animatedHeader}
      initial="offscreen"
      whileInView={["onscreen", "iddle"]}
      viewport={{ amount: "all", once: true }}
    >
      <StyledIntroContentWrapper variants={animatedHeaderContent}>
        <span>SEE MORE</span>
        <Icon>&#xE011;</Icon>
      </StyledIntroContentWrapper>
    </StyledIntroContent>
  );
};

export default IntroContent;
