import { ReactComponent as Quote } from "@icons/quote.svg";

import { animation, transition } from "./AnimatedQuote.animations";
import StyledAnimatedQuote, { StyledAnimatedLetter } from "./AnimatedQuote.styles";
import type { AnimatedQuoteProps } from "./AnimatedQuote.types";

const AnimatedQuote = ({ quote }: AnimatedQuoteProps): JSX.Element => {
  const splittedQuote = quote.split(" ");

  return (
    <StyledAnimatedQuote
      variants={transition}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.7, once: true }}
    >
      <blockquote>
        <Quote />
        <p className="quote-wrapper">
          {splittedQuote.map((letter, index) => (
            <StyledAnimatedLetter key={`quote-letter-${index}`} variants={animation}>
              {letter}{" "}
            </StyledAnimatedLetter>
          ))}
        </p>
      </blockquote>
    </StyledAnimatedQuote>
  );
};

export default AnimatedQuote;
