import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 10px;
  z-index: 1;
  user-select: none;
  border-right: 2px solid ${({ theme: { accent } }) => accent};
  background-color: ${({ theme: { navbar } }) => navbar};
  backdrop-filter: blur(30px) saturate(360%);
`;

export const StyledNavHeader = styled.div`
  transform: rotate(-90deg);
  font-size: 1.1rem;
`;

export const StyledNavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  overflow: hidden;
`;

export default StyledNav;
