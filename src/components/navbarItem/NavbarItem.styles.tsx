import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbarItem = styled(motion.div)`
  font-size: clamp(0.8rem, 1.8vmax, 1.5rem);
  padding: 10px;
  cursor: pointer;
  transition: color 200ms;
  white-space: nowrap;
  color: ${({ theme: { link } }) => link};
  &:hover {
    color: ${({ theme: { color } }) => color};
  }
`;

export default StyledNavbarItem;
