import { motion } from "framer-motion";

import { animation, descriptionAnimation, transition } from "./AnimatedText.animations";
import StyledAnimatedText from "./AnimatedText.styles";
import type { AnimatedTextProps } from "./AnimatedText.types";

const AnimatedText = ({ title, description }: AnimatedTextProps): JSX.Element => {
  const splittedDescription = description.split("");

  return (
    <StyledAnimatedText
      variants={transition}
      initial="offscreen"
      whileInView={["onscreen", "description"]}
      viewport={{ amount: 0.7, once: true }}
    >
      <p className="text-wrapper">
        <motion.span className="animated-title" variants={animation}>
          {title}
        </motion.span>
        <span className="description-wrapper">
          {splittedDescription.map((letter, index) => (
            <motion.span
              key={`animated-description-letter-${index}`}
              className="animated-description"
              variants={descriptionAnimation}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </p>
    </StyledAnimatedText>
  );
};

export default AnimatedText;
