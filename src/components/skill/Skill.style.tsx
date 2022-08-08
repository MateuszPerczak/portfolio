import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledSkill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 250px;
  padding: 20px;
  background-color: ${({ theme: { card } }) => card};
`;

export const StyledSkillHeader = styled.span`
  letter-spacing: 0.2rem;
`;

export const StyledSkillDescription = styled.span`
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: ${({ theme: { description } }) => description};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default StyledSkill;
