import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledFramework = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  gap: 1rem;
  font-size: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    flex: 1 0 auto;
  }
  text-decoration: none;
  color: ${({ theme: { accent } }) => accent};
  background-color: ${({ theme: { project } }) => project};
`;

export const StyledFrameworkText = styled.span`
  font-size: clamp(0.8rem, 5vw, 1rem);
  font-weight: bold;
`;

export default StyledFramework;
