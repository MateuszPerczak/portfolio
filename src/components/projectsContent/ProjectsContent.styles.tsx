import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProjectsContent = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex: 1 1 75%;
  width: 100%;
`;

export const StyledProjectsContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
`;

export default StyledProjectsContent;
