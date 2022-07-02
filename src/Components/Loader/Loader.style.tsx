import { animated } from "react-spring";
import styled from "@emotion/styled";

export const StyledLoader = styled.div`
  display: grid;
  place-items: center;
  flex: 1;
  overflow: hidden;
  user-select: none;
`;

export const AnimatedLoader = styled(animated.div)`
  display: grid;
  place-items: center;
  font-size: 7vmin;
`;
