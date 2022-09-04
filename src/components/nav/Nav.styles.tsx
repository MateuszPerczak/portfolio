import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  user-select: none;
  background-color: ${({ theme: { nav } }) => nav};
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  flex: 1 1 100%;
  padding: 0 clamp(10px, 10vw, 40px);
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export default StyledNav;
