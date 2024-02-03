import { m, useAnimation, type Variants } from "framer-motion";
import { useEffect, useMemo } from "react";

import StyledAnimatedText from "./AnimatedText.styles";
import type { AnimatedTextProps } from "./AnimatedText.types";

const AnimatedText = ({ text }: AnimatedTextProps): JSX.Element => {
  const spitedText = useMemo(() => Array.from(text.toLocaleUpperCase()), [text]);

  const controls = useAnimation();

  const textVariant: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.05,
      },
    },
  };

  const letterVariant: Variants = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 1,
        stiffness: 210,
      },
    },
  };

  useEffect(() => {
    const animate = async (): Promise<void> => {
      await controls.start("animate");
    };
    animate();
  }, []);

  return (
    <StyledAnimatedText initial="initial" animate={controls} variants={textVariant}>
      <div className="text-wrapper">
        {spitedText.map((letter, index) => (
          <m.span key={`letter-${index}`} variants={letterVariant}>
            {letter === " " ? "\u00A0" : letter}
          </m.span>
        ))}
      </div>
    </StyledAnimatedText>
  );
};

export default AnimatedText;
