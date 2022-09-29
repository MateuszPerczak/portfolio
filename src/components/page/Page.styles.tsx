import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1 1 100%;
`;

export const StyledPageAnimation = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme: { accent } }) => accent};
  z-index: 2;
`;

export default StyledPage;
