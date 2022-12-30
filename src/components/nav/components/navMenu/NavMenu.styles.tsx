import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavMenu = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1;
  background-color: ${({ theme: { nav } }): string => nav};
  border-bottom: 1px solid ${({ theme: { border } }): string => border};
  box-shadow: 0 0 5px ${({ theme: { shadow } }): string => shadow};
`;

export default StyledNavMenu;
