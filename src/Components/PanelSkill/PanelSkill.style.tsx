import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelSkillDiv = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

type PanelSkillSpan = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

export const StyledPanelSkill: PanelSkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const StyledPanelSkillHeader: PanelSkillSpan = styled.span`
  font-size: 1rem;
`;

export const StyledPanelSkillDescription: PanelSkillSpan = styled.span`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${({ theme: { date } }) => {
    return date;
  }};
`;
