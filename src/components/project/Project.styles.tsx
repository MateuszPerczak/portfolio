import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProject = styled(motion.a)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1 0.5 300px;
  text-decoration: none;
  background-color: ${({ theme: { color } }) => color};
  color: ${({ theme: { background } }) => background};
`;

export const StyledProjectHeader = styled.span`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: bold;
`;

export default StyledProject;
