import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPageHeader = styled(motion.header)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: bold;
`;

export const StyledPageDescription = styled(motion.span)`
  font-size: clamp(1rem, 5vmax, 1.3rem);
  color: ${({ theme: { accent } }) => accent};
  letter-spacing: 0.1rem;
`;

export const StyledPageSubHeader = styled(motion.span)`
  font-size: clamp(2rem, 8vmax, 4rem);
  color: ${({ theme: { background } }) => background};
  background-color: ${({ theme: { accent } }) => accent};
  padding: 0 10px;
`;

export default StyledPageHeader;
