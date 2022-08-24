import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbar = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 20px;
  user-select: none;
  background-color: ${({ theme: { navbar } }) => navbar};
`;

export const StyledNavbarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex: 1;
`;

export default StyledNavbar;
