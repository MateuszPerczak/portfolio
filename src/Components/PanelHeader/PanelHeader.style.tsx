import styled from "@emotion/styled";
import PanelHeaderComponent from "./PanelHeader.types";

const StyledPanelHeader: PanelHeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme: { border } }) => border};
`;

export default StyledPanelHeader;
