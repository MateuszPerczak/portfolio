import { ReactComponent as Down } from "@icons/down.svg";
import { ReactComponent as Mouse } from "@icons/mouse.svg";
import { motion } from "framer-motion";

import { animation, transition } from "./AnimatedHeader.animations";
import StyledAnimatedHeader, {
  StyledAnimatedControls,
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
      <StyledAnimatedControls variants={animation}>
        <Mouse />
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: [0, 5] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5,
            ease: [0.12, 0.23, 0.5, 1],
          }}
        >
          <Down />
        </motion.span>
      </StyledAnimatedControls>
    </StyledAnimatedHeader>
  );
};

export default AnimatedHeader;
