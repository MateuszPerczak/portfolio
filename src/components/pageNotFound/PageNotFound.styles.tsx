import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPageNotFound = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 1 1 100%;
  font-size: clamp(5rem, 20vw, 8rem);
  user-select: none;
`;

export const PageNotFoundHeader = styled.header`
  font-size: clamp(1rem, 4vw, 2rem);
  font-weight: bold;
`;

export default StyledPageNotFound;
