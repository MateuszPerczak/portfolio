import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAnimatedText = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex: 1;
  .text-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    font-size: clamp(0.2rem, 4vw, 1.7rem);
  }
  .animated-title {
    font-weight: bold;
  }
  .description-wrapper {
    line-height: 1;
  }
  .animated-description {
    font-size: 1.3rem;
    font-weight: bold;

    color: ${({ theme: { link } }): string => link};
  }
`;

export default StyledAnimatedText;
