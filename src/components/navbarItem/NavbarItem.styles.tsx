import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbarItem = styled(motion.div)`
  font-size: 1.2rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: color 200ms, background-color 200ms;
  white-space: nowrap;
  border-radius: 10px;
  color: ${({ theme: { navbarItem } }) => navbarItem};
  &:hover {
    color: ${({ theme: { color } }) => color};
    background-color: ${({ theme: { background } }) => background};
  }
`;

export default StyledNavbarItem;
