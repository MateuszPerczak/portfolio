import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelSkillWrapperDiv = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

const PanelSkillWrapper: PanelSkillWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default PanelSkillWrapper;
