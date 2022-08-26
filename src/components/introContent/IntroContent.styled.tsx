import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledIntroContent = styled(motion.article)`
  display: grid;
  place-items: center;
  width: 100%;
  height: 50%;
`;

export const StyledIntroContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: clamp(1rem, 8vw, 1rem);
  color: gray;
`;

export default StyledIntroContent;
