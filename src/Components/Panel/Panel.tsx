import styled from "@emotion/styled";
import PanelComponent from "./Panel.types";

const Panel: PanelComponent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${({ theme: { hamburger } }) => {
    return hamburger;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  box-shadow: 0 0 5px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
`;

export default Panel;
