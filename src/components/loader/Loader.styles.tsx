import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledLoader = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme: { accent } }) => accent};
`;

export const StyledLoaderElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  flex: 1 1 100%;
  color: ${({ theme: { color } }) => color};
`;

export default StyledLoader;
