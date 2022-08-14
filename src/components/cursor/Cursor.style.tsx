import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledCursor = styled(motion.div)`
  position: absolute;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  z-index: 2;
  border: 2px solid ${({ theme: { color } }) => color};
  pointer-events: none;
`;

export default StyledCursor;
