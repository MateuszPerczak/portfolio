import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelHeaderHeader = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  Record<string, unknown>
>;

const StyledPanelHeader: PanelHeaderHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme: { border } }) => border};
`;

export default StyledPanelHeader;
