import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex: 1 0.2 100px;
  font-size: clamp(0.8rem, 3vw, 2rem);
  font-weight: bold;
  white-space: nowrap;
`;

export default Skill;
