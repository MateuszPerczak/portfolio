import { animation, transition } from "./AnimatedHeader.animations";
import StyledAnimatedHeader, {
  StyledAnimatedDescription,
  StyledAnimatedTitle,
} from "./AnimatedHeader.styles";
import type { AnimatedHeaderProps } from "./AnimatedHeader.types";

const AnimatedHeader = ({ title, description }: AnimatedHeaderProps): JSX.Element => {
  return (
    <StyledAnimatedHeader
      variants={transition}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.7, once: true }}
    >
      {title.map((title, index) => (
        <StyledAnimatedTitle key={`title-${index}`} variants={animation}>
          {title}
        </StyledAnimatedTitle>
      ))}
      <StyledAnimatedDescription variants={animation}>
        {description}
      </StyledAnimatedDescription>
    </StyledAnimatedHeader>
  );
};

export default AnimatedHeader;
