import styled from "@emotion/styled";
import { animated } from "react-spring";

export const StyledCombobox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  gap: 10px;
  min-width: fit-content;
  max-width: 180px;
  width: 30%;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  user-select: none;
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export const ComboboxList = styled(animated.div)`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme: { hamburger } }) => {
    return hamburger;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  box-shadow: 0 0 15px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
`;
