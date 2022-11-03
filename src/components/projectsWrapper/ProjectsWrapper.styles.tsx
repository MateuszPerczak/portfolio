import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProjectsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  max-width: 1000px;
  width: calc(100% - 2rem);
`;

export default StyledProjectsWrapper;
