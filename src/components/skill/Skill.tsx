import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Skill = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: bold;
  padding: 8px 10px;
  border-radius: 4px;
  @media (max-width: 768px) {
    flex: 1 1 auto;
  }
  background-color: ${({ theme: { project } }) => project};
`;

export default Skill;
