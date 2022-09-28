import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  max-width: 1000px;
  padding: 2rem;
  gap: 1rem;
`;

export const StyledSkillsWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export default StyledSkills;
