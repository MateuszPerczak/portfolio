import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledIntroHeader = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
`;

export const StyledIntroHeaderWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

export const StyledIntroHeaderText = styled(motion.span)`
  font-weight: bold;
  font-size: clamp(1rem, 8vw, 4rem);
`;

export default StyledIntroHeader;
