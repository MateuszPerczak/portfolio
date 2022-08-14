import styled from "@emotion/styled";
import { m } from "framer-motion";

const StyledNav = styled(m.nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 10px;
  height: 100%;
  user-select: none;
  overflow: hidden;
  @media (max-width: 500px) {
    z-index: 3;
    position: absolute;
  }
  background: ${({ theme: { navbar } }) => {
    return navbar;
  }};
  border-right: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledNav;
