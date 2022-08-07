import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledProject = styled(motion.div)`
  padding: 20px;
  flex: 1;
  min-width: 200px;
  height: 200px;
  background-color: ${({ theme: { card } }) => card};
  box-shadow: 0 0 5px ${({ theme: { shadow } }) => shadow};
  border: 2px solid transparent;
  transition: border 200ms;
  &:hover {
    border: 2px solid ${({ theme: { accent } }) => accent};
  }
`;

export default StyledProject;
