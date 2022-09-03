import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
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
  padding: 0 40px;
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1.1rem;
  color: ${({ theme: { accent } }) => accent};
`;

export default StyledNav;
