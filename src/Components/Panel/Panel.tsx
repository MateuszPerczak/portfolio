import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelDiv = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

const Panel: PanelDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme: { hamburger } }) => {
    return hamburger;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

export default Panel;
