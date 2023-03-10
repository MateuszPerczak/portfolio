import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavMenu = styled(motion.div)`
  position: absolute;
  right: 20px;
  top: 70px;
  display: flex;
  border-radius: 10px;
  z-index: 1;
  overflow: hidden;
  padding: 10px;
  background-color: ${({ theme: { nav } }): string => nav};
  box-shadow: 0 0 10px ${({ theme: { shadow } }): string => shadow};
  border: 2px solid ${({ theme: { border } }): string => border};
`;

export default StyledNavMenu;
