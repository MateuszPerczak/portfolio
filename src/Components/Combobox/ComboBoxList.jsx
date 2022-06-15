import styled from "@emotion/styled";
import { animated } from "react-spring";

const ComboBoxList = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 35px;
  border-radius: 10px;
  padding: 5px;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(5px) saturate(180%);
  background: ${({ theme: { backgroundBlur } }) => {
    return backgroundBlur;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default ComboBoxList;
