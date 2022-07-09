import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";
import Panel from "../Panel/Panel";

type PanelProjectSpan = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
  Record<string, unknown>
>;

export const StyledProjectPanel = styled(Panel)`
  width: 40%;
  overflow: hidden;
  @media (max-width: 400px) {
    min-width: 180px;
  }
  min-width: 300px;
  flex: 1;
`;

export const StyledProjectLangs: PanelProjectSpan = styled.span`
  font-size: 0.8rem;
  padding: 10px;
  background-color: ${({ theme: { background } }) => background};
  color: ${({ theme: { date } }) => date};
`;

export const StyledProjectDescription: PanelProjectSpan = styled.span`
  font-size: 0.9rem;
  padding: 10px;
  flex: 1;
`;
