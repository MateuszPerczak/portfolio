import { motion } from "framer-motion";
import type { FC } from "react";

import { animation, transition } from "./Header.animations";
import StyledHeader from "./Header.styles";
import type { HeaderProps } from "./Header.types";

const Header: FC<HeaderProps> = ({ text }): JSX.Element => {
  const splitedText = text.split("");

  return (
    <StyledHeader variants={transition} initial="initial" animate="animate">
      {splitedText.map((letter, index) => (
        <motion.span key={`animated-letter-${index}`} variants={animation}>
          {letter}
        </motion.span>
      ))}
    </StyledHeader>
  );
};

export default Header;
