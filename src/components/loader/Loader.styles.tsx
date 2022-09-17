import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledLoader = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  overflow: hidden;
`;

export const StyledLoaderElement = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  flex: 1 1 100%;
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledLoader;
