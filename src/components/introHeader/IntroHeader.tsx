import { animatedHeader, animatedHeaderText } from "@animations/header";
import StyledIntroHeader, {
  StyledIntroHeaderText,
  StyledIntroHeaderWrapper,
} from "./IntroHeader.styles";

const IntroHeader = () => {
  return (
    <StyledIntroHeader
      variants={animatedHeader}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: "all", once: true }}
    >
      <StyledIntroHeaderWrapper>
        <StyledIntroHeaderText variants={animatedHeaderText}>
          Hi, i&apos;m Mathew
        </StyledIntroHeaderText>
      </StyledIntroHeaderWrapper>
      <StyledIntroHeaderWrapper>
        <StyledIntroHeaderText variants={animatedHeaderText}>
          a Web Developer
        </StyledIntroHeaderText>
      </StyledIntroHeaderWrapper>
    </StyledIntroHeader>
  );
};

export default IntroHeader;
