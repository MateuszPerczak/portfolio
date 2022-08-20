import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 300px;
  height: 100%;
  user-select: none;
  z-index: 2;
  border-right: 2px solid ${({ theme: { accent } }) => accent};
  background-color: ${({ theme: { navbar } }) => navbar};
  backdrop-filter: blur(30px) saturate(240%);
`;

export const StyledNavbarHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  transform: rotate(-90deg);
  height: 70px;
  font-size: 1.1rem;
`;

export const StyledNavbarItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  padding-left: 20px;
  overflow: hidden;
`;

export default StyledNavbar;
