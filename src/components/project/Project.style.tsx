import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProject = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 300px;
  padding: 20px;
  background-color: ${({ theme: { card } }) => card};
  border: 2px solid transparent;
  transition: border 200ms;
  &:hover {
    border: 2px solid ${({ theme: { accent } }) => accent};
  }
`;

export const StyledProjectHeader = styled(motion.span)`
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
`;

export const StyledProjectDescription = styled(motion.span)`
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: ${({ theme: { description } }) => description};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default StyledProject;
