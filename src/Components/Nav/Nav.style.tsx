import styled from "@emotion/styled";
import { animated } from "react-spring";

const StyledNav = styled(animated.nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 10px;
  height: 100%;
  user-select: none;
  overflow: hidden;
  background: ${({ theme: { navbar } }) => {
    return navbar;
  }};
  border-right: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledNav;
