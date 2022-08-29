import type { FC } from "react";
import StyledAboutContent, { StyledAboutContentButtons } from "./AboutContent.styles";
import Text from "@components/text/Text";
import { animatedAboutButton, animatedAboutText } from "@animations/about";
import Button from "@components/button/Button";

const AboutContent: FC = (): JSX.Element => {
  return (
    <StyledAboutContent>
      <Text variants={animatedAboutText}>
        Hi, I&apos;m Mateusz, a software developer from Poland. I&apos;ve been programing
        since 2014. I have a passion for creating web applications/desktop apps that are
        useful, easy to use, and beautiful. I&apos;m always looking forward to improving
        my skills.
      </Text>
      <StyledAboutContentButtons>
        <Button
          href="https://www.linkedin.com/in/mateuszperczak/"
          variants={animatedAboutButton}
        >
          LINKED IN
        </Button>
        <Button href="https://github.com/MateuszPerczak" variants={animatedAboutButton}>
          GITHUB
        </Button>
      </StyledAboutContentButtons>
    </StyledAboutContent>
  );
};

export default AboutContent;
