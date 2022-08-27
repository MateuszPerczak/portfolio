import type { FC } from "react";
import StyledIntroContent from "./IntroContent.styled";
import Icon from "@components/icon/Icon";

const IntroContent: FC = (): JSX.Element => {
  return (
    <StyledIntroContent>
      <span>SEE MORE</span>
      <Icon>&#xE011;</Icon>
    </StyledIntroContent>
  );
};

export default IntroContent;
