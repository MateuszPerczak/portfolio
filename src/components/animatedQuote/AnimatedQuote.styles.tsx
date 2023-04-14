import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAnimatedQuote = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(1rem, 4vw, 2rem);
  padding: clamp(1rem, 9vw, 4rem) 20px 0 20px;
  blockquote {
    max-width: 600px;
  }
  .quote-wrapper {
    line-height: 0.7;
    text-align: justify;
    overflow-wrap: break-word;
  }
`;

export const StyledAnimatedLetter = styled(motion.span)`
  color: ${({ theme: { link } }): string => link};
  font-size: clamp(0.6rem, 5vw, 1rem);
`;

export default StyledAnimatedQuote;
