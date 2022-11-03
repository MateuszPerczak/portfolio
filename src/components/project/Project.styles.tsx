import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProject = styled(motion.section)`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  height: 300px;
  max-width: 1000px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme: { project } }) => project};
`;

export default StyledProject;
