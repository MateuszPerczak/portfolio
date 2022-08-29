import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledIntroContent = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1 1 50%;
  width: 100%;
  font-size: clamp(1rem, 5vw, 2rem);
`;

export default StyledIntroContent;