import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPageSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;
  padding-bottom: 10px;
`;

export const StyledPageHeader = styled.span`
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  background-color: ${({ theme: { card } }) => card};

  padding: 10px;
`;

export const StyledPageContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export default StyledPageSection;
