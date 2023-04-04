import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAnimatedHeader = styled(motion.header)`
  flex: 1;
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

export default StyledAnimatedHeader;
