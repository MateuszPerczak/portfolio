import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAnimatedHeader = styled(motion.header)`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 calc(100vh - 300px);
  .header-title {
    font-size: clamp(1rem, 9vw, 4rem);
    font-weight: bold;
    line-height: 1.3;
  }
  .header-description {
    font-size: clamp(0.2rem, 4vw, 1.7rem);
    font-weight: bold;
    padding-top: 10px;
    color: ${({ theme: { link } }): string => link};
  }
`;

export const StyledAnimatedText = styled(motion.span)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledAnimatedHeader;
