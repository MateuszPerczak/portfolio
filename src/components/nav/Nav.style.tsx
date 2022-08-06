import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  gap: 10px;
  top: 0;
  left: 0;
  height: 100%;
  padding: 10px;
  z-index: 1;
  user-select: none;
  border-right: 2px solid ${({ theme: { accent } }) => accent};

  backdrop-filter: blur(30px) saturate(360%);
`;

export const StyledNavHeader = styled.div`
  transform: rotate(-90deg);
  font-size: 1.1rem;
`;

export const StyledNavContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding-left: 20px;
  overflow: hidden;
`;

export default StyledNav;
