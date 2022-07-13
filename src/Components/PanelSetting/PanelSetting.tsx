import styled from "@emotion/styled";
import PanelSettingComponent, {
  PanelSettingInfoComponent,
} from "./PanelSetting.types";

export const PanelSetting: PanelSettingComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const PanelSettingInfo: PanelSettingInfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;
