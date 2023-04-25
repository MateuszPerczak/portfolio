import { animation, transition } from "./AnimatedHeader.animations";
import StyledAnimatedHeader, { StyledAnimatedText } from "./AnimatedHeader.styles";
import type { AnimatedHeaderProps } from "./AnimatedHeader.types";

const AnimatedHeader = ({ title }: AnimatedHeaderProps): JSX.Element => {
  return (
    <StyledAnimatedHeader
      variants={transition}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.7, once: true }}
    >
      {title.map((title, index) => (
        <StyledAnimatedText
          key={`title-${index}`}
          className="header-title"
          variants={animation}
        >
          {title}
        </StyledAnimatedText>
      ))}
    </StyledAnimatedHeader>
  );
};

export default AnimatedHeader;
