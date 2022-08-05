import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPageHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: bold;
`;

export const StyledPageDescription = styled(motion.span)`
  font-size: 1.3rem;
  color: ${({ theme: { accent } }) => accent};
`;

export const StyledPageSubHeader = styled(motion.span)`
  font-size: 4rem;
`;

export default StyledPageHeader;
