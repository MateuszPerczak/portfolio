import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledExperience = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme: { card } }) => card};
`;

export const StyledExperienceHeader = styled.span`
  letter-spacing: 0.2rem;
`;

export const StyledExperienceDescription = styled.span`
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: ${({ theme: { description } }) => description};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default StyledExperience;
