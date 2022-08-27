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

export const StyledIntroWrapper = styled.div`
  overflow: hidden;
`;

export default StyledIntroHeader;
