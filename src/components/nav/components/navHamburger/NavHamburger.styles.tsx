import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavHamburger = styled(motion.span)`
  display: grid;
  place-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 200ms;
  cursor: pointer;
  color: ${({ theme: { navItem } }): string => navItem};
  &:hover {
    background-color: ${({ theme: { border } }): string => border};
  }
`;

export default StyledNavHamburger;
