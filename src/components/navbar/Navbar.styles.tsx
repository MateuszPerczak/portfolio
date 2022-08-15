import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbar = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  gap: 10px;
  top: 0;
  left: 0;

  width: 100%;
  padding: 20px;
  z-index: 1;
  user-select: none;
  border-bottom: 2px solid ${({ theme: { accent } }) => accent};
  background-color: ${({ theme: { navbar } }) => navbar};
`;

export const StyledNavbarItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  padding: 0 10px;
  flex: 1;
`;

export default StyledNavbar;
