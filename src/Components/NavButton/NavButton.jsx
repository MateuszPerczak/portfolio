import styled from "@emotion/styled";
import { animated } from "react-spring";

const NavButton = styled(animated.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  height: 100%;
  aspect-ratio: 1;
  user-select: none;
  border-radius: 8px;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { nav } }) => {
      return nav;
    }};
    backdrop-filter: blur(10px) saturate(180%);
    &:before {
      transform: scale(1);
      transition-delay: 700ms;
    }
  }
  &:active {
    background-color: transparent;
    backdrop-filter: none;
    &:before {
      transition-delay: 0ms;
      transform: scale(0);
    }
  }
  &:before {
    content: ${({ tooltip }) => {
      return `"${tooltip}"`;
    }};
    transform: scale(0);
    position: absolute;
    top: -35px;
    font-size: 11px;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 8px;
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.4);
    transition: transform 100ms;
    backdrop-filter: blur(10px) saturate(180%);
    background-color: ${({ theme: { nav } }) => {
      return nav;
    }};
  }
`;

export default NavButton;
