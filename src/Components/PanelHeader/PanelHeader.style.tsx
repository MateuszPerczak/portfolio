import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type StyledPanelHeaderComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  Record<string, unknown>
>;

const StyledPanelHeader: StyledPanelHeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  user-select: none;
  border-bottom: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default StyledPanelHeader;
