import { motion } from "framer-motion";
import type { FC } from "react";

import { animation, animationChildren, transition } from "./PageHeader.animations";
import StyledPageHeader from "./PageHeader.styles";
import type { PageHeaderProps } from "./PageHeader.types";

const PageHeader: FC<PageHeaderProps> = ({
  header,
  children,
}: PageHeaderProps): JSX.Element => {
  return (
    <StyledPageHeader variants={transition} initial="initial" animate="animate">
      {header && (
        <h1>
          {header.split("").map((letter, index) => (
            <motion.span key={`animated-letter-${index}`} variants={animation}>
              {letter}
            </motion.span>
          ))}
        </h1>
      )}
      <motion.div variants={animationChildren}>{children}</motion.div>
    </StyledPageHeader>
  );
};

export default PageHeader;
