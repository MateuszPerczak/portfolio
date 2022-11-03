import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  max-width: 1000px;
  padding: 32px;
  gap: 16px;
`;

export const StyledSkillsWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

export default StyledSkills;
