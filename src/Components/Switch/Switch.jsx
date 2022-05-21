import styled from "@emotion/styled";
import { memo } from "react";
import { useSpring, animated } from "react-spring";

import Ball from "./Ball";

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  transition: background-color 200ms;
  cursor: pointer;
  background: ${({ theme: { background, backgroundDark }, state }) => {
    return state ? backgroundDark : background;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const Switch = ({ value = false, onClick }) => {
  const transition = useSpring({
    transform: value ? "translateX(1.4rem)" : "translateX(0rem)",
    config: {
      mass: 2,
      tension: 250,
      bounce: true,
    },
  });

  return (
    <StyledSwitch state={value} onClick={() => onClick(!value)}>
      <animated.div style={transition}>
        <Ball />
      </animated.div>
    </StyledSwitch>
  );
};

export default memo(Switch);
