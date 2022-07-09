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
  background: ${({ theme: { hamburger } }) => {
    return hamburger;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
  box-shadow: 0 0 5px 0
    ${({ theme: { shadow } }) => {
      return shadow;
    }};
`;

export default Panel;
