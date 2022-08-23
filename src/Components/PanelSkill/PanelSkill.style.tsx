import styled from "@emotion/styled";
import PanelSkillComponent, {
  PanelSkillHeaderComponent,
  PanelSkillDescriptionComponent,
} from "./PanelSkill.types";

export const StyledPanelSkill: PanelSkillComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const StyledPanelSkillHeader: PanelSkillHeaderComponent = styled.span`
  font-size: 1rem;
`;

export const StyledPanelSkillDescription: PanelSkillDescriptionComponent = styled.span`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${({ theme: { date } }) => {
    return date;
  }};
`;
