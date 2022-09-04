import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPageNotFound = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1 1 100%;
  font-size: 8rem;
  user-select: none;
`;

export const PageHeader = styled.header`
  font-size: 2rem;
  font-weight: bold;
`;

export default StyledPageNotFound;
