import type { FC } from "react";
import StyledAboutContent from "./AboutContent.styles";
import Text from "@components/text/Text";
import { animatedAboutText } from "@animations/about";

const AboutContent: FC = (): JSX.Element => {
  return (
    <StyledAboutContent>
      {/* <Image src="https://avatars.githubusercontent.com/u/40388335?v=4" /> */}
      <Text variants={animatedAboutText}>
        Hi, I&apos;m Mateusz, a software developer from Poland. I&apos;ve been programing
        since 2014. I have a passion for creating web applications/desktop apps that are
        useful, easy to use, and beautiful. I&apos;m always looking forward to improving
        my skills.
      </Text>
    </StyledAboutContent>
  );
};

export default AboutContent;
