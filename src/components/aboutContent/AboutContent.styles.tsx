import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledAboutContent = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex: 1 1 75%;
  width: 100%;
`;
export const StyledAboutContentButtons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1 1 75%;
  width: 100%;
`;

export default StyledAboutContent;
