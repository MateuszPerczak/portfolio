import styled from "@emotion/styled";
import PanelExpComponent, { PanelExpDateComponent } from "./PanelExp.types";

export const StyledPanelExp: PanelExpComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
`;

export const StyledPanelExpDate: PanelExpDateComponent = styled.span`
  font-size: 0.8rem;
  color: ${({ theme: { date } }) => date};
`;
