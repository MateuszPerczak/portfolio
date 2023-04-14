import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAnimatedHeader = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: clamp(1rem, 9vw, 4rem);
`;

export const StyledAnimatedTitle = styled(motion.span)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(1rem, 9vw, 4rem);
  font-weight: bold;
  line-height: 1.3;
`;

export const StyledAnimatedDescription = styled(motion.span)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(0.2rem, 4vw, 1.7rem);
  font-weight: bold;
  padding-top: 10px;
  color: ${({ theme: { link } }): string => link};
`;

export default StyledAnimatedHeader;
