import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type PanelContentComponent = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
>;

const PanelContent: PanelContentComponent = styled.div`
  display: flex;
  padding: 10px;
`;

export default PanelContent;
