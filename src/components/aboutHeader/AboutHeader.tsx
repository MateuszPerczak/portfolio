import type { FC } from "react";
import Header from "@components/header/Header";
import StyledAboutHeader from "./AboutHeader.styles";
import { animatedAboutHeader } from "@animations/about";

const AboutHeader: FC = (): JSX.Element => {
  return (
    <StyledAboutHeader>
      <Header variants={animatedAboutHeader}>About me</Header>
    </StyledAboutHeader>
  );
};

export default AboutHeader;
