import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

const Panel: PanelComponent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${({ theme: { hamburger } }) => {
    return hamburger;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default Panel;
