import styled from "@emotion/styled";
import PanelWrapperComponent from "./PanelWrapper.types";

const PanelWrapper: PanelWrapperComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  gap: 10px;
`;

export default PanelWrapper;
