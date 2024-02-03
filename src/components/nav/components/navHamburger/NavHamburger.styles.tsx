import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavHamburger = styled(motion.button)`
  all: unset;
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
  .hamburger-icon-wrapper {
    display: grid;
    place-items: center;
  }
  &:focus-visible {
    outline: 1px solid ${({ theme: { color } }): string => color};
  }
`;

export default StyledNavHamburger;
