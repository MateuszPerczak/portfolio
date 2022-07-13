import styled from "@emotion/styled";
import Panel from "../Panel/Panel";
import PanelComponent from "../Panel/Panel.types";
import PanelProjectLangsComponent, {
  PanelProjectDescriptionComponent,
} from "./PanelProject.types";

export const StyledProjectPanel: PanelComponent = styled(Panel)`
  width: 40%;
  overflow: hidden;
  @media (max-width: 400px) {
    min-width: 180px;
  }
  min-width: 300px;
  flex: 1;
`;

export const StyledProjectLangs: PanelProjectLangsComponent = styled.span`
  font-size: 0.8rem;
  padding: 10px;
  background-color: ${({ theme: { background } }) => background};
  color: ${({ theme: { date } }) => date};
`;

export const StyledProjectDescription: PanelProjectDescriptionComponent = styled.span`
  font-size: 0.9rem;
  padding: 10px;
  flex: 1;
`;
