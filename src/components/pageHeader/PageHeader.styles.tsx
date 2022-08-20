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
  font-size: clamp(1rem, 2vmax, 1.4rem);
  color: ${({ theme: { accent } }) => accent};
  letter-spacing: 0.1rem;
  font-family: "Poppins";
`;

export const StyledPageSubHeader = styled(motion.span)`
  font-size: clamp(3rem, 6vmax, 3.5rem);
  color: ${({ theme: { background } }) => background};
  background-color: ${({ theme: { accent } }) => accent};
  padding: 0 10px;
`;

export default StyledPageHeader;
