import { Theme } from "@emotion/react";
import styled, { StyledComponent } from "@emotion/styled";
import { ElementType, DetailedHTMLProps, HTMLAttributes } from "react";

type NavSpacerComponent = StyledComponent<
  {
    theme?: Theme;
    as?: ElementType;
  },
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  Record<string, unknown>
>;

const NavSpacer: NavSpacerComponent = styled.div`
  flex: 1;
`;

export default NavSpacer;
